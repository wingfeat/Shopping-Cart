import { Add, Remove } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

const QUANTITY_SELECTOR = {
  minWidth: 0,
  px: 1.5,
  borderRadius: (theme) => theme.shape.borderPill,
};

export default function QuantitySelector({ value, onChange }) {
  function handleQuantityChange(event) {
    const newValue = Number(event.target.value);

    if (Number.isInteger(newValue) && newValue >= 0) {
      onChange(newValue);
    }
  }

  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Button
        aria-label="Decrease quantity"
        variant="outlined"
        disabled={value <= 0}
        onClick={() => onChange(value - 1)}
        sx={QUANTITY_SELECTOR}
      >
        <Remove sx={{ fontSize: "12px" }} />
      </Button>
      <TextField
        variant="standard"
        value={value}
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
        onClick={() => onChange(value + 1)}
        sx={QUANTITY_SELECTOR}
      >
        <Add sx={{ fontSize: "12px" }} />
      </Button>
    </Stack>
  );
}
