import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Box className="flex items-center justify-center overflow-hidden min-h-[80vh] mb-10">
      <Box maxWidth="lg" sx={{ textAlign: "center", padding: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          style={{ color: "#d25380", fontFamily: "Gilda Display, serif" }}
        >
          Contact Me
        </Typography>
        <p
          style={{
            color: "#45474b",
            fontFamily: '"Helvetica World", sans-serif',
          }}
        >
          Feel free to reach out via{" "}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-9 my-10">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalPhoneIcon style={{ color: "#d25380", fontSize: 40 }} />
            <p
              style={{
                color: "#45474b",
                fontFamily: '"Helvetica World", sans-serif',
              }}
            >
              +358 44 246 7637
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AlternateEmailIcon style={{ color: "#d25380", fontSize: 40 }} />
            <p
              style={{
                color: "#45474b",
                fontFamily: '"Helvetica World", sans-serif',
              }}
            >
              mianguyen6560@gmail.com
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedInIcon style={{ color: "#d25380", fontSize: 40 }} />
            <a
              href="https://www.linkedin.com/in/ha-nguyen-515593273/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d25380", textDecoration: "none" }}
            >
              Ha Nguyen
            </a>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GitHubIcon style={{ color: "#d25380", fontSize: 40 }} />
            <a
              href="https://github.com/MiaNguyen10"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d25380", textDecoration: "none" }}
            >
              MiaNguyen10
            </a>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default ContactSection;
