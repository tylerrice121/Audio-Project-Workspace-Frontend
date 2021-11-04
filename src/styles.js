import styled from "styled-components";


export const StyledHeader = styled.header `
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    background-color: black;
    color: white;
    align-items: center;
    width: 100%;
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
        @media only screen and (max-width: 600px),
        only screen and (max-height: 600px) {
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
                border: 1.5px solid #585858;
                border-radius: 6px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
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
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 50px;
                }
            }
            h2{
                color: #292929;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 20px;
                }
            }
        }
    }

`;

export const StyledLogin = styled.div `
    display: -webkit-flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url("./images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .circle{
        background: rgba(254,200,18,0.9);
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        @media only screen and (max-width: 600px),
        only screen and (max-height: 600px) {
        width: 360px;
        height: 360px;
        }
        .title{
            height: 100px;
            h1{
                color: #292929;
                font-family: 'Bowlby One SC', cursive;
                font-size: 60px;
                margin-bottom: 0;
                /* margin: 0; */
                padding: 0;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 40px;
                }
            }
            h2{
                color: #292929;
                margin: 0;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 20px;
                }
            }
        }
        .homeButtons{
            margin: 0;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: center;
            height: 300px;
            @media only screen and (max-width: 600px),
            only screen and (max-height: 600px) {
                height: 300px;
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
                display: -webkit-flex;
                flex-direction: column;
                align-content: center;
                justify-content: space-evenly;
                width: 300px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                width: 250px;
                height: 210px;
                }
                .form{
                    height: 180px;
                    display: -webkit-flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .button {
                margin-top: 20px;
                /* margin-bottom: 20px; */
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
                border: 1px solid #585858;
                border-radius: 6px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                width: 110px;
                height: 35px;
                margin-top: 10px;
                }
                }

            }
            .signup{
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                height: 20px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                    margin-top: 0px;
                }
                p{
                    margin: 0;
                    font-size: 12px;
                    @media only screen and (max-width: 600px),
                    only screen and (max-height: 600px) {
                    display: none;
                }      
                }
                }
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
                    @media only screen and (max-width: 600px),
                    only screen and (max-height: 600px) {
                    width: 130px;
                    height: 35px;
                    margin-bottom: 20px;
                    }
                    h3{
                        font-size: 12px;
                        font-weight: 500;
                        align-self: center;
                        margin-bottom: 30px;
                    }
                }
            }
        }
    
`;

export const StyledSignup = styled.div `
    display: -webkit-flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-image: url("./images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .circle{
        /* padding: 20px; */
        background: rgba(254,200,18,0.9);
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        @media only screen and (max-width: 600px),
        only screen and (max-height: 600px) {
        width: 360px;
        height: 360px;
        }
        .title{
            height: 100px;
            h1{
                color: #292929;
                font-family: 'Bowlby One SC', cursive;
                font-size: 60px;
                /* margin: 0; */
                margin-bottom: 0;
                padding: 0;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 40px;
                }
            }
            h2{
                color: #292929;
                margin: 0;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                font-size: 20px;
                }
            }
        }
        .homeButtons{
            margin: 0;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: center;
            height: 300px;
            @media only screen and (max-width: 600px),
            only screen and (max-height: 600px) {
                height: 300px;
            }
            .login{
                height: 210px;
                align-self: center;
                display: -webkit-flex;
                flex-direction: column;
                align-content: center;
                justify-content: space-evenly;
                width: 300px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                width: 250px;
                height: 210px;
                }
                .form{
                    height: 170px;
                    display: -webkit-flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .button {
                margin-top: 20px;
                /* margin-bottom: 20px; */
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
                border: 1px solid #585858;
                border-radius: 6px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                width: 110px;
                height: 35px;
                margin-top: 10px;
                }
                }

            }
            .signup{
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                height: 20px;
                @media only screen and (max-width: 600px),
                only screen and (max-height: 600px) {
                    margin-top: 0px;
                }
                p{
                    /* margin: 0; */
                    margin-top: 0;
                    font-size: 12px;
                    @media only screen and (max-width: 600px),
                    only screen and (max-height: 600px) {
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
                    @media only screen and (max-width: 600px),
                    only screen and (max-height: 600px) {
                    width: 130px;
                    height: 35px;
                    }
                    h3{
                        font-size: 12px;
                        font-weight: 500;
                        align-self: center;
                        margin-bottom: 50px;
                    }
                }
            }
        }
    }
`;

export const StyledDash = styled.div `
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    .top{
        display: flex;
        flex-direction: column;
        width: 300px;
        margin-bottom: 20px;
        margin-top: 30px;
        .form {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 20px;
            input{
                width: 200px;
            }
            .addButton{
                color: #585858;
                border-color: #585858;
                align-self: flex-end;
                height: 30px;
                width: 10px;
            }
        }
    }
    .main{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .projects{
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            width: 350px;
            height: 475px;
            margin-top: 10px;
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
            .upload{
                border: 1px solid gray;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                height: 350px;
                width: 350px;
                .loaded{
                    margin-top: 10px;
                    .loadedButton{
                    justify-self: center;
                    color: #585858;
                    border-color: #585858;
                    font-size: 12px;
                    height: 40px;
                    width: 145px; 
                    }
                }
                .bottomButton{
                justify-self: center;
                color: #585858;
                border-color: #585858;
                font-size: 12px;
                height: 40px;
                width: 145px;
                }
                .choosefile{
                    display: none;
                }
            }
            .title{
                text-decoration: none;
                color: #292929;
            }
            .bottom{
                width: 100%;
                display: flex;
                align-content: center;
                justify-content: space-between;
                a{
                    text-decoration: none;
                }
                .bottomButton{
                justify-self: center;
                color: #585858;
                border-color: #585858;
                font-size: 12px;
                height: 30px;
                width: 10px;
                margin-right: 20px;
                margin-left: 20px;
                }
            }
        }
    }

`;