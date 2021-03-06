import { Layout } from '../../layout';
import { Editor } from '@tinymce/tinymce-react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ICategory, ICreatePost, ITag } from '../../../utils/interface';
import categoryApi from '../../../api/categoryApi';
import { toast } from 'react-toastify';
import tagApi from '../../../api/tagApi';
import axios from 'axios';
import { postApi } from '../../../api';
import { useHistory } from 'react-router-dom';

const Input = styled(TextField)<any>`
  background-color: #fff;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1rem;
`;
interface ISelect {
  id: number;
  selected: boolean;
}

export default function CreatePost() {
  const history = useHistory()
  const [category, setCategory] = useState<ICategory[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectTags, setSelectTags] = useState<ISelect[]>([]);
  const [selectCategory, setSelectCategory] = useState<ISelect[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const getCategory = async () => {
    try {
      const { data } = await categoryApi.categories();
      setCategory(data);
      setSelectCategory(
        data.map((item: ICategory): ISelect => {
          return { id: item.id, selected: false };
        })
      );
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const getTag = async () => {
    try {
      const { data } = await tagApi.tags();
      setTags(data);
      setSelectTags(
        data.map((item: ITag): ISelect => {
          return { id: item.id, selected: false };
        })
      );
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getCategory();
    getTag();
  }, []);

  const handleEditorChange = (e: any) => {
    setContent(e.target.getContent());
  };

  const btnstyle = { margin: '0.5rem 0' };
  const handleTagChange = (event: any) => {
    const data = [...selectTags];
    const set = data.map((item: ISelect) => {
      return { id: item.id, selected: true };
    });
    setSelectTags(set);
  };

  const handleTagOptionChange = (index: number) => {
    const data = [...selectTags];
    const selected = data[index];
    const before = data.slice(0, index);
    const after = data.slice(index + 1, data.length);
    selected.selected = !selected.selected;
    setSelectTags([...before, selected, ...after]);
  };

  const checkSelectTag = () => {
    const data = [...selectTags];
    if (data.every((item: ISelect) => item.selected === false)) return false;
    if (data.every((item: ISelect) => item.selected === true)) return false;
    if (data.filter((item: ISelect) => item.selected === true).length !== data.length) return true;
  };

  const handleCategoryChange = (event: any) => {
    const data = [...selectCategory];
    const set = data.map((item: ISelect) => {
      return { id: item.id, selected: true };
    });
    setSelectCategory(set);
  };

  const handleCategoryOptionChange = (index: number) => {
    const data = [...selectCategory];
    const selected = data[index];
    const before = data.slice(0, index);
    const after = data.slice(index + 1, data.length);
    selected.selected = !selected.selected;
    setSelectCategory([...before, selected, ...after]);
  };

  const checkSelectCategory = () => {
    const data = [...selectCategory];
    if (data.every((item: ISelect) => item.selected === false)) return false;
    if (data.every((item: ISelect) => item.selected === true)) return false;
    if (data.filter((item: ISelect) => item.selected === true).length !== data.length) return true;
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const getSelectId = (data: any[]): number[] => {
    const arr = data?.filter((i) => i.selected === true);
    return arr.map((i) => i.id);
  };

  const handleChangeImage = (e: any) => {
    console.log(e.target.files[0]);
    setImage(e?.target?.files?.[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const asd = new FormData();
    asd.append('file', image);
    asd.append('upload_preset', 'ceh3abtd');

    const cloudinaryResponse: any = await axios
      .post('https://api.cloudinary.com/v1_1/hunghamhoc/image/upload', asd, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data`,
        },
      })
      .catch((err: any) => toast.error('Upload image error'));
    // .then((res) => console.log(res));
    const data: ICreatePost = {
      title: title,
      content: content,
      categories: getSelectId(selectCategory),
      tags: getSelectId(selectTags),
      image_url: cloudinaryResponse?.data?.url || '',
    };

    await postApi.create(data).catch((error: any) => {
      toast.error('Create Post Error');
    });
    toast.success('Create Post Success');

    history.push({pathname: '/my-post'})
    console.log(data);
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
      <Input style={btnstyle} type="file" fullWidth required onChange={handleChangeImage} />

      <Accordion sx={{ margin: '0.5rem 0' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <FormControlLabel
            label="Tags"
            control={
              <Checkbox
                checked={selectTags.every((item: ISelect) => item.selected === true)}
                indeterminate={checkSelectTag()}
                onChange={handleTagChange}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {tags?.map((item: ITag, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  label={item.title}
                  control={
                    <Checkbox checked={selectTags?.[index]?.selected} onChange={() => handleTagOptionChange(index)} />
                  }
                />
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ margin: '0.5rem 0' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <FormControlLabel
            label="Categories"
            control={
              <Checkbox
                checked={selectCategory.every((item: ISelect) => item.selected === true)}
                indeterminate={checkSelectCategory()}
                onChange={handleCategoryChange}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {category?.map((item: ICategory, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  label={item.title}
                  control={
                    <Checkbox
                      checked={selectCategory?.[index]?.selected}
                      onChange={() => handleCategoryOptionChange(index)}
                    />
                  }
                />
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>

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
