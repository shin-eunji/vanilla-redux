import React from 'react';
import styled from 'styled-components';

function Header (props) {

    const {
        handlePopup
    } = props;

    return (
        <Container>
            <Logo>
                SHIN
            </Logo>
            <Nav>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Service</Link>
                <Link>Contact</Link>
                <Link onClick={() => {
                    handlePopup(true)
                }}>Notice</Link>
            </Nav>

        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid #eee;
  display:flex;
  justify-content: space-between;
  padding: 0 50px;
  
`

const Logo = styled.div`
    display:flex;
    align-items:center;
`;

const Nav = styled.nav`
    display:flex;
    
`;
const Link = styled.div`
  height: 60px;
  padding: 0 20px;
  display:flex;
  align-items:center;
  justify-content: center;    
`;
export default Header;