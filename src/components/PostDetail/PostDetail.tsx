import { Avatar } from "@mui/material";
import { IPost } from "../../utils/interface";
import * as S from "./PostDetail.styled";

type Props = {
  data: IPost;
};

export default function PostDetail({ data }: Props) {
  function createMarkup(data: any) {
    return {
      __html: data,
    };
  }

  return (
    <S.SPostDetail>
      <S.SPostContent>
        <S.SPostHeadLine>
          <S.SPostTitle>{data.title}</S.SPostTitle>
          <S.SPostInfo>
            <S.SPostInfoHeader>
              <S.SPostInfoImage>
                <Avatar
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  src={"../../assets/images/avatarpng.png"}
                />
              </S.SPostInfoImage>
              <S.SPostInfoAuthor>
                <S.SPostInfoAuthorName />
                <S.SPostInfoAuthorLink
                  author={data.author.fullname}
                ></S.SPostInfoAuthorLink>
              </S.SPostInfoAuthor>
              <S.SPostInfoPostTime>
                <S.SPostInfoPostAt />
                <S.SPostInfoPostAtTime
                  time={new Date(data.update_date).toLocaleDateString()}
                />
              </S.SPostInfoPostTime>
            </S.SPostInfoHeader>
          </S.SPostInfo>
        </S.SPostHeadLine>

        <S.SPostImage>
          <img src={data.image_url} alt={data.title}></img>
        </S.SPostImage>

        <S.SPostEntry>
          <S.SPostBody dangerouslySetInnerHTML={createMarkup(data.content)} />
        </S.SPostEntry>

        <S.SPostComment>
            <S.SPostCommentWidger>
              <S.SPostCommentWidgerContent></S.SPostCommentWidgerContent>
            </S.SPostCommentWidger>
        </S.SPostComment>
      </S.SPostContent>
    </S.SPostDetail>
  );
}
