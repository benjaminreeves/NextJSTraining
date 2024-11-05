"use client"
import React, { useState } from "react";
import { Stack, TextField, Button, Alert, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitForm } from "../actions/SubmitAction";

const contactSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    message: yup.string().required("Please enter your message")
});

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(contactSchema)
    });
    const [formSent, setFormSent] = useState(false);
    const [formError, setFormError] = useState(false);

    function onSubmit(event) {
        const formSubmitted = SubmitForm(event);

        if (formSubmitted) {
            setFormSent(true);
        } else {
            setFormSent(false);
        }
    }

    function handleReset() {
        setFormSent(false)
        setFormError(false)
        reset()
    }

    return (
        <>
            { formSent && <Alert sx={{ width: '50%' }} severity="success"><Typography>Message sent</Typography></Alert> }
            { formError && <Alert sx={{ width: '50%' }} severity="error"><Typography>Hmmmm something went wrong, please try again.</Typography></Alert> }
            <form style={{ my: 1, width: '50%' }} onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <TextField sx={{ m: 1, p: 1 }} helperText={errors.name?.message} onChange={(e) => console.log(errors)} {...register("name", { required: true })} variant="outlined" placeholder="Name"/>
                    <TextField sx={{ m: 1, p: 1 }} helperText={errors.email?.message} {...register("email")} variant="outlined" placeholder="Email" name="email" />
                    <TextField sx={{ m: 1, p: 1 }} helperText={errors.message?.message} {...register("message")} multiline minRows={5} variant="outlined" placeholder="Message" name="message" />
                    <Stack direction="row" justifyContent="center">
                        <Button sx={{ m: 1 }} variant="contained" type="submit">Submit</Button>
                        <Button sx={{ m: 1 }} variant="contained" onClick={handleReset}>Reset</Button>
                    </Stack>
                </Stack>
            </form>
        </>
    )
}