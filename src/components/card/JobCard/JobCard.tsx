import { IJob } from '../../../utils/interface';
import * as S from './JobCard.styled';
import Box from '@mui/material/Box';
type Props = {
  data: IJob;
  count: number;
};

export default function JobCard({ data, count }: Props) {
  return (
    <Box sx={{ background: '#fff', padding: '0.5rem' }}>
      <S.SPopularCard count={+count + 1}>
        <S.SPopularCardContent>
          <S.SPopularCardTitle>
            <S.SPopularCardLink to={`/career/${data.id}`}>{data.title}</S.SPopularCardLink>
          </S.SPopularCardTitle>
          <S.SPopularCardHeader>
            <S.SPopularCardInfo>
              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="Level" />
                <S.SJobInfoLocationValue value={data.level} />
              </S.SJobInfoLocation>

              {/* <S.SJobInfoLocation>
              <S.SJobInfoLocationTitle title="Street" />
              <S.SJobInfoLocationValue value={data.location.street} />
            </S.SJobInfoLocation>

            <S.SJobInfoLocation>
              <S.SJobInfoLocationTitle title="Ward" />
              <S.SJobInfoLocationValue value={data.location.ward_name} />
            </S.SJobInfoLocation> */}

              {/* <S.SJobInfoLocation>
              <S.SJobInfoLocationTitle title="District" />
              <S.SJobInfoLocationValue value={data.location.district_name} />
            </S.SJobInfoLocation>

            <S.SJobInfoLocation>
              <S.SJobInfoLocationTitle title="City" />
              <S.SJobInfoLocationValue value={data.location.city_name} />
            </S.SJobInfoLocation> */}

              {/* <S.SJobInfoPostTime>
              <S.SJobInfoPostAt />
              <S.SJobInfoPostAtTime time={new Date(data.update_date).toLocaleDateString()} />
            </S.SJobInfoPostTime> */}
            </S.SPopularCardInfo>
            <S.SPopularCardInfo>
              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="Location" />
                <S.SJobInfoLocationValue value={data.location.district_name + ', ' + data.location.city_name} />
              </S.SJobInfoLocation>
            </S.SPopularCardInfo>
            <S.SPopularCardInfo>
              {/* <S.SPopularCardLabel>
              <S.SPopularCardLink to="/">{data.author.fullname}</S.SPopularCardLink>
            </S.SPopularCardLabel> */}
              {/* <S.SPopularCardTime>{new Date(data.update_date).toLocaleDateString('en-GB')}</S.SPopularCardTime> */}
              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="PostAt" />
                <S.SJobInfoLocationValue value={new Date(data.update_date).toLocaleDateString('en-GB')} />
              </S.SJobInfoLocation>
            </S.SPopularCardInfo>
          </S.SPopularCardHeader>
        </S.SPopularCardContent>
      </S.SPopularCard>
    </Box>
  );
}
