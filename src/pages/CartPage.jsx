import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useOutletContext } from "react-router";
import QuantitySelector from "../components/ui/QuantitySelector";
import { Delete } from "@mui/icons-material";
import { ROUND_BUTTON_SX } from "../components/ui/constants";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useOutletContext();

  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  let content;

  if (cart.length === 0) {
    content = <Alert severity="info">There is nothing in your cart</Alert>;
  } else {
    content = cart.map((item) => (
      <Card key={item.id}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  src={item.image}
                  sx={{
                    bgcolor: "background.default",
                    p: 2,
                    borderRadius: 1,
                    height: 150,
                    width: { xs: "100%", sm: 200 },
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <Stack>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="overline">{item.category}</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Stack
                direction={{ xs: "row", sm: "column" }}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  height: "100%",
                }}
              >
                <Typography>${item.price.toFixed(2)}</Typography>
                <Stack direction="row" spacing={1}>
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(quantity) =>
                      quantity < 1
                        ? removeFromCart(item.id)
                        : updateQuantity(item.id, quantity)
                    }
                  />
                  <Button
                    aria-label="Delete item from cart"
                    sx={ROUND_BUTTON_SX}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Delete sx={{ fontSize: "12px" }} />
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    ));
  }

  return (
    <Stack spacing={8}>
      <Box>
        <Typography variant="h1">Your cart</Typography>
      </Box>

      <Stack spacing={2}>
        {content}
        {cart.length > 0 ? (
          <>
            <Divider />
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography>Total:</Typography>
              <Typography>${totalPrice}</Typography>
            </Stack>
          </>
        ) : null}
      </Stack>
    </Stack>
  );
}
