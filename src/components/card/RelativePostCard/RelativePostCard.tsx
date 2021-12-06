import { IJob } from "../../../utils/interface";
import * as S from "./RelativePostCard.styled";

type Props = {
  data: IJob;
  count: number;
};

export default function RelativePostCard({ data, count }: Props) {
  return (
    <S.SRelativePostCard count={+count + 1}>
      <S.SRelativePostCardContent>
        <S.SRelativePostCardTitle>
          <S.SRelativePostCardLink to="/">{data.title}</S.SRelativePostCardLink>
        </S.SRelativePostCardTitle>
        <S.SRelativePostCardHeader>
          <S.SRelativePostCardInfo>
            <S.SRelativePostCardLabel>
              <S.SRelativePostCardLink to="/">
                {data.author.fullname}
              </S.SRelativePostCardLink>
              {/* <S.SRelativePostCardLink to="/">asd</S.SRelativePostCardLink> */}
            </S.SRelativePostCardLabel>
            <S.SRelativePostCardTime>
              {new Date(data.update_date).toLocaleDateString("en-GB")}
            </S.SRelativePostCardTime>
          </S.SRelativePostCardInfo>
        </S.SRelativePostCardHeader>
      </S.SRelativePostCardContent>
    </S.SRelativePostCard>
  );
}
