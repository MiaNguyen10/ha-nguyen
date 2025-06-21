import { Button, styled } from "@mui/material";

const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MenuBar = () => {
  return (
    <>
        <ButtonStyled variant = "text" className = "text-base" href = "#home">
            Home
        </ButtonStyled>
        <ButtonStyled variant = "text" className = "text-base" href = "#about">
            About
        </ButtonStyled>
        <ButtonStyled variant = "text" className = "text-base" href = "#experience">
            Experience
        </ButtonStyled>
        <ButtonStyled variant = "text" className = "text-base" href = "#contact">
            Contact
        </ButtonStyled>
    </>
  )
}

export default MenuBar