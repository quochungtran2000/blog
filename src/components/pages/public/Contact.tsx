import { Layout } from "../../layout";
import { Editor } from "@tinymce/tinymce-react";
export default function Contact() {
  const handleEditorChange = (e: any) => {
    console.log("Content was updated:", e.target.getContent());
    console.log(`a`,JSON.stringify(e.target.getContent()))
  };
  return (
    <Layout>
      <h3 style={{ textAlign: "center" }}>Contact Page</h3>
      <Editor
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: true,
         
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
            "textpattern"
          ],
          toolbar: `undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help`,
          textpattern_patterns: [
            { start: "*", end: "*", format: "italic" },
            { start: "**", end: "**", format: "bold" },
            { start: "#", format: "h1" },
            { start: "##", format: "h2" },
            { start: "###", format: "h3" },
            { start: "####", format: "h4" },
            { start: "#####", format: "h5" },
            { start: "######", format: "h6" },
            { start: "1. ", cmd: "InsertOrderedList" },
            { start: "* ", cmd: "InsertUnorderedList" },
            { start: "- ", cmd: "InsertUnorderedList" },
          ],
        }}
        onChange={handleEditorChange}
      />
    </Layout>
  );
}
