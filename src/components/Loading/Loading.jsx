import { RotatingTriangles } from "react-loader-spinner";

const Loading = () => {
    return (
        <div>
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
            />
        </div>
    )
}

export default Loading;