import styled from 'styled-components';

export const ActionBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
`
export const ActionBarButton = styled.button`
    background: #DF0000;
    padding: .7rem 1rem;
    border: 1px solid #DF0000;
    border-radius: 15px;
    transision: background 0.7s ease;
    color: white;
    font-weight: bold;
    
    &:hover{
        background: #FFF;
        color: #DF0000
    }
`;
;
