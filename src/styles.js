import styled from "styled-components";

export const StyledHeader = styled.header `
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    background-color: black;
    color: white;
    align-items: center;
    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            font-size: 20px;
            li{
                margin-right: 3rem;
                a {
                    text-decoration: none;
                    color: inherit;
                }
                &:hover{
                    cursor: pointer;
                }
            } 
        }
    }
`;