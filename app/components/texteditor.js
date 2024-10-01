import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor() {
  const [value, setValue] = useState("");
  return <ReactQuill value={value} onChange={setValue} />;
}
