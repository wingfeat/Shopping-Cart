import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";

export default function ProductCard({ product, addToCart }) {
  const [productQuantity, setProductQuantity] = useState(1);

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
          <Typography variant="body1">${product.price.toFixed(2)}</Typography>
          <QuantitySelector
            value={productQuantity}
            onChange={setProductQuantity}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          disabled={productQuantity <= 0}
          fullWidth
          onClick={() => addToCart(product, productQuantity)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
