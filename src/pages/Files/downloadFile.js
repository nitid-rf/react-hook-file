import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";
import $ from "jquery";
// import Pdf from "react-to-pdf";
import { Table } from "antd";
import { data, columns } from "../../mockdata/contacts";

// const ref = React.createRef();

// const Prints = () => (
//   <div>
//     <Table columns={columns} dataSource={data}></Table>
//   </div>
// );

// const print = () => {
//   const string = renderToString(<Prints />);
//   const pdf = new jsPDF("a4");
//   pdf.fromHTML(string);
//   pdf.save("pdf");
// };

const DownloadFile = () => {
  // var doc = new jsPDF();

  // doc.fromHTML($('#testfile'),{ width: 1500 });
  // doc.text("Hello world!", 10, 10);
  // doc.save("Test.pdf");

  const print = () => {
    var doc = new jsPDF();
    doc.save("download.pdf");

    // var doc = new jsPDF();
    // doc.html(document.getElementById("testfile"),
    // {
    //   callback: function (doc) {
    //     // doc.setFont("arial", "bold");
    //     // doc.setFontSize(8);
    //     doc.save("download.pdf");
    //   },
    // }
    // );
  };

  return (
    <div>
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button onClick={toPdf} icon={<DownloadOutlined />}>
            Click to Download
          </Button>
        )}
      </Pdf> */}

      {/* <Table  columns={columns} dataSource={data}></Table> */}

      {/* <table id="testfile">
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
      </table> */}

      <Button 
      onClick={print} 
      icon={<DownloadOutlined />}>
        Click to Download Pdf
      </Button>
      <Table id="testfile" columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default DownloadFile;
