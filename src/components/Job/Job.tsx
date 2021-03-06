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
                  src={data.author.image_url}
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
          <img src={"https://static.topcv.vn/company_covers/S0N7IDADuKjaNkmIZSX6.jpg"} alt={data.title}></img>
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
        <b>C??ng ty NodeTop1 tuy???n d???ng v??? tr?? intership Nodejs v???i nh???ng y??u c???u sau ????y:</b>
        <p></p><p></p>
        <b>Y??u c???u t???i thi???u:</b>
        <ul>
          <li>C?? kinh nghi???m v???i c??c framework nh?? ReactJs, ExpressJs, ..</li>
          <li>Hi???u bi???t v??? html5 v?? css3</li>
          <li>Bi???t s??? d???ng Postman</li>
          <li>Bi???t s??? d???ng terminal</li>
          <li>C?? k??? n??ng ?????c hi???u ti???ng anh c?? b???n</li>
          <li>?????c hi???u requirment</li>
          <li>bi???t s??? d???ng visual studio code</li>
        </ul>

        <br/>
        <b>L???i th???</b>
        <ul>
          <li>C?? kinh nghi???m  Nestjs, Nextjs l?? 1 l???i th???</li>
          <li>C?? kinh nghi???m v??? Heroku l?? 1 l???i th???</li>
          <li>C?? kinh nghi???m v??? Vercel l?? 1 l???i th???</li>
          <li>C?? kinh nghi???m v??? Aws l?? 1 l???i th???</li>
          <li>C?? kinh nghi???m v??? Facebook Api l?? 1 l???i th???</li>
        </ul>
       <br/>
        <b>Ph??c L???i</b>
        <ul>
          <li>???????c ph??t Macbook l??m vi???c</li>
          <li>???????c ????ng b???o hi???m y t???t</li>
          <li>C?? l????ng th??ng 13</li>
          <li>1 th??ng ???????c ngh??? ph??p 2 ng??y</li>
          <li>Team building h???ng qu??</li>
          <li>C?? c??c kh??a h???c th?????ng ni??n</li>
          <li>C?? c?? h???i ???????c sang n?????c ngo??i l??m vi???c</li>
        </ul>
        <br/>
        <p><b>M???c L????ng: </b><span>Th???a thu???n</span></p>
        <br/>
        <p><i>M???i ???ng vi??n vui l??ng g???i cv qua mail: example@gmail.com</i></p>
      </> */}
    </S.SJobDetail>
  );
}
