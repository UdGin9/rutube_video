import React from 'react';
import {useDropzone} from 'react-dropzone';
import s from "./DropZone.module.scss"
import {useMemo} from "react";
import {Link} from "react-router-dom";
import {baseStyle} from "../../consts";
export function DropZone() {

    const style = useMemo(() => ({
        ...baseStyle,
    }), []);

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
    } = useDropzone({
        maxFiles:1
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {(file.size/1024/1024).toFixed(2)} МB
        </li>
    ));


    return (
        <section className={s.container}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Перетащите видео в эту область или кникните на нее</p>
                <em>(Можно загрузить лишь одно видео за раз для ускорения процесса)</em>
            </div>
            <aside>
                <h4 className={s.text}>Загруженные видео</h4>
                <ul className={s.text}>{acceptedFileItems}</ul>
            </aside>
            <Link to="download">
                <button className={s.LoadButton}>Отправить видео на обработку
                </button>
            </Link>
        </section>
    );
}