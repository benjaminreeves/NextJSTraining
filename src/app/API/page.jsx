import React from "react"
import Title from "../components/Title"
import { Typography, Grid2 as Grid, Box } from "@mui/material"

// Random Food Api = https://www.themealdb.com/api/json/v1/1/random.php
// Chuck Norries Food Joke = https://api.chucknorris.io/jokes/random?category=food

const getChuckFoodJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=food'
    return getData(url)
}

const getFood = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    return getData(url)
}

const getData = async (url) => {
    return fetch(url, { method: "GET", next: {revalidate: 0} }).then(response => { return response.json() })
}

export default async function API() {

    const chuckJoke = await getChuckFoodJoke();
    const randomFoodRecipe = await getFood();

    console.log(chuckJoke);
    console.log(randomFoodRecipe);

    return (
        <>
            <Title textAlign='center'>A Page of Random</Title>
            <Grid container>
                <Grid direction='row' textAlign='center' size={12}>
                    <Typography variant='h5' fontWeight='bold'>Random Chuck Norris Food Joke</Typography>
                    <Typography>{chuckJoke.value}</Typography>
                </Grid>
                { randomFoodRecipe['meals'].map(f => {
                    <Grid>
                        <Typography>Image</Typography>
                        <Box component='img' src={f.strMealThumb}/>
                    </Grid>
                })}
            </Grid>
            
        </>
    );
}