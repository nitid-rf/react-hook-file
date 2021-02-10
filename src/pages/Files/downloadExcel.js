import React from "react";
import ReactExport from "react-export-excel";
import { Table } from "antd";
import { data, columns } from "../../mockdata/contacts";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

{
  /* <Table ref={refSearchInput} columns={columns} dataSource={data}></Table> */
}

export default function DownloadExcel() {
//   console.log("------>" + JSON.stringify(data));
  console.log(data);
  return (
    <div>
      <ExcelFile element={<button>Download Data</button>}>
        <ExcelSheet data={JSON.stringify(data)}>
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Age" value="age" />
          <ExcelColumn label="Contact" value="contact" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}
