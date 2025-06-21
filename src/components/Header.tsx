import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import MobileSidebar from "@/components/MobileSideBar";
import MenuBar from "@/components/MenuBar";
import Logo from "@/assets/Logo.png";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    minHeight: "70px",
  },
  backgroundColor: theme.palette.background.default,
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > y) {
      // Scrolling down
      document.querySelector("header")?.classList.add("hidden");
    }
    if (currentY < y) {
      // Scrolling up
      document.querySelector("header")?.classList.remove("hidden");
    }
    setY(currentY);
  }, [y]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <AppBarStyled position="sticky" elevation={y ? 8 : 0}>
      <Container maxWidth="lg">
        <ToolbarStyled className="w-full px-0">
          <a href="#home">
            <img src={Logo} alt="Logo" className="w-24" />
          </a>
          <Box flexGrow={1} />
          {/* Content visible on lg and up */}
          <div className="hidden lg:flex">
            <div className="flex flex-row justify-between items-center w-full gap-4">
              <MenuBar />
            </div>
          </div>
          {/* Content visible on smaller than lg */}
          <div className="flex lg:hidden">
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        className="w-[270px] border-0 shadow-lg"
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
}
