import {DOWNLOAD_VIDEO, TOGGLE_IS_FETCHING} from "../consts";


const initialState = {
    newVideo: null,
    isFetching: false
}



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case DOWNLOAD_VIDEO:
            return {...state, newVideo: action.newVideo}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const downloadVideo = (newVideo) => ({type: DOWNLOAD_VIDEO, newVideo})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
