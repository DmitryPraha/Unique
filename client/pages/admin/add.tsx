import React, {useState} from 'react';
import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";

const Create = () => {

    const domain = useInput('')
    const password = useInput('')
    const router = useRouter()

    const next = () => {

        //Сюда вернуть
        const formData = new FormData()
        formData.append('domain', domain.value)
        formData.append('password', password.value)

        const body = JSON.stringify(Object.fromEntries(formData));


            //const formData = {
        //   "domain" : "yandex.ru",
        //   "password" : "123"
        //}
        //const formData = new FormData()
        //formData.append('domain', data.domain)
        //formData.append('password', data.password)
        axios.post('http://localhost:4000/tracks', body,)
            .then(resp => router.push('/tracks'))
            .catch(e => console.log(e))


    }
    return (
        <>
        <Grid container direction={"column"} style={{padding: 20}}>
            <TextField
                {...domain}
                style={{marginTop: 10}}
                label={"Имя исполнителя"}
            />
            <TextField
                {...password}
                style={{marginTop: 10}}
                label={"Слова к треку"}
                multiline
                rows={3}
            />
        </Grid>
    <Grid container justifyContent='space-between'>
        <Button onClick={next}>Далее</Button>
    </Grid>
        </>
    );
};

export default Create;

