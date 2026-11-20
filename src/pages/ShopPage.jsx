import { Box, Grid, Stack, Typography } from "@mui/material";
import { fetchProducts } from "../api/fetchProducts";
import { useEffect, useState } from "react";
import Section from "../components/ui/Section";
import ProductCard from "../components/ui/ProductCard";
import { useOutletContext } from "react-router";

export default function ShopPage() {
  const { addToCart } = useOutletContext();
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
      </Box>

      <Section title="Product list:">
        <Grid container spacing={2}>
          {productList.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 4, md: 3 }}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Stack>
  );
}
