import { Box, Button, Container, styled, Typography } from "@mui/material";
import personalImg from "../assets/pic2.jpg";

const ButtonStyled = styled(Button)(() => ({
  backgroundColor: "#45474b",
  color: "#ffffff",
  fontWeight: 600,
  borderRadius: "20px",
  padding: "10px 20px",
}));

const HomeSection = () => {
  return (
    <Box className="flex items-center justify-center overflow-hidden min-h-[90vh] mb-10">
      <Container maxWidth="lg">
        <Box className="hidden lg:flex">
          <div className="grid grid-cols-5 gap-20">
            <div className="col-span-2">
              <img
                src={personalImg}
                alt="Personal"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-3">
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: "Gilda Display, serif",
                  color: "#45474b",
                }}
              >
                Hello, I am
              </Typography>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#d25380",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                Ha Nguyen
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                Dedicated and highly motivated software developer with a strong
                background in web development and system operations Experienced
                in working with React, Node.js, and ERP systems, I am quick to
                learn new technologies and adapt to complex environments. With a
                passion for innovation and problem-solving, I am excited about
                the opportunity to contribute to cuttingedge software solutions
                while continuously growing my skills as a Software Developer
              </Typography>
              <div className="mt-10">
                <ButtonStyled href="#about">Get Started</ButtonStyled>
              </div>
            </div>
          </div>
        </Box>
        <Box className="flex lg:hidden">
          <div>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: "Gilda Display, serif",
                  color: "#45474b",
                }}
              >
                Hello, I am
              </Typography>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#d25380",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                Ha Nguyen
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                Dedicated and highly motivated software developer with a strong
                background in web development and system operations Experienced
                in working with React, Node.js, and ERP systems, I am quick to
                learn new technologies and adapt to complex environments. With a
                passion for innovation and problem-solving, I am excited about
                the opportunity to contribute to cuttingedge software solutions
                while continuously growing my skills as a Software Developer
              </Typography>
              <div className="mt-10">
                <ButtonStyled href="#about">Get Started</ButtonStyled>
              </div>
            </div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
