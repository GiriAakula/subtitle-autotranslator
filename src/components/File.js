import React , {useEffect, useState} from "react";
import axios from "axios";
import Translate from "./Translate";

function File({data, lang}) {
  let text;
  let arr = [];
  let url;
  const [sub, setSub] = useState(null);
 useEffect(() => {
  if(data.length){
  async function fetchData(){
    for (let index = 0; index < data.length; index++) {
      url = encodeURI(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191227T062351Z.01c0bb05bdfcde37.8be2907694d99616b6d056983c8d30c8b56996ab&text=${data[index].text}&lang=${lang}`)
        text = await axios.get(url);
         arr.push({
          id : data[index].id,
          start: data[index].startTime,
          end: data[index].endTime,
          text: text.data.text
        });
    };
    if(data.length === arr.length){
            setSub(arr)
     }
  }
  fetchData();
 }
  }, [data])          
 
 
  return(
    <>
    {(sub) ? <Translate prop={sub} />: <h1>Converting...</h1>}
    </>
  )
}

export default File;


