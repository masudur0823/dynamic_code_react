import React, { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

function DynamicForms() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) =>{
    
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  }
  return (
    <div className="d-form">
      <Container>
        <form onSubmit={submit}>
          {formFields.map((form, index) => (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                mt:2,
              }}
              key={index}
            >
              <TextField
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <TextField
                id="outlined-basic"
                name="age"
                label="Age"
                variant="outlined"
                fullWidth
                onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <Button 
              variant="contained" 
              sx={{ background: "red" }}
              onClick={() => removeFields(index)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </form>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            mx: "auto",
            p: 1,
            mt: 2,
          }}
        >
          <Button variant="contained" onClick={addFields}>
            Add
          </Button>
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default DynamicForms;
