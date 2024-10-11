import React from "react";
import Link from "next/link";
import { Stack, Box, Divider } from "@mui/material";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
        <Stack direction="row" m={1}>
            <Box justifyContent="flex-end" width="100%">
                <Link className={styles.Link} href="/">Home</Link>
                <Link className={styles.Link} href="/AboutMe">About Me</Link>
                <Link className={styles.Link} href="/API">API</Link>
            </Box>
        </Stack>
        <Divider sx={{ bgcolor: 'grey' }} orientation="horizontal" />
        </>
    )
}