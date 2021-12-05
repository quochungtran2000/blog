import React, { ReactElement, useEffect } from "react";
import * as S from "./AboutPage.styled";
import BG1 from "../../assets/images/about1.jpg";
import People1 from "../../assets/images/per1.jpg";
import People2 from "../../assets/images/per2.jpg";
import People3 from "../../assets/images/per3.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import { isTypeNode } from "typescript";

interface AboutProps {
  id: number;
  img: string;
  title: string;
  name: string;
  animation: string;
  description: string;
}

export default function AboutPage(): ReactElement {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const AboutList: AboutProps[] = [
    {
      id: 0,
      img: `${BG1}`,
      title: "Tiểu Sử Ra Đời",
      name: "About Us",
      animation: "zoom-out-left",
      description:
        "  Trong thời đại 4.0. Công nghệ đang dần được phát triển và càng được phát triển hơn trong thời kì dịch bệnh ngày nay. Chuyển đổi kĩ thuật số đang được các nhà doanh nghiệp chú ý tới, cùng vì lý do này màngành công nghệ thông tin đang được các bạn trẻ chú ý đến. Vì đanglà sinh viên ngành này nên mình cũng một phần hiểu được tâm tư củacác bạn đang có nguyện vọng này. Thấu hiểu được nguyện vọng nên L2H đã cho ra đời một môi trường mà các bạn Dev có thể cùng nhau chia sẽcác kĩ năng và kinh nghiệm với nhau. Đồng thời giúp các bạn bỏ được rào cản và kết nối lại gần nhau hơn...",
    },
    {
      id: 1,
      img: `${People1}`,
      title: "Back End Developer",
      name: "KuRoKo Long",
      animation: "zoom-in",
      description:
        " Bắt đầu những năm học đại học chúng ta sẽ được làm quen các ngôn ngữ lập trình C++ pla pla..., Tuy nhiên tôi khá là may mắn được một cậu bạn trong lớp chỉ thêm một ngôn ngữ lập trình là PHP. Cũng nhờ có bước đệm PHP mà tôi đã nắm được tư duy lập trình, dần tiếp cận nhanh chóng các ngôn ngữ lập trình khác nhàu ở vụ trí này. Ở thời điểm hiện tại mặc dù không quá khóa huấn luyện từ trung tâm nào nhưng tôi có thể đáp ứng nhiều ngôn ngữ ở vị trí back-end để phục công việc của tôi hiện tại ",
    },
    {
      id: 2,
      img: `${People2}`,
      title: "Front End Developer",
      name: "Kise Nguyen",
      animation: "fade-right",
      description:
        "Nếu bạn đam mê cái đẹp thì hãy nhanh chóng search ngay từ khóa Front end ngay từ lúc này, Nếu như anh Lộc Fuho là một anh thợ xây nhà nổi tiếng, thì chúng ta sẽ là một anh thợ xây dựng bộ mặt của một trang web, ứng dụng để cho ra đời một trang web để người tiêu dùng sử dụng ngoài công của Back end chúng ta không thể phủ nhận độ quan trọng của Front-End. Dĩ nhiên bạn sẽ không muốn vào một trang web đã lỗi thời về mặt thời trang. Nếu bạn là một tính đồ của cái đẹp hãy trở thành một lập trình viên Front End",
    },
    {
      id: 2,
      img: `${People3}`,
      title: "Full Stack Developer",
      name: "Quoc Hung",
      animation: "flip-left",
      description:
        "Những devloper nổi tiếng đều gặp phải những vấn đề nan giải cho đến khi họ giải quyết được nó. Thật đúng vậy ngay từ khi bắt đầu vào con đường lập trình này, mình trải qua vô số khó khăn từ khi còn là sinh viên năm 2 ở trường đại học mình đã bắt đầu mài mò, lịch sử google lúc bây giờ tràn đầy những từ khóa về code, khóa học... Ban đầu thật sự rất khó khăn từ khâu fix bug, định hướng chuyên ngành cho tương lai, lạc lõng vì con đường mình di khi không có người đồng hành. Nhờ sự nổ lực bản thân mà hiện tại mình đã phát triển bản thân một cách chóng mặt, mình đã may măn được anh leader giao vị trí quan trọng trong công ty và tham gia xây dựng các dự án cho những công ty lớn ở Việt Nam. Mục tiêu tương lai của mình là khám phá về trí tuệ nhân tạo, blockchain... ",
    },
  ];

  return (
    <S.About>
      {AboutList.map((item) => (
        <S.Main key={item.id}>
          <img src={item.img} alt="ảnh" data-aos={item.animation} />
          <S.AboutText data-aos="fade-up">
            <h1 data-aos="fade-right">{item.name}</h1>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </S.AboutText>
        </S.Main>
      ))}
    </S.About>
  );
}
