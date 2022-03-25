// import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import { Button, FormGroup, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "5% 0 0 25%",
  },
  date_time: {
    marginBottom: 20,
  },
});

const Submission = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(new Date());
  // const [cates, setCates] = useState("");
  // const [categoryItem, setCategoryItem] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [closureDate, setClosureDate] = React.useState(new Date());
  const [finalClosureDate, setFinalClosureDate] = React.useState(new Date());

  const user = JSON.parse(localStorage.getItem("user"));
  const requestHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  // const getCateList = async () => {
  //   const res = await axios.get(
  //     "https://localhost:7133/api/Idea/GetAllCategories",
  //     {
  //       name: name,
  //       description: description,
  //       closureDate: closureDate,
  //       finalClosureDate: finalClosureDate,
  //     },
  //     requestHeader
  //   );

  //   setCates(res.data);
  // };

  const onSubmit = async () => {
    await axios.post(
      "https://localhost:7133/api/Idea/CreateSubmissionRequest",
      {
        name: name,
        description: description,
        closureDate: closureDate,
        finalClosureDate: finalClosureDate,
      },
      requestHeader
    );

    setName("");
    setDescription("");
    setClosureDate("");
    setFinalClosureDate("");
  };

  // const handleChange = (event) => {
  //   setCategoryItem(event.target.value);
  // };

  // useEffect(() => {
  //   getCateList();
  // }, []);

  // const renderCateList = Object.values(cates).map((cates) => {
  //   return (
  //     <MenuItem key={cates.id} value={cates.id}>
  //       {cates.name}
  //     </MenuItem>
  //   );
  // });
  return (
    <>
      <AdminSidebar />
      <FormGroup className={classes.root}>
        <TextField
          style={{ marginBottom: 20 }}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <TextField
          style={{ marginBottom: 20 }}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Closure Date"
                value={closureDate}
                onChange={(newValue) => {
                  setClosureDate(newValue);
                }}
              />
            </LocalizationProvider>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Final Closure Date"
                style={{ marginTop: 20 }}
                value={finalClosureDate}
                onChange={(newValue) => {
                  setFinalClosureDate(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>

        {/* <FormControl fullWidth style={{ marginTop: 20 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryItem}
            label="Category"
            onChange={handleChange}
          >
            {renderCateList}
          </Select>
        </FormControl> */}

        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
        >
          Add
        </Button>
      </FormGroup>
    </>
  );
};

export default Submission;
