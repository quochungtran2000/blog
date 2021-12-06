import { Avatar } from "@mui/material";
import { IJob } from "../../utils/interface";
import * as S from "./Job.styled";

type Props = {
  data: IJob;
};

export default function Job({ data }: Props) {
  function createMarkup(data: any) {
    return {
      __html: data,
    };
  }

  return (
    <S.SJobDetail>
      <S.SJobContent>
        <S.SJobHeadLine>
          <S.SJobTitle>{data.title}</S.SJobTitle>
          <S.SJobInfo>
            <S.SJobInfoHeader>
              <S.SJobInfoImage>
                <Avatar
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  src={"../../assets/images/avatarpng.png"}
                />
              </S.SJobInfoImage>

              <S.SJobInfoAuthor>
                <S.SJobInfoAuthorName />
                <S.SJobInfoAuthorLink
                  author={data.author.fullname}
                ></S.SJobInfoAuthorLink>
              </S.SJobInfoAuthor>

              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="Level" />
                <S.SJobInfoLocationValue value={data.level} />
              </S.SJobInfoLocation>

              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="Street" />
                <S.SJobInfoLocationValue value={data.location.street} />
              </S.SJobInfoLocation>

              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="Ward" />
                <S.SJobInfoLocationValue value={data.location.ward_name} />
              </S.SJobInfoLocation>

              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="District" />
                <S.SJobInfoLocationValue value={data.location.district_name} />
              </S.SJobInfoLocation>

              <S.SJobInfoLocation>
                <S.SJobInfoLocationTitle title="City" />
                <S.SJobInfoLocationValue value={data.location.city_name} />
              </S.SJobInfoLocation>

              <S.SJobInfoPostTime>
                <S.SJobInfoPostAt />
                <S.SJobInfoPostAtTime
                  time={new Date(data.update_date).toLocaleDateString()}
                />
              </S.SJobInfoPostTime>
            </S.SJobInfoHeader>
          </S.SJobInfo>
        </S.SJobHeadLine>

        <S.SJobImage>
          {/* <img src={data.image_url} alt={data.title}></img> */}
        </S.SJobImage>

        <S.SJobEntry>
          <S.SJobBody dangerouslySetInnerHTML={createMarkup(data.content)} />
        </S.SJobEntry>

        <S.SJobComment>
          <S.SJobCommentWidger>
            <S.SJobCommentWidgerContent></S.SJobCommentWidgerContent>
          </S.SJobCommentWidger>
        </S.SJobComment>
      </S.SJobContent>

      {/* <>
        <b>Công ty NodeTop1 tuyển dụng vị trí intership Nodejs với những yêu cầu sau đây:</b>
        <p></p><p></p>
        <b>Yêu cầu tối thiểu:</b>
        <ul>
          <li>Có kinh nghiệm với các framework như ReactJs, ExpressJs, ..</li>
          <li>Hiểu biết về html5 và css3</li>
          <li>Biết sử dụng Postman</li>
          <li>Biết sử dụng terminal</li>
          <li>Có kỹ năng đọc hiểu tiếng anh cơ bản</li>
          <li>Đọc hiểu requirment</li>
          <li>biết sử dụng visual studio code</li>
        </ul>

        <br/>
        <b>Lợi thế</b>
        <ul>
          <li>Có kinh nghiệm  Nestjs, Nextjs là 1 lợi thế</li>
          <li>Có kinh nghiệm về Heroku là 1 lợi thế</li>
          <li>Có kinh nghiệm về Vercel là 1 lợi thế</li>
          <li>Có kinh nghiệm về Aws là 1 lợi thế</li>
          <li>Có kinh nghiệm về Facebook Api là 1 lợi thế</li>
        </ul>
       <br/>
        <b>Phúc Lợi</b>
        <ul>
          <li>Được phát Macbook làm việc</li>
          <li>Được đóng bảo hiểm y tết</li>
          <li>Có lương tháng 13</li>
          <li>1 tháng được nghỉ phép 2 ngày</li>
          <li>Team building hằng quý</li>
          <li>Có các khóa học thường niên</li>
          <li>Có cơ hội được sang nước ngoài làm việc</li>
        </ul>
        <br/>
        <p><b>Mức Lương: </b><span>Thỏa thuận</span></p>
        <br/>
        <p><i>Mọi ứng viên vui lòng gửi cv qua mail: example@gmail.com</i></p>
      </> */}
    </S.SJobDetail>
  );
}
