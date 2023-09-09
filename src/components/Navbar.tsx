import React from 'react';
import { styled } from 'styled-components';
import { palette } from '../styles/palette';
import { Link, useNavigate } from 'react-router-dom';
import {
  BagIcon,
  SearchIcon,
  MenuBarIcon,
  LogoIcon,
} from '../assets/svg/icon/icons';

const ICON_SIZE = 24;
const LOGO_SIZE = 56;

const menuItems = [
  { text: 'SHOP >', link: '/products' },
  { text: 'FEATURES', link: '/features' },
  { text: 'SUPPORT >', link: '/support' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <StNavbarWrapper>
        <StMainContainer>
          <StButtonBox onClick={() => navigate('/')}>
            <LogoIcon width={LOGO_SIZE} height={LOGO_SIZE} />
          </StButtonBox>
          <StMenuBarContainer>
            <StLeftMenus>
              {menuItems.map((item, index) => (
                <li>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </StLeftMenus>
            <StRightMenus>
              <li>
                <Link to="/products">SEARCH</Link>
              </li>
              <li>
                <Link to="/products">BAG</Link>
              </li>
            </StRightMenus>
          </StMenuBarContainer>

          <StOnMobile>
            <StButtonBox>
              <SearchIcon width={ICON_SIZE} height={ICON_SIZE} />
            </StButtonBox>
            <StButtonBox>
              <BagIcon width={ICON_SIZE} height={ICON_SIZE} />
            </StButtonBox>
            <StButtonBox>
              <MenuBarIcon width={ICON_SIZE} height={ICON_SIZE} />
            </StButtonBox>
          </StOnMobile>
        </StMainContainer>
      </StNavbarWrapper>
    </>
  );
};

export default Navbar;

const StRow = styled.div`
  display: flex;
`;

const StNavbarWrapper = styled(StRow)`
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const StMainContainer = styled(StRow)`
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 0.5px solid ${palette.lightGray};
`;

const StLeftMenus = styled.ul`
  display: flex;
  & li {
    padding: 8px 12px;
  }
  & li:hover {
    font-weight: 700;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const StRightMenus = styled.ul`
  display: flex;
  & li {
    padding: 8px 12px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StButtonBox = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StOnMobile = styled.section`
  display: none;
  gap: 0.1rem;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const StMenuBarContainer = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;

  font-size: 0.75rem;
  font-weight: 700;
`;
