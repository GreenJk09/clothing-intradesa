import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;

`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const Center = styled.div`
    flex:1;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ES</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "gray", fontSize:16 }}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Intradesa</Logo></Center>
                <Right>
                    <MenuItem>Sig in</MenuItem>
                    <MenuItem>
                        <Badge color="primary" badgeContent={9}>
                            <ShoppingCart/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
