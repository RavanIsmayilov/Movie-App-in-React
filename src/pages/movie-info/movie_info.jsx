import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const Movie_Info = () => {
    const location = useLocation();
    const { state } = location;
    const [data, setData] = useState();

    useEffect(() => {
        setData(state);
    }, [state]);

    return (
        <div>
            {data ? (
                <div key={data.id}>
                    <img
                        src={`${SMALL_IMG_COVER_BASE_URL}${data.poster_path}`}
                        alt={data.title}
                    />
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                </div>
            ) : 
            (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Movie_Info;
