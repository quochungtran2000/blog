import { IPost } from "../../../utils/interface";
import * as S from "./PostCard.styled";

type Props = {
  data: IPost;
  key: any;
};

function PostCard({ data }: Props) {
  return (
    <S.SPostCard>
      <S.SPostCardThumb>
        <a href="asd">
          <img alt={data.title} loading="lazy" src={data.image_url} />
        </a>
      </S.SPostCardThumb>
      <S.SPostCardContent>
        <S.SPostCardHeadLine>
          <S.SPostCardLable>
            <S.SPostCardLink to="/" author={false} underline={true}>
              #asd
            </S.SPostCardLink>
          </S.SPostCardLable>
          <S.SPostCardTitle>
            <S.SPostCardLink to="/" author={false} underline={false}>
              {data.title}
            </S.SPostCardLink>
          </S.SPostCardTitle>
          <S.SPostCardInfo>
            <S.SPostCardHeader>
              <S.SPostCardLink author={true} underline={false} to="/">
                {data.author.fullname}
              </S.SPostCardLink>
              <S.SPostCardTime>
                {new Date(data.update_date).toDateString()}
              </S.SPostCardTime>
            </S.SPostCardHeader>
          </S.SPostCardInfo>
        </S.SPostCardHeadLine>
      </S.SPostCardContent>
    </S.SPostCard>
  );
}
export default PostCard;
