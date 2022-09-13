import styled from '@emotion/styled'

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    background-color: #f1f1f1;
`;

export const StatsItem = styled.li`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-basis: calc(100% / 4);
`;


export const Label = styled.span`
    font-size: 14px;
`;


export const Quantity = styled.span`
    font-size: 18px;
    font-weight: 700;
`;