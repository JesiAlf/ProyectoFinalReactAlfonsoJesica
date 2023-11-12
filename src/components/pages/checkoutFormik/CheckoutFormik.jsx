import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repetPassword: "",
    },

    onSubmit: (data) => {
      console.log("enviado");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(4, "debe tener al menos 4 caracteres")
        .max(15, "no debe superar los 15 caracteres"),
      apellido: Yup.string().required("Campo es obligatorio")
      .min(4, "debe tener al menos 3 caracteres")
        .max(15, "no debe superar los 15 caracteres"),
      email: Yup.string()
        .email("email no válido")
        .required("Campo obligatorio"),
      password: Yup.string()
        .required("Campo obligatorio")
        .matches(/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una mayúscula y una minúscula ",
        }),
      repeatPassword: Yup.string()
        .required("Campo obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  console.log(errors); 

  return (
    <div style={{ padding: "50px", backgroundColor: "rgb(180, 140, 184)" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Repetir contraseña"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />

        <Button variant="contained" type="submit">
          Enviar
        </Button>

        <Button variant={"outlined"} type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;