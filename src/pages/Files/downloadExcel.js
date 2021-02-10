import React from "react";
import ReactExport from "react-export-excel";
import { Table, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { data, columns } from "../../mockdata/contacts";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function DownloadExcel() {
  //   console.log("------>" + JSON.stringify(data));
  console.log(data);

  return (
    <div>
      <ExcelFile
        element={
          <Button icon={<DownloadOutlined />}>Click to Download Excel</Button>
        }
      >
      
        <ExcelSheet data={data} name="aaaaa">
          <ExcelColumn label="Uid" value="uid" />
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Age" value="age" />
          <ExcelColumn label="Contact" value="contact" />
        </ExcelSheet>
      </ExcelFile>
      <div>
        <Table columns={columns} dataSource={data}></Table>
      </div>
    </div>
  );
}
