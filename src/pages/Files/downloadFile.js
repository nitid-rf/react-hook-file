import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const DownloadFile = () => {

  return (
    <div >
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf} icon={<DownloadOutlined />}>
            Click to Download
          </Button>
        )}
      </Pdf>
      <table ref={ref}>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
      </table>
    </div>
  );
};

export default DownloadFile;
