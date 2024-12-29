
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosinterceptors';

const Addmentor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    CourseID:'',
     CourseName:'',
      CourseDuration:'',
       OverallFeedback:''
  });
  
  useEffect(() => {
    if (location.state !=null) {
      setForm({...form,
        name: location.state.val.CourseID,
        email: location.state.val. CourseName,
        phone: location.state.val.CourseDuration,
        password: location.state.val.OverallFeedback
      });
    }else{
      setForm({...form,CourseID:'',
        CourseName:'',
         CourseDuration:'',
          OverallFeedback:''
      })
    }}, []);

 
  const submit = () => {
    if (location.state!=null) {
      axiosInstance
        .put(`https://localhost:4000/feed/edit/${location.state.val._id}`, form)
        .then(() => {
          alert('Updated successfully');
          navigate('/form');
        })
        .catch((error) => console.error(error));
    } else {
      axiosInstance
        .post('https://localhost:4000/feed/add', form)
        .then((res) => {
          alert(res.data.message);
          navigate('/form');
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div style={{
      backgroundImage: "url('images/addmentor.avif')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
            padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      }}
      noValidate
      autoComplete="off"
    >
     
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 ,color:'brown'}}>
          <b>Add Feedback</b>
        </Typography>
        <TextField
          variant="outlined"
          type="text"
          label="Id"
          name="CourseID"
          value={form.CourseId}
         onChange={(e)=>{
          setForm({...form,CourseId:e.target.value})
         }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="text"
          label="name"
          name="CourseName"
          value={form.CourseName}
         onChange={(e)=>{
          setForm({...form,CourseName:e.target.value})
         }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="text"
          label="Duration"
          name="CourseDuration"
          value={form.CourseDuration}
          onChange={(e)=>{
            setForm({...form,CourseDuration:e.target.value})}}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          type="text"
          label="Rating"
          name=" OverallFeedback"
          value={form. OverallFeedback}
          onChange={(e)=>{
            setForm({...form, OverallFeedback:e.target.value})}}
        />
        <br />
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={()=>submit()}>
          Add
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="success" href="/dash">
          Back
        </Button>
   
    </Box>
    </div>
  );
};

export default Addmentor;
