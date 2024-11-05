import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography, Stack } from "@mui/material"; 
import nextJsPic from '../../public/NextJS_Pic.png';

export default function Home() {
  return (
    <div className={styles.page}>
      <Stack>
        <Image key={"pic"} style={{ marginTop: '2rem' }} width={1000} height={500} src={nextJsPic} alt="NextJs Picture"/>
        <Typography variant="h4" textAlign="center">Ben&apos;s NextJS Technical Training</Typography>
      </Stack>
    </div>
  );
}
