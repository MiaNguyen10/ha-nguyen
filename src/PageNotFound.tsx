import pageNotFound from "@/assets/not-found.png";
import { Box, Button, Container, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center">
        <img src={pageNotFound} alt="404" />
      </Box>
      <Typography align="center" variant="h3" mb={4}>
        Opps!!!
      </Typography>
      <Typography align="center" variant="h5" mb={4}>
        This page you are looking for could not be found.
      </Typography>
      <Button
        variant="outlined"
        href="/"
        className="bg-transparent"
      >
        Go Back to Home
      </Button>
    </Container>
    </Box>
  );
};

export default PageNotFound;
