import React, { ReactElement } from "react";
import * as S from "./AboutPage.styled";
interface Props {}

export default function AboutPage(props: Props): ReactElement {
  return (
    <S.About>
      <S.Main>
        <div style={{ width: "800px" }}>
          <S.Title>L2H là ai? Giới thiệu về bản thân</S.Title>
          <S.ContentAbout style={{ textAlign: "center" }}>
            <img src="https://picsum.photos/200" alt="hinh anh" />
          </S.ContentAbout>
          <S.Discript>
            Xin chào tụi mình là<b> L2T </b>
            Tụi mình đang là sinh viên năm 4 của trường đại học Công Nghệ Thành
            Phố Hồ Chí Minh
          </S.Discript>
          <h3 style={{ lineHeight: "1.3em", margin: "1.7em 0 20px" }}>
            Blogger
          </h3>
          <div>
            <S.Discript>
              Team được thành lập vào những buổi đồ án đầu tiên tại trường đại
              học công nghệ TP.Hồ Chí Minh. Mục tiêu vượt qua các môn học và mài
              dũa kinh nghiệm khi còn đang ngồi trên ghế nhà trường. Đồng thời
              tạo ra một nơi có thể lưu trữ giá trị tri thức, và kết nối những
              anh em đồng nghiệp lại với nhau...
            </S.Discript>
          </div>
          <h3 style={{ lineHeight: "1.3em", margin: "1.7em 0 20px" }}>
            Liên Hệ Với Tôi
          </h3>
          <ul>
            <li>Facebook: </li>
            <li>GitHub: </li>
            <li>Instagram</li>
          </ul>
        </div>
        <S.MainRight></S.MainRight>
      </S.Main>
    </S.About>
  );
}
