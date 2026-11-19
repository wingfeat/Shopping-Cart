import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { fetchProducts } from "../api/fetchProducts";
import { useEffect, useState } from "react";
import Section from "../components/ui/Section";
// import { useOutletContext } from "react-router";

export default function ShopPage() {
  // const { cart } = useOutletContext();
  const [productList, setProductList] = useState([]);
  // const [hasError, setHasError] = useState(false);
  // const [isLoading, setIsLoading] = IuseState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const newProducts = await fetchProducts();
        setProductList(newProducts);
      } catch (error) {
        // setHasError(true);
        console.error("Error:", error);
      } finally {
        // setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <Stack spacing={8}>
      <Box>
        <Typography variant="h1">Shop</Typography>
        <Button variant="outlined">Fetch</Button>
      </Box>

      <Section title="Product list:">
        <Grid container spacing={2}>
          {productList.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                  <Typography variant="body1">{product.price} €</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Stack>
  );
}
