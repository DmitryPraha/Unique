import axios from "axios";
import {router} from "next/client";
import Head from "next/head";

export default function ContactPage() {
    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const body = JSON.stringify(Object.fromEntries(formData));
        try {
            const response = await fetch('http://localhost:4000/tracks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: "same-origin", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer",
            });
            const movies = await response.json();
            console.log(movies);

            if (response.ok) {
                // Handle success
                alert('Form successfully submitted!');
            } else {
                throw new Error('Form submission failed!');
            }
        } catch (error) {
            // Handle error
            alert(error.message);
        }

    };

    //onSubmit={handleSubmit}

    return (
        <>
            <Head>
                <title>Админ панель</title>
                <script type="text/javascript" src="/styles/choices.min.js"></script>
                <meta name="referrer" content="origin" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="domain" required />
                <input type="text" name="password" required />
                <button type="submit">Submit</button>
            </form>
        </>

    );
}


