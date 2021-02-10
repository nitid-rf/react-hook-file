import React from "react";
import Pdf from "react-to-pdf";
import "antd/dist/antd.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function ExportPdf(props) {
  console.log("props --> " + props.data)
  return (
    <div>
      <Pdf targetRef={props.ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf} icon={<DownloadOutlined />}>
            Click to Download
          </Button>
        )}
      </Pdf>
    </div>
  );
}
