import React, {useState} from 'react';
import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";

const Create = () => {


    const domain = useInput('')
    const password = useInput('')
    const router = useRouter()

    const next = (data) => {
        //Сюда вернуть
        const formData = new FormData()
        formData.append('domain', data.domain)
        formData.append('password', data.password)
        //axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:4000/tracks', formData, )
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

