import React from "react";
import * as S from "./ContactForm.styled";
interface Props {}

export const ContactForm = (props: Props) => {
  return (
    <S.Contact>
      <S.Title>Contact with Kise_Nguyen</S.Title>
      <S.ContactForm>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Name
            </label>
            <input name="name" type="text" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email*
            </label>
            <input name="email" type="email" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              messeage*
            </label>
            <textarea name="messeage" />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <button type="submit">Send</button>
          </div>
        </form>
      </S.ContactForm>
    </S.Contact>
  );
};
