"use client"

import { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100dvh', width: '100dvw' }}>
      <div style={{ position: 'absolute', left: '50dvw', top: '50dvh', transform: 'translate(-50%, -50%)' }}>
        <Document file='/CV.pdf' loading='loading...'>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}
