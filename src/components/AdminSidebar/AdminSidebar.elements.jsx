import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #2b3494;
  /* height: 80px; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100vh;
  justify-content: center;
  /* flex-direction: column; */
`;

export const NavMenuItems = styled.div`
  margin-left: 2rem;
  font-size: 1.5rem;
  background: none;
`;

export const NavMenuLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 35px 0 8px 16px;
  list-style: none;
  height: 60px;
`;

export const NavMenuLiLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  width: 95%;
  height: 100%;
  align-items: center;
  padding: 22px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #1383ff;
  }
`;

export const NavMenuSpan = styled.span`
  padding: 0 8px;
`;
