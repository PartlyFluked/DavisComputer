"use client"

import { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Home() {

  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  const [pdfHeight, setPDFHeight] = useState(0);
  const [pdfWidth, setPDFWidth] = useState(0);

  const handleResize = () => {
    if (window.innerHeight / 1.41 < window.innerWidth) {
      setPDFHeight(window.innerHeight);
      setPDFWidth(window.innerHeight / 1.41);
    } else {
      setPDFHeight(window.innerWidth * 1.41);
      setPDFWidth(window.innerWidth);
    }

    setPageHeight(window.innerHeight);
    setPageWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.visualViewport!.addEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div style={{
        height: '100dvh', width: pdfWidth, paddingLeft: (pageWidth - pdfWidth) / 2, paddingTop: (pageHeight - pdfHeight) / 2
      }}>
        <Document file='/CV.pdf' loading='...'>
          <Page pageNumber={1} height={pdfHeight} />
        </Document>
      </div >
    </div>
  )
}
