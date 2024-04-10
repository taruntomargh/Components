import React from "react";
import { PDFViewer, Document, Page, Text, View, PDFDownloadLink } from "@react-pdf/renderer";

function PDFMakerComponent() {
  return (
    <Document>
      <Page size={"A4"}>
        <View>
          <Text>This is a PDF Content</Text>
        </View>
      </Page>
    </Document>
  );
}

const PDFMaker = () => {
  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200 w-full">PDF Maker</h1>
      <div className="flex flex-col items-center gap-2 mt-4">
        <PDFViewer style={{ width: "100%", height: "300px" }}>
          <PDFMakerComponent />
        </PDFViewer>
        <PDFDownloadLink fileName="pdf-file" document={<PDFMakerComponent />}>
          <button className="text-md text-white bg-blue-800 rounded-md p-2">Download PDF</button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PDFMaker;
