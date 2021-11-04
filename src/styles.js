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

export const StyledHome = styled.div `
$small: 600px;
$medium: 1200px;

    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url("./images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .circle{
        /* background-color: #FEC812; */
        background: rgba(254,200,18,0.9);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        @media screen and (max-width: 600px) {
            width: 360px;
            height: 360px;
        }
        .homeButtons{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-content: center;
            height: 150px;
            a {
                display: flex;
                justify-content: center;
                text-align: center;
                font-weight: 600;
                justify-self: center;
                align-self: center;
                width: 140px;
                height: 45px;
                color: #585858;
                text-decoration: none;
                border: 2px solid #585858;
                border-radius: 6px;
                @media screen and (max-width: 600px) {
                width: 130px;
                height: 35px;
                }
                h3{
                    font-weight: 600;
                    align-self: center;
                }
            }
        }
        .title{
            height: 100px;
            h1{
                color: #292929;
                font-family: 'Bowlby One SC', cursive;
                font-size: 60px;
                margin: 0;
                @media screen and (max-width: 600px) {
                font-size: 50px;
                }
            }
            h2{
                color: #292929;
                @media screen and (max-width: 600px) {
                font-size: 20px;
                }
            }
        }
    }

`;