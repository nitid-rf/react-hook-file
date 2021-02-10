import React, { useState, useRef } from 'react'
import "antd/dist/antd.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Pdf from "react-to-pdf";
import ExportPdf from "../../containers/exportPdf";
import { Table } from "antd";
import { data, columns } from "../../mockdata/contacts";

const ref = React.createRef();

const DownloadFile = () => {
  const refSearchInput = useRef()
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf} icon={<DownloadOutlined />}>
            Click to Download
          </Button>
        )}
      </Pdf>

      {/* <Table ref={refSearchInput} columns={columns} dataSource={data}></Table> */}

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
        
      </table>
    </div>
  );
};

export default DownloadFile;
