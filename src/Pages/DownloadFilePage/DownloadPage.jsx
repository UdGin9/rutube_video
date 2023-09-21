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
            </div>
        );
    }

};

const mapStateToProps = (state) => ({
    character: state.video,
    isFetching: state.isFetching,
})

export const DownloadPageContainer = connect(mapStateToProps)(DownloadPage)
