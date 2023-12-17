import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { MutableRefObject } from "react";

const Editor = ({ ref }: { ref: MutableRefObject<ReactQuill | null> }) => {
  return <ReactQuill ref={ref} />;
};

export default Editor;
