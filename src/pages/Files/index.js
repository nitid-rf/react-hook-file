import React from "react";
import UploadFile from "./uploadFile";
import DownloadFile from "./downloadFile";
import DownloadExcel from "./downloadExcel";

function App() {
  return (
    <div>
      <h1>Upload File</h1>
      <UploadFile />
      <h1>Download File</h1>
      <DownloadFile />
      <hr />
      <a href="https://www.npmjs.com/package/react-to-pdf">Credit</a>

      <DownloadExcel />
    </div>
  );
}

export default App;
