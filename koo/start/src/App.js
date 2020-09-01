import React, {useState} from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Popup from "./components/Popup";
import Form from "./components/Form";

function App (props) {

    const {} = props;

    const [ popup, handlePopup ] = useState(false);

    return (
        <Container>
            <Header handlePopup={handlePopup} />{
                popup && <Popup handlePopup={handlePopup}/>
            }
            <Form/>
        </Container>
    )
}

const Container = styled.div`
    
`;
export default App;