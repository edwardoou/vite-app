import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    telephone: "",
    borndate: "",
    lastname: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSendData = (event) => {
    //para que laweb no se revargue debemos usar preventDefault()
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Home</h1>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Ingrese su apellido"
              name="lastname"
              fullWidth
              value={values.lastname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              type="number"
              label="Ingrese su telefono"
              name="telephone"
              fullWidth
              value={values.telephone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su direccion"
              name="address"
              fullWidth
              value={values.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
            type="date"
              label="Ingrese su fecha de nacimiento"
              InputLabelProps={{ shrink: true }}
              name="borndate"
              fullWidth
              value={values.borndate}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Home;
