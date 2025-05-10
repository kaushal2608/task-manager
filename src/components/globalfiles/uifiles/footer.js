import React from 'react'
import { Box, Typography, Container, Grid2, Link, Stack, TextField, Button} from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        px: { xs: 4, md: 20 },
        py: { xs: 4, md: 6 },
        borderTop: "1px solid #e0e0e0",
        backgroundImage: 'url("/assets/Group.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "180px",
      }}
    >
      <Grid2 container spacing={4} justifyContent="space-between">
        {/* Logo and description */}
        <Grid2 item size={{ xs: 12 }}>
          <Box>
            <img src="/assets/logo.png" alt="Supreme Group Logo" style={{ height: 50 }} />
          </Box>
        </Grid2>

        {/* Links Section */}
        <Grid2 size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            APPLICATIONS
          </Typography>
          <Stack spacing={1}>
            {["Apparel", "Automotive", "Filtration", "Customised Solutions"].map((item) => (
              <Link key={item} href="#" underline="none" color="text.secondary">
                {item}
              </Link>
            ))}
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            COMPANY
          </Typography>
          <Stack spacing={1}>
            {["Innovation", "Global Competency", "About Us", "Contact Us"].map((item) => (
              <Link key={item} href="#" underline="none" color="text.secondary">
                {item}
              </Link>
            ))}
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            MORE
          </Typography>
          <Stack spacing={1}>
            {["Careers", "Privacy Policy", "Terms and Conditions"].map((item) => (
              <Link key={item} href="#" underline="none" color="text.secondary">
                {item}
              </Link>
            ))}
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            FOLLOW US
          </Typography>
          <Stack spacing={1}>
            {["Twitter", "LinkedIn", "Instagram", "Medium"].map((item) => (
              <Link key={item} href="#" underline="none" color="text.secondary">
                {item}
              </Link>
            ))}
          </Stack>
        </Grid2>
      </Grid2>

      {/* Address at the bottom */}
      <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
      <Box mt={4} textAlign={{ xs: "left", md: "left" }}>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        ©2023. All Rights Reserved.
    </Typography>
    </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
      <Box mt={4} textAlign={{ xs: "left", md: "right", }}>
        <Typography variant="body2" color="text.secondary" sx={{paddingRight:"40px"}}>
          Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
        </Typography>
      </Box>
      </Grid2>
      </Grid2>
    </Box>
  )
}

export default Footer