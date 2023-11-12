import { Button } from "@mui/material";

const Counter = ({ sumar, restar, contador, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "15px", display: "flex", gap: "30px" }}>
        <Button variant="contained" onClick={restar}>
          -
        </Button>

        <h2>{contador}</h2>
        <Button variant="contained" onClick={sumar}>
          +
        </Button>

        <Button variant="contained" onClick={() => onAdd(contador)}>
          Comprar
        </Button>
      </div>
    </>
  );
};

export default Counter;
