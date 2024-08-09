import React from "react";
import Link from "next/link";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function WriteupThumb({ name, description, path }) {
    return (
        <div>
            <hr />
            {/* <br /> */}
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <br />
                <Link href={path}>
                    Continue{'->'}
                </Link>
                
            </div>
            <br />  
        </div>
    );
}

export default WriteupThumb;