import * as S from "./ContactForm.styled";
import B3 from "../../assets/images/download.jpg";
import B2 from "../../assets/images/Top-1.jpg";
import B1 from "../../assets/images/b5.jpeg";
interface MembersProps {
  id: number;
  name: string;
  position: string;
  description: string;
  img: string;
  social: {
    id: number;
    icon: string;
    social: string;
    link: string;
  }[];
}

export const ContactForm = () => {
  const Members: MembersProps[] = [
    {
      id: 0,
      name: "Quốc Hùng",
      position: "Back-End Developer (Leader)",
      description: "Chuyên nghiệp - Lãnh đạo - Tư duy",
      img: `${B1}`,
      social: [
        {
          id: 0,
          icon: "fab fa-facebook-square",
          social: "Facebook",
          link: "https://www.facebook.com/tranquochung6810",
        },
        {
          id: 1,
          icon: "fab fa-github-square",
          social: "Git Hub",
          link: "https://github.com/quochungtran2000",
        },
        {
          id: 2,
          icon: "fas fa-envelope-square",
          social: "Gmail",
          link: "mailto: phantomtiger123@gmail.com",
        },
      ],
    },
    {
      id: 1,
      name: "Lợi Nguyễn",
      position: "Front-End Developer",
      description: "Nhiệt huyết - Hòa đồng - Đam mê",
      img: `${B3}`,
      social: [
        {
          id: 0,
          icon: "fab fa-facebook-square",
          social: "Facebook",
          link: "https://www.facebook.com/kise274/",
        },
        {
          id: 1,
          icon: "fab fa-github-square",
          social: "Git Hub",
          link: "https://github.com/LoiKise",
        },
        {
          id: 2,
          icon: "fas fa-envelope-square",
          social: "Gmail",
          link: "mailto: phantomtiger123@gmail.com",
        },
      ],
    },
    {
      id: 2,
      name: "Long Nguyễn",
      position: "Back-End-Devloper",
      description: "Tư duy-Nhiệt huyết-Cứng rắn",
      img: `${B2}`,
      social: [
        {
          id: 0,
          icon: "fab fa-facebook-square",
          social: "Facebook",
          link: "https://www.facebook.com/nguyenthanhlong.nguyen.378",
        },
        {
          id: 1,
          icon: "fab fa-github-square",
          social: "Git Hub",
          link: "https://github.com/longkuroko",
        },
        {
          id: 2,
          icon: "fas fa-envelope-square",
          social: "Gmail",
          link: "mailto: phantomtiger123@gmail.com",
        },
      ],
    },
  ];
  return (
    <S.BodyCard>
      {Members.map((member) => (
        <S.Card>
          <S.CardImage>
            <img src={member.img} alt="hình ảnh" />
          </S.CardImage>
          <S.CardText>
            <h2>{member.name}</h2>
            <span>{member.position}</span>
            <p>{member.description}</p>
          </S.CardText>

          <S.CardStats>
            {member.social.map((item) => (
              <S.Stat key={item.id}>
                <a href={item.link}>
                  <S.Value>
                    <i className={item.icon}></i>
                  </S.Value>
                  <S.Type>{item.social}</S.Type>
                </a>
              </S.Stat>
            ))}
          </S.CardStats>
        </S.Card>
      ))}
    </S.BodyCard>
  );
};
