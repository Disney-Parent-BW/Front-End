import styled from 'styled-components';

const Wrapper = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 15px;
`;

const Form = styled.form`

    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 20px 0;
    align-items: center;
`;

const Input = styled.input`

    width: 80%;
    padding: 4px;
    margin: 10px;
    border: none;
    border-bottom: 3px solid #a5c3c6;
    color: #235789;
    font-size: 1.2rem;
    text-align: center;
`;

const Button = styled.button`
    padding: 5px;
    color: #ec5990;
    border-radius: 8px;
    border: 2px solid #e3e2e0;

    margin: 10px;
    display: flex;
    align-items: baseline;
    background-color: #235789;
    
    &:hover{
        background: #a5c3c6;
    }
`;

const Header = styled.h1`
    font-weight: bold;
    border: none;
    font-size: 3rem;
    color: #235789;
`


const Container = styled.div`
    font-weight: bold;
    // color: white;
    background-color: #235789;
    border-radius: 15px;
    border:.5px solid black;
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SubTitle = styled.p`
    color: white;
    font-size: 1.5rem;
`;
 const NavLink = styled.span`
    color: orange;
    `;

export {
    Wrapper,
    Form,
    Input,
    Button,
    Container,
    SubTitle,
    NavLink,
    Header

}