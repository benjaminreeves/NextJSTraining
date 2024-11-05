"use server"
import React, { Suspense } from "react"
import Title from "../components/Title"
import { Grid2 as Grid, Divider, CircularProgress } from "@mui/material"

import styles from "./api.module.css";
import ChuckNorrisJoke from "../components/ChuckNorrisJoke";
import FoodChoice from "../components/FoodChoice";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// Random Food Api = https://www.themealdb.com/api/json/v1/1/random.php
// Day timer = 86400

export default async function API() {

    return (
        <>
            <Title textAlign='center'>A Page of Random</Title>
            <Grid container justifyContent='center'>
                <Divider className={styles.divider} />
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <ChuckNorrisJoke />
                </Suspense>
                <Divider className={styles.divider} />
                    <Suspense fallback={<CircularProgress color="secondary"/>}>
                        <FoodChoice />
                    </Suspense>
            </Grid>

        </>
    );
}