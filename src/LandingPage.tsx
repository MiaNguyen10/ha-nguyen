import { Box } from "@mui/material";
import React from "react";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";

const LandingPage = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Header />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </Box>
  );
};

export default LandingPage;
