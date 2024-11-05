import React from "react";
import { Typography, Grid2 as Grid } from "@mui/material";

// Chuck Norries Food Joke = https://api.chucknorris.io/jokes/random?category=food

const getChuckFoodJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=food'
    return getData(url)
}

const getData = async (url) => {
    return fetch(url, { method: "GET", next: { revalidate: 10 } }).then(response => { return response.json() }).catch(e => console.log(`error occurred: ${e.message}`))
}

export default async function ChuckNorrisJoke() {
    const chuckJoke = await getChuckFoodJoke();
    return (
        <Grid my={2} direction='row' textAlign='center' size={12}>
            <Typography variant='h5' fontWeight='bold'>Random Chuck Norris Food Joke</Typography>
            <Typography>{chuckJoke ? chuckJoke.value : <Typography>No joke found</Typography>}</Typography>
        </Grid>
    );
}