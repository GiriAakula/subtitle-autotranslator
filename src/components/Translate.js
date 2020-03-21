import React, { useState, useEffect } from 'react'
import {stringify} from 'subtitle'

function Translate({prop}) {
    useEffect(() => {
        if(prop){
        let data = stringify(prop);
        const blob = new Blob([data], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'Translated_Subtitles.srt';
        link.href = url;
        link.click();
        }
    },[prop])
    return(
        <>
        <br/>
        <span>Your srt was done converting! Check your downloads folder.</span>
        </>
    )
}

export default Translate