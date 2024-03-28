import React from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <p>About page</p>
    </div>

    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   style={{ height: "100vh" }}
    // >
    //   <Grid item xs={12} sm={8} md={6} lg={4}>
    //     <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
    //       <Typography variant="h5" gutterBottom>
    //         About Us
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         Glassdoor is one of the world's largest job and recruiting sites. We
    //         strive to help people everywhere find jobs and companies they love.
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         Our mission is to help people everywhere find a job and company they
    //         love. In pursuit of this mission, we strive to ensure that every
    //         employee at Glassdoor has the resources and support they need to
    //         thrive.
    //       </Typography>
    //       <Typography variant="body1" paragraph>
    //         For employers, Glassdoor offers effective recruiting and employer
    //         branding solutions via our Glassdoor for Employers products.
    //         Glassdoor also helps employers create a more transparent and
    //         engaging workplace culture through our proprietary data, powerful
    //         analytics, and employer branding tools.
    //       </Typography>
    //       <Button
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         href="/contact"
    //         sx={{
    //           marginTop: 2,
    //           backgroundColor: green[500],
    //           "&:hover": { backgroundColor: green[700] },
    //         }}
    //       >
    //         Contact Us
    //       </Button>
    //     </Paper>
    //   </Grid>
    // </Grid>
  );
};

export default AboutPage;
