import styled from 'styled-components';

export const StyledTable = styled.table`
width: 100%;
padding: 1rem;
margin-top: 1rem;
display: inline-flex;
flex-direction: column;
justify-content: center;

td{
border: 1px solid black;
width: 100%;
padding: .5rem;
}

th{
    border: 1px solid black;
    background: #DF0000;
    color:white;
    padding: .5rem;
}
`;