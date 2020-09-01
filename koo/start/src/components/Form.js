import React, {useState} from 'react';
import styled from 'styled-components';

function Form(props) {

    const {} = props;
    
    const [value, setValue] = useState({});

    return (
        <Container>
        
            <input type="text"
                   name={"email"}
                   placeholder={"이메일을 입력하세요"}
                   className={"form-control"}
                   onChange={(e) => {
                        setValue({
                            ...value,
                            email: e.target.value
                        })
                   }}
            />
            <input type="text"
                   name={"password"}
                   placeholder={"패스워드를 입력하세요"}
                   className={"form-control"}
                   onChange={(e) => {
                       setValue({
                           ...value,
                           password: e.target.value
                       })
                   }}
            />
            <Button onClick={() => {
                console.log("value", value);
            }}>로그인</Button>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    .form-control {
        display:block;
        width: 320px;
        height: 40px;
        border: 1px solid #000;
        margin-bottom: 5px;
    }
`

const Button = styled.div`
  width: 320px;
  height: 40px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: blue;
  color: #fff;
  cursor: pointer;    
`;
export default Form;