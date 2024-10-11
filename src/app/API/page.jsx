import React from "react"
import Title from "../components/Title"
import { Typography, Grid2 as Grid, Box, Link, Divider } from "@mui/material"
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// Random Food Api = https://www.themealdb.com/api/json/v1/1/random.php
// Chuck Norries Food Joke = https://api.chucknorris.io/jokes/random?category=food

const getChuckFoodJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=food'
    return getData(url)
}

const getFood = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const data = await getData(url)
    return data['meals'][0];
}

const getData = async (url) => {
    return fetch(url, { method: "GET", next: { revalidate: 86400} }).then(response => { return response.json() }).catch(e => console.log(`error occurred: ${e.message}`))
}

const getIngredients = async (foodObj) => {
    let ingredients = [];

    for (const key in foodObj) {
        if (key.includes('strIngredient') && foodObj[key]) {
            let number = key.match(/(\d+)/);
            ingredients.push({
                "id": number[0],
                "ingredient": foodObj[key],
                "measure": foodObj[`strMeasure${number[0]}`]
            });
        }
    }

    return ingredients;
}

export default async function API() {

    const chuckJoke = await getChuckFoodJoke();
    const randomFoodRecipe = await getFood();
    const ingredients = await getIngredients(randomFoodRecipe);

    return (
        <>
            <Title textAlign='center'>A Page of Random</Title>
            <Grid container>
                <Grid my={2} direction='row' textAlign='center' size={12}>
                    <Typography my={1} variant='h5' fontWeight='bold'>Random Chuck Norris Food Joke</Typography>
                    <Typography>{chuckJoke ? chuckJoke.value : <Typography>No joke found</Typography>}</Typography>
                </Grid>
                <Grid my={2} textAlign='center' size={12}>
                    <Title>Random Food Choice for you</Title>
                    <Box my={2} component='img' src={randomFoodRecipe.strMealThumb} />
                    <Grid container columns={12}>
                        <Grid spacing={2} size={6}>
                            <Typography variant='h5'>Meal Name</Typography>
                            <Typography fontWeight='bold'>{randomFoodRecipe.strMeal}</Typography>
                        </Grid>
                        <Grid spacing={2} size={6}>
                            <Typography variant='h5'>Want the full recipe?</Typography>
                            <Link target="_blank" href={randomFoodRecipe.strSource}>Click Here</Link>
                        </Grid>
                        <Grid my={2} size={12} textAlign='center' width='100%'>
                            <Typography variant="h5" fontWeight='bold'>Instructions</Typography>
                            <TextareaAutosize style={{ resize: 'none', width: '100%', padding: 10, fontSize: 16, fontFamily: 'inherit', border: 'none' }} my={2}>
                                {randomFoodRecipe.strInstructions}
                            </TextareaAutosize>
                        </Grid>
                        <Grid container my={2} textAlign='center' size={12}>
                            <Grid size={6} fontWeight='bold'>
                                Ingredient(s)
                            </Grid>
                            <Grid size={6} fontWeight='bold'>
                                Amount
                            </Grid>
                        </Grid>
                        {ingredients ? ingredients.map(i => (
                            <>
                                <Grid size={6} my={1}>
                                    {i.ingredient}
                                </Grid>
                                <Grid size={6} my={1}>
                                    {i.measure}
                                </Grid>
                                <Divider sx={{ width: '100%' }} />
                            </>
                        )) : <Typography>No recipe found</Typography>}
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}