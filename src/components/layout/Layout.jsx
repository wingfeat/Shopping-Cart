import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router";
import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";

const NAV_LINKS = [
  { to: "/", label: "Shop", display: "Shop" },
  { to: "/your-cart", label: "Cart", display: <ShoppingCartOutlined /> },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const totalProducts = cart.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  function addToCart(product, quantity) {
    if (cart.some((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
    }
  }

  function updateQuantity(id, quantity) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item,
      ),
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Shopping cart
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                aria-label={link.label}
                to={link.to}
                end
                color="inherit"
                sx={{
                  "&.active": { textDecoration: "underline" },
                }}
              >
                {link.label === "Cart" ? (
                  <Badge color="primary" badgeContent={totalProducts}>
                    {link.display}
                  </Badge>
                ) : (
                  link.display
                )}
              </Button>
            ))}
            <ThemeToggle />
          </Box>
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }}>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.to}
              component={NavLink}
              to={link.to}
              end
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">Theme</Typography>
          <ThemeToggle />
        </Box>
      </Drawer>

      <Container component="main" sx={{ py: 4 }}>
        <Outlet context={{ cart, addToCart, removeFromCart, updateQuantity }} />
      </Container>
    </>
  );
}
