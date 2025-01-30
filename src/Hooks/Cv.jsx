import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV = () => {
  return (
    <div id="cv" className="cv">
      <h1>My CV</h1>
      <div style={{ height: "600px" }}>
        <Viewer fileUrl="/cv.pdf" />
      </div>
    </div>
  );
};

export default CV;