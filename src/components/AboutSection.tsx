import { technicalSkills } from "@/data/technicalSkills";
import { Box, Container, Link, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Box className="flex items-center justify-center overflow-hidden min-h-[80vh] mb-10">
      <Container maxWidth="lg">
        <Box className="hidden lg:flex">
          <div className="grid grid-cols-5 gap-14">
            <div className="col-span-2">
              <div className="mb-10">
                <Typography
                  gutterBottom
                  variant="h2"
                  sx={{
                    fontFamily: "Gilda Display, serif",
                    color: "#d25380",
                  }}
                >
                  Education
                </Typography>
                <div>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Bachelor of Software Engineering
                  </Typography>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                    }}
                  >
                    HCMC University of Economics and Finance (UEF)
                  </Typography>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                    }}
                  >
                    2018 - 2022
                  </Typography>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                    }}
                  >
                    GPA: 3.58 / 4.0
                  </Typography>
                </div>
                <div className="mt-5">
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Master of Computer Engineering
                  </Typography>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                    }}
                  >
                    Åbo Akademi University
                  </Typography>
                  <Typography
                    sx={{
                      color: "#45474b",
                      fontFamily:
                        '"Helvetica World", Helvetica, Arial, sans-serif',
                    }}
                  >
                    2024 - 2026
                  </Typography>
                </div>
              </div>

              <div>
                <Typography
                  gutterBottom
                  variant="h2"
                  sx={{
                    fontFamily: "Gilda Display, serif",
                    color: "#d25380",
                  }}
                >
                  Award
                </Typography>
                <Typography
                  component={Link}
                  href="https://www.linkedin.com/posts/ict-showroom_ictshowroom-ict-innovation-activity-7327768313701257216--mMe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELT3CEBhGcNjtyLD7lc31YkeGRmKZCv7WI"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#45474b",
                    fontWeight: 600,
                    fontFamily:
                      '"Helvetica World", Helvetica, Arial, sans-serif',
                  }}
                >
                  Winner of ICT Showroom 2025
                </Typography>
                <Typography
                  sx={{
                    color: "#45474b",
                    fontFamily:
                      '"Helvetica World", Helvetica, Arial, sans-serif',
                  }}
                >
                  Awarded for PartyPass, a QR-based entry solution
                  revolutionizing event management in Finland by streamlining
                  check-ins and automating locker allocation.
                </Typography>
              </div>
            </div>
            <div className="col-span-3">
              <div className="mb-10">
                <Typography
                  gutterBottom
                  variant="h2"
                  sx={{
                    fontFamily: "Gilda Display, serif",
                    color: "#d25380",
                  }}
                >
                  Technical Skills
                </Typography>
                <div className="flex flex-col gap-2">
                  {technicalSkills.map((skill) => (
                    <Typography
                      key={skill.id}
                      sx={{
                        color: "#45474b",
                        fontFamily:
                          '"Helvetica World", Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {skill.name}:{" "}
                      <span className="font-extralight italic">
                        {skill.description}
                      </span>
                    </Typography>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box className="flex lg:hidden flex-col justify-start gap-10">
          <div>
            <Typography
              gutterBottom
              variant="h2"
              sx={{
                fontFamily: "Gilda Display, serif",
                color: "#d25380",
              }}
            >
              Education
            </Typography>
            <div>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                }}
              >
                Bachelor of Software Engineering
              </Typography>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                HCMC University of Economics and Finance (UEF)
              </Typography>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                2018 - 2022
              </Typography>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                GPA: 3.58 / 4.0
              </Typography>
            </div>
            <div className="mt-5">
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                }}
              >
                Master of Computer Engineering
              </Typography>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                Åbo Akademi University
              </Typography>
              <Typography
                sx={{
                  color: "#45474b",
                  fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
                }}
              >
                2024 - 2026
              </Typography>
            </div>
          </div>
          <div>
            <Typography
              gutterBottom
              variant="h2"
              sx={{
                fontFamily: "Gilda Display, serif",
                color: "#d25380",
              }}
            >
              Award
            </Typography>
            <Typography
              component={Link}
              href="https://www.linkedin.com/posts/ict-showroom_ictshowroom-ict-innovation-activity-7327768313701257216--mMe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELT3CEBhGcNjtyLD7lc31YkeGRmKZCv7WI"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#45474b",
                fontWeight: 600,
                fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
              }}
            >
              Winner of ICT Showroom 2025
            </Typography>
            <Typography
              sx={{
                color: "#45474b",
                fontFamily: '"Helvetica World", Helvetica, Arial, sans-serif',
              }}
            >
              Awarded for PartyPass, a QR-based entry solution revolutionizing
              event management in Finland by streamlining check-ins and
              automating locker allocation.
            </Typography>
          </div>
          <div>
            <Typography
              gutterBottom
              variant="h2"
              sx={{
                fontFamily: "Gilda Display, serif",
                color: "#d25380",
              }}
            >
              Technical Skills
            </Typography>
            <div className="flex flex-col gap-2">
              {technicalSkills.map((skill) => (
                <Typography
                  key={skill.id}
                  sx={{
                    color: "#45474b",
                    fontFamily:
                      '"Helvetica World", Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {skill.name}:{" "}
                  <span className="font-extralight italic">
                    {skill.description}
                  </span>
                </Typography>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
