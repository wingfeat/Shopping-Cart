import { Add, Remove } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { ROUND_BUTTON_SX } from "./constants";

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
        sx={ROUND_BUTTON_SX}
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
        sx={ROUND_BUTTON_SX}
      >
        <Add sx={{ fontSize: "12px" }} />
      </Button>
    </Stack>
  );
}
