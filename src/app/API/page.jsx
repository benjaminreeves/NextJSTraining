import React from "react"

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
    return fetch(url,{method:"GET"}).then(response => {return response.json()})
}

export default async function API() {
    
    const chuckJoke = await getChuckFoodJoke();
    const randomFoodRecipe = await getFood();

    console.log(chuckJoke);
    console.log(randomFoodRecipe);

    return (
        <>
            <p>API</p>
        </>
    );
}