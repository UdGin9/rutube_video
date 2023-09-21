import FileLoadPage from "./Pages/FileLoadPage/FileLoadPage";
import {DownloadPageContainer} from "./Pages/DownloadFilePage/DownloadPage";
import {DOWNLOAD_PAGE, FILE_LOAD_PAGE} from "./consts";

export const AllRouters = [
    {
        path: DOWNLOAD_PAGE,
        Component: <DownloadPageContainer/>
    },
    {
        path: FILE_LOAD_PAGE,
        Component: <FileLoadPage/>
    },

]