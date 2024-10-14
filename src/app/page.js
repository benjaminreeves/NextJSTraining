import styles from "./page.module.css";
import { Box, Typography, Stack } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <Stack>
        <Box component="img" my={5} width={600} height={300} src="https://teacode.io/wp-content/uploads/2022/06/Copy-of-AWS-Amplify-blog-compress.png" />
        <Typography variant="h4" textAlign="center">Ben&apos;s NextJS Technical Training</Typography>
      </Stack>
    </div>
  );
}
