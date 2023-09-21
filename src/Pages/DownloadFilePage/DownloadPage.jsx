import React from 'react';
import Loader from "../../UI/loader";
import {connect} from "react-redux";
import Header from "../../Components/Header/Header";
import s from "./DownloadFilePage.module.scss"
const DownloadPage = ({video,isFetching}) => {


    if(isFetching === true ){
        return (
            <div className={s.container}>
                <Header/>
                <Loader/>
            </div>
        )
    }
    else{
        return (
            <div className={s.container}>
                <Header/>
                <button className={s.buttonDownload}>Скачать видео</button> {/*привинтить скачку newVideo по onClick, скачка с помощью атрибута blob и поиграться со стилями кнопки*/}
            </div>
        );
    }

};

const mapStateToProps = (state) => ({
    newVideo: state.newVideo,
    isFetching: state.isFetching,
})

export const DownloadPageContainer = connect(mapStateToProps)(DownloadPage)
