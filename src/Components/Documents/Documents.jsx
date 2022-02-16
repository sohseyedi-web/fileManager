import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../Container/Container';
import './Documents.scss'

const Documents = () => {

    const { id } = useParams();

    return (
        <Container>
            this name documents is  : {id}
        </Container>
    );
};

export default Documents;
