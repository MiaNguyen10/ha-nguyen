import { Box, Button, Stack } from "@mui/material";

const MobileSidebar = () => {
  return (
    <div>
      <Box p={3}>
        <Stack direction="column" spacing={2}>
          <Button color="inherit" href="#home" className="justify-start">
            Home
          </Button>
          <Button color="inherit" href="#about" className="justify-start">
            About
          </Button>
          <Button color="inherit" href="#experience" className="justify-start">
            Experience
          </Button>
          <Button color="inherit" href="#contact" className="justify-start">
            Contact
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default MobileSidebar;
