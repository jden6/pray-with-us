import "react-quill/dist/quill.snow.css";

import { forwardRef, useRef } from "react";
import ReactQuill from "react-quill";
import { Textarea } from "@/components/ui/textarea";

const EditOnceForm = forwardRef(
  (props: { isNew: boolean; prayId: string; data: any }, ref) => {
    return <Textarea />;
  },
);

EditOnceForm.displayName = "editor";
export default EditOnceForm;
