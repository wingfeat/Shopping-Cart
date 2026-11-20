import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

const CARD_BTN = {
  minWidth: 0,
  px: 1.5,
  borderRadius: (theme) => theme.shape.borderPill,
};

export default function ProductCard({ product, addToCart }) {
  const [productQuantity, setProductQuantity] = useState(1);

  function handleQuantityChange(event) {
    const value = Number(event.target.value);

    if (Number.isInteger(value) && value >= 0) {
      setProductQuantity(value);
    }
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2lh",
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="overline">{product.category}</Typography>
        <CardMedia
          component="img"
          alt={product.title}
          src={product.image}
          sx={{
            bgcolor: "background.default",
            p: 2,
            borderRadius: 1,
            height: 150,
            objectFit: "contain",
            width: "100%",
          }}
        />
        <Typography
          variant="caption"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mt: "auto",
          }}
        >
          {product.description}
        </Typography>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">{product.price.toFixed(2)} €</Typography>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Button
              aria-label="Decrease quantity"
              variant="outlined"
              disabled={productQuantity <= 0}
              onClick={() => setProductQuantity(productQuantity - 1)}
              sx={CARD_BTN}
            >
              <Remove sx={{ fontSize: "12px" }} />
            </Button>
            <TextField
              variant="standard"
              value={productQuantity}
              size="small"
              onChange={handleQuantityChange}
              sx={{ width: 36 }}
              slotProps={{
                input: { disableUnderline: true },
                htmlInput: {
                  style: { textAlign: "center" },
                  inputMode: "numeric",
                },
              }}
            />
            <Button
              aria-label="Increase quantity"
              variant="outlined"
              onClick={() => setProductQuantity(productQuantity + 1)}
              sx={CARD_BTN}
            >
              <Add sx={{ fontSize: "12px" }} />
            </Button>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          disabled={productQuantity <= 0}
          onClick={() => addToCart(product, productQuantity)}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
