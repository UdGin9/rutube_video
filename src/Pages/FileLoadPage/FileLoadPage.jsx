import React from 'react';
import {DropZoneContainer} from "../../Components/DropZone/DropZone";
import s from "./FileLoadPage.module.scss"

const FileLoadPage = () => {
    return (
        <div className={s.container}>
            <DropZoneContainer/>
        </div>
    );
};

export default FileLoadPage;