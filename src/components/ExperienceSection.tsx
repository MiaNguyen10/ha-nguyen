import { experienceData } from "@/data/experienceData";
import { Box, Container, styled, Typography } from "@mui/material";

const BoxStyled = styled(Box)(() => ({
  backgroundColor: "#f6c391",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  height: "500px",
  width: '350px',
}));

const ExperienceSection = () => {
  return (
    <Box className="flex items-center justify-center overflow-hidden min-h-[80vh] mb-10">
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h4"
          className="text-center pb-0 lg:pb-5"
          sx={{
            fontFamily: "Gilda Display, serif",
            color: "#d25380",
          }}
        >
          My Experience
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {experienceData.map((experience, index) => (
            <BoxStyled key={index}>
              <Typography
          variant="h5"
          className="pb-2"
          sx={{
            fontFamily: "Gilda Display, serif",
            fontWeight: "bold",
          }}
              >
          {experience.title}
              </Typography>
              <Typography
          sx={{
            color: "#45474b",
            fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
            fontWeight: 600,
            fontSize: "0.9rem",
            paddingBottom: "8px",
          }}
              >
          {experience.company}
          <span className="italic font-light">
            {" "}
            ( {experience.workingPeriod} )
          </span>
              </Typography>
              <ul className="list-disc pl-6">
          {experience.description.map((desc, descIndex) => (
            <li key={descIndex}>
              <Typography
                sx={{
            color: "#45474b",
            fontSize: "0.9rem",
            fontFamily:
              '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                {desc}
              </Typography>
            </li>
          ))}
              </ul>
            </BoxStyled>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
