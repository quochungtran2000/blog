import { IPost, IPostTag } from '../../../utils/interface';
import * as S from './PostCard.styled';

type Props = {
  data: IPost;
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
            {data.postTag.map((item: IPostTag, index: number) => (
              <>
                {`${index > 0 ? ' ,' : ''}`}
                <S.SPostCardLink to={`/post?tag=${item.tag_id}`} author="false" underline="true">
                  {`#${item.tag.title}`}
                </S.SPostCardLink>
              </>
            ))}
          </S.SPostCardLable>
          <S.SPostCardTitle>
            <S.SPostCardLink to={`/post/${data.id}`} author="false" underline="false">
              {data.title}
            </S.SPostCardLink>
          </S.SPostCardTitle>
          <S.SPostCardInfo>
            <S.SPostCardHeader>
              <S.SPostCardLink author="true" underline="false" to="/">
                {data.author.fullname}
              </S.SPostCardLink>
              <S.SPostCardTime>{new Date(data.update_date).toLocaleDateString('en-GB')}</S.SPostCardTime>
            </S.SPostCardHeader>
          </S.SPostCardInfo>
        </S.SPostCardHeadLine>
      </S.SPostCardContent>
    </S.SPostCard>
  );
}
export default PostCard;
