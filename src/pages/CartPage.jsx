import { Box, Stack, Typography } from "@mui/material";
// import { useOutletContext } from "react-router";

export default function CartPage() {
  //   const cart = useOutletContext();

  return (
    <Stack spacing={8}>
      <Box>
        <Typography variant="h1">Your cart</Typography>
      </Box>
    </Stack>
  );
}
