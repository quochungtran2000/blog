import { Layout } from '../../layout';
import { Editor } from '@tinymce/tinymce-react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ICity, ICreateJob, IDistrict, IWard } from '../../../utils/interface';
import { toast } from 'react-toastify';
// import axios from 'axios';
import { careerApi, locationApi } from '../../../api';

const Input = styled(TextField)<any>`
  background-color: #fff;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;

const FormController = styled(FormControl)<any>`
  background-color: #fff;
  color: ${({ theme }) => theme.textColor};
  width: 100%;
`;

export default function CreateJob() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [image, setImage] = useState('');
  const [level, setLevel] = useState('all');
  const [city, setCity] = useState<number>(0);
  const [district, setDistrict] = useState<number>(0);
  const [ward, setWard] = useState<number>(0);
  const [street, setStreet] = useState('');
  const [cities, setCities] = useState<ICity[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);
  const [wards, setWards] = useState<IWard[]>([]);

  const handleLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
    setDistrict(0);
  };

  const handleDistrictChange = (e: any) => {
    setDistrict(e.target.value);
    setWard(0);
  };

  const handleWardChange = (e: any) => {
    setWard(e.target.value);
  };

  const handleStreetChange = (e: any) => {
    setStreet(e.target.value);
  };

  const getCity = async () => {
    try {
      const { data } = await locationApi.city();
      setCities(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getDistrict = async () => {
    try {
      if (city) {
        const { data } = await locationApi.district(city);
        setDistricts(data);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getWard = async () => {
    try {
      if (district) {
        const { data } = await locationApi.ward(city, district);
        setWards(data);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  useEffect(() => {
    getDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  useEffect(() => {
    getWard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [district]);

  const handleEditorChange = (e: any) => {
    setContent(e.target.getContent());
  };

  const btnstyle = { margin: '0.5rem 0' };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // const handleChangeImage = (e: any) => {
  //   console.log(e.target.files[0]);
  //   setImage(e?.target?.files?.[0]);
  // };

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    const errors: string[] = [];
    if (!title) errors.push('title must be require!');
    if (!level) errors.push('level must be require!');
    if (!city) errors.push('city must be require!');
    if (!district) errors.push('district must be require!');
    if (!ward) errors.push('ward must be require!');
    if (!street) errors.push('street must be require!');
    if (!content) errors.push('content must be require!');

    if (errors.length) return errors.map((message) => toast.error(message));

    const data: ICreateJob = {
      title: title,
      content: content,
      level: level,
      city_id: city,
      ward_id: ward,
      district_id: district,
      street: street,
    };

    console.log(data);

    await careerApi.create(data).catch((error: any) => {
      toast.error('Create Post Error');
    });

    toast.success('Create Post Success');
  };

  return (
    <Layout>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}> Create Post</h3>
      <Input
        style={btnstyle}
        value={title}
        label="Title"
        placeholder="Enter title"
        fullWidth
        required
        onChange={handleChangeTitle}
      />
      {/* <Input style={btnstyle} type="file" fullWidth required onChange={handleChangeImage} /> */}

      <Grid container spacing={2} columns={16}>
        <Grid item xs={4}>
          <FormController sx={{ margin: '0.5rem 1rem 0.5rem 0', width: '100%' }}>
            <InputLabel id="levelLabel">Level</InputLabel>
            <Select
              labelId="levelLabel"
              id="levelLabel"
              value={level}
              label="level"
              onChange={handleLevelChange}
              defaultValue={'all'}
            >
              <MenuItem value={'all'}>all level</MenuItem>
              <MenuItem value={'itern'}>itern</MenuItem>
              <MenuItem value={'junior'}>junior</MenuItem>
              <MenuItem value={'middle'}>middle</MenuItem>
              <MenuItem value={'senior'}>senior</MenuItem>
              <MenuItem value={'techlead'}>techlead</MenuItem>
            </Select>
          </FormController>
        </Grid>
        <Grid item xs={4}>
          <FormController sx={{ margin: '0.5rem 1rem 0.5rem 0' }}>
            <InputLabel id="cityLabel">City</InputLabel>
            <Select labelId="cityLabel" id="cityLabel" value={city} label="City" onChange={handleCityChange}>
              <MenuItem key={999} value={0}>
                Select City..
              </MenuItem>
              {cities?.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormController>
        </Grid>

        <Grid item xs={4}>
          <FormController sx={{ margin: '0.5rem 1rem 0.5rem 0' }}>
            <InputLabel id="districtLabel">District</InputLabel>
            <Select
              labelId="districtLabel"
              id="districtLabel"
              value={district}
              label="Dictrict"
              onChange={handleDistrictChange}
              disabled={!city}
            >
              <MenuItem key={999} value={0}>
                Select District..
              </MenuItem>
              {districts?.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormController>
        </Grid>

        <Grid item xs={4}>
          <FormController sx={{ margin: '0.5rem 1rem 0.5rem 0' }}>
            <InputLabel id="wardLabel">Ward</InputLabel>
            <Select
              labelId="wardLabel"
              id="wardLabel"
              value={ward}
              label="Ward"
              onChange={handleWardChange}
              disabled={!district}
            >
              {' '}
              <MenuItem key={999} value={0}>
                Select Ward..
              </MenuItem>
              {wards?.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormController>
        </Grid>
      </Grid>

      <Input
        style={btnstyle}
        value={street}
        label="Street"
        placeholder="Street"
        fullWidth
        required
        onChange={handleStreetChange}
      />

      <Editor
        initialValue=""
        init={{
          height: 500,
          menubar: true,

          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'textpattern',
          ],
          toolbar: `undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help`,
          textpattern_patterns: [
            { start: '*', end: '*', format: 'italic' },
            { start: '**', end: '**', format: 'bold' },
            { start: '#', format: 'h1' },
            { start: '##', format: 'h2' },
            { start: '###', format: 'h3' },
            { start: '####', format: 'h4' },
            { start: '#####', format: 'h5' },
            { start: '######', format: 'h6' },
            { start: '1. ', cmd: 'InsertOrderedList' },
            { start: '* ', cmd: 'InsertUnorderedList' },
            { start: '- ', cmd: 'InsertUnorderedList' },
          ],
        }}
        onChange={handleEditorChange}
      />

      <div style={{ margin: '2rem auto', textAlign: 'center' }}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Layout>
  );
}
