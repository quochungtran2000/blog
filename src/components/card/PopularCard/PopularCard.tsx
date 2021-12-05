import { IPost } from "../../../utils/interface";
import * as S from "./PoularCard.styled";

type Props = {
  data: IPost;
  count: number
};

export default function PopularCard({ data,count }: Props) {
  return (
    <S.SPopularCard count={+count+1}>
      <S.SPopularCardContent>
        <S.SPopularCardTitle>
          <S.SPopularCardLink to="/">{data.title}</S.SPopularCardLink>
        </S.SPopularCardTitle>
        <S.SPopularCardHeader>
          <S.SPopularCardInfo>
            <S.SPopularCardLabel>
              <S.SPopularCardLink to="/">{data.author.fullname}</S.SPopularCardLink>
              {/* <S.SPopularCardLink to="/">asd</S.SPopularCardLink> */}
            </S.SPopularCardLabel>
            <S.SPopularCardTime>
              {new Date(data.update_date).toLocaleDateString('en-GB')}
            </S.SPopularCardTime>
          </S.SPopularCardInfo>
        </S.SPopularCardHeader>
      </S.SPopularCardContent>
    </S.SPopularCard>
  );
}
