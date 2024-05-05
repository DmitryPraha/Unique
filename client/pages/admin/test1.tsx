import axios from "axios";
import React from "react";

const baseURL = "http://localhost:4000/tracks/getAllOzon";

export default function App() {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1></h1>
            <p>{post}</p>
        </div>
    );
}
