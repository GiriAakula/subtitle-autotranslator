import React, { useMemo, useState, useEffect } from "react";
import parser from 'subtitles-parser'
import File from './File'

function Drag(props) {
  const [data, setData] = useState();
  const readUploadedFileAsText = acceptedFiles => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      temporaryFileReader.readAsText(acceptedFiles);
      temporaryFileReader.onload = () => {
        resolve(parser.fromSrt(temporaryFileReader.result));
      };
      
    });
  };
  let lang;
  if(props.value){
   lang = props.value
   console.log(props.value);
  }
  const handleChange = (event) => {
    readUploadedFileAsText(event.target.files[0])
    .then( res => {
      setData(res)
    })
  }  

  return (    
     <>
      <input type="file" name="docx" onChange={handleChange} />
      {(data) && <File data={data} lang={lang}/>} 
    </>
  )
}

export default Drag;


 