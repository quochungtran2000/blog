import styled, { css } from "styled-components";

export const Title = styled.h3`
  text-align: left;
  font-size: 27px;
  margin: 0;
`;

export const Contact = styled.div`
  padding: 30px 10px 50px 0;
`;

export const ContactForm = styled.div`
  font-size: 14px;
  margin-top: 30px;
  max-width: 480px;
  form {
    input {
      width: 100%;
      padding: 15px;
      outline: 0;
      border: 0px solid rgba(230, 230, 230, 1);
      border-left: 0;
      border-right: 0;
      border-radius: 1px;
      line-height: 22px;
      background-color: #fefefe;
      box-shadow: 0 10px 20px 0 rgb(30 30 30 / 8%);
    }
    textarea {
      width: 100%;
      padding: 15px;
      outline: 0;
      border: 0px solid rgba(230, 230, 230, 1);
      border-left: 0;
      border-right: 0;
      border-radius: 1px;
      line-height: 22px;
      background-color: #fefefe;
      box-shadow: 0 10px 20px 0 rgb(30 30 30 / 8%);
    }
    button {
      outline: 0;
      border: 0;
      border-radius: 1px;
      padding: 10px 15px;
      line-height: 22px;
      background-color: #005af0;
      color: #fefefe;
      cursor: pointer;
      padding: 8px 30px;
    }
  }
`;
