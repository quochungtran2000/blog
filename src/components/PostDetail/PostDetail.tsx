import { Avatar, Paper } from '@mui/material';
import { useState } from 'react';
import { useUser } from '../../context/User';
import { IComment, IPost } from '../../utils/interface';
import Comment from '../Comment/Comment';
import * as S from './PostDetail.styled';

type Props = {
  data: IPost;
  comments: IComment[];
  reloadComment: () => void
};

export default function PostDetail({ data, comments, reloadComment }: Props) {
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
                  src={'../../assets/images/avatarpng.png'}
                />
              </S.SPostInfoImage>
              <S.SPostInfoAuthor>
                <S.SPostInfoAuthorName />
                <S.SPostInfoAuthorLink author={data.author.fullname}></S.SPostInfoAuthorLink>
              </S.SPostInfoAuthor>
              <S.SPostInfoPostTime>
                <S.SPostInfoPostAt />
                <S.SPostInfoPostAtTime time={new Date(data.update_date).toLocaleDateString()} />
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
            <S.SPostCommentWidgerContent>
              {comments.map((comment, index) => (
                <div style={{ padding: '0.25rem', display: 'flex', marginBottom: '1rem' }}>
                  <div style={{ marginRight: '0.5rem' }}>
                    <Avatar src="https://www.inpixio.com/remove-background/images/main-before.jpg"></Avatar>
                  </div>
                  <div
                    style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div>
                      <b style={{ opacity: '0.8' }}>{comment.author_name}</b>
                    </div>
                    <div>
                      <span style={{ opacity: '0.6', marginRight: '1rem' }}>{comment.comment}</span>
                      <span style={{ opacity: '0.4', fontSize: '70%' }}>
                        {new Date(comment.create_date).toLocaleTimeString()}
                      </span>
                      <span style={{ opacity: '0.4', fontSize: '70%' }}>
                        ,{new Date(comment.create_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div style={{ padding: '0.25rem', display: 'flex', marginBottom: '1rem' }}>
                <div style={{ marginRight: '0.5rem' }}>
                  <Avatar src="https://www.inpixio.com/remove-background/images/main-before.jpg"></Avatar>
                </div>
                <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <b style={{ opacity: '0.8' }}>Tran quoc hung</b>
                  </div>
                  <div>
                    <span style={{ opacity: '0.6' }}>asdfasdfsadf</span>
                  </div>
                </div>
              </div> */}
            </S.SPostCommentWidgerContent>
          </S.SPostCommentWidger>
        </S.SPostComment>
        <Comment id={data.id} reloadComment={reloadComment}></Comment>
      </S.SPostContent>
    </S.SPostDetail>
  );
}
