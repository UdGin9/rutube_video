import React from 'react';
import {DropZone} from "../../Components/DropZone/DropZone";
import s from "./FileLoadPage.module.scss"

const FileLoadPage = () => {
    return (
        <div className={s.container}>
            <DropZone/>
        </div>
    );
};

export default FileLoadPage;