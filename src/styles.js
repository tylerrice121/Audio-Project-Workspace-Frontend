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
        padding: 20px;
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

export const StyledLogin = styled.div `
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url("./images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .circle{
        padding: 20px;
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
        .homeButtons{
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: center;
            height: 300px;
            @media screen and (max-width: 600px) {
                height: 250px;
            }
            .google{
                border: none;
                background-color: transparent;
                text-decoration: underline;
                font-weight: 600;
                font-size: 13px;
                color: #585858;
                &:hover{
                    cursor: pointer;
                }
            }
            .login{
                height: 220px;
                align-self: center;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: space-evenly;
                width: 300px;
                @media screen and (max-width: 600px) {
                width: 250px;
                height: 200px;
                }
                .form{
                    height: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
                .button {
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                background-color: transparent;
                justify-content: center;
                text-align: center;
                font-weight: 600;
                justify-self: center;
                align-self: center;
                width: 120px;
                height: 40px;
                color: #585858;
                text-decoration: none;
                border: 2px solid #585858;
                border-radius: 6px;
                @media screen and (max-width: 600px) {
                width: 110px;
                height: 35px;
                margin: 0;
                }
                }

            }
            .signup{
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                height: 20px;
                @media screen and (max-width: 600px) {
                    margin-top: 10px;
                }
                p{
                    margin: 0;
                    @media screen and (max-width: 600px) {
                    display: none;
                }
                }
                a {
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-weight: 600;
                    justify-self: center;
                    align-self: center;
                    width: 140px;
                    height: 45px;
                    color: #585858;
                    @media screen and (max-width: 600px) {
                    width: 130px;
                    height: 35px;
                    }
                    h3{
                        font-size: 15px;
                        font-weight: 500;
                        align-self: center;
                    }
                }
            }
        }
    }
`;