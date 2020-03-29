import styled from 'styled-components'

export const NavContainer = styled.div`
    flex: 1 1;
    margin-right: 10px;
`
export const Nav = styled.nav`

`
export const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
export const ListItem = styled.li`
    margin-bottom: 5px;
    border: 2px solid #ccc;
    a {
        text-decoration: none;
        display: block;
        padding: 5px 15px;
        font-size: 20px;
        text-align: center;
        background-color: #000;
        color: #fff;
    }
`