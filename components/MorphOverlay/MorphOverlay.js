import { useTheme, useThemeUpdate } from "@/ThemeContext";
import Menu from "./Menu";
import tw from "twin.macro";
import styled from "styled-components";

const MorphWrapper = styled.div.attrs((props) => ({
  className: "morph h-screen  w-screen flex justify-center items-center",
}))``;

const MorphOverlay = () => {
  const { isOpen } = useTheme();
  const { isHamburgerOpen } = useThemeUpdate();

  return (
    <MorphWrapper>
      <Menu />
    </MorphWrapper>
  );
};
export default MorphOverlay;
