import React from 'react';
import {useDropzone} from 'react-dropzone';
import s from "./DropZone.module.scss"
import {useMemo} from "react";
import {Link} from "react-router-dom";
import {baseStyle} from "../../consts";
import {connect, useDispatch} from "react-redux";
import axios from "axios";
import {downloadVideo, toggleIsFetching} from "../../redux/reducer";
    function DropZone({toggleIsFetching,newVideo}) {

    const dispatch = useDispatch();


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

    const dispatchVideo = ( ) =>  {
        dispatch(toggleIsFetching(true))
        axios.post("", acceptedFileItems )
            .then(function (response) {
                dispatch(downloadVideo(newVideo.response)) /*????? мб и так, надо проверять с API*/
                dispatch(toggleIsFetching(false))
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
                <button onClick={dispatchVideo} className={s.LoadButton}>Отправить видео на обработку
                </button>
            </Link>
        </section>
    );
}


const mapStateToProps = (state) => ({
    newVideo: state.newVideo,
    isFetching: state.isFetching,
})


export const DropZoneContainer = connect(mapStateToProps,{toggleIsFetching})(DropZone)