import styled from '@emotion/styled'

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    list-style: none;
    padding-left: 0;
    flex-basis: calc(100% / 5);
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
                0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;

`;

export const Status = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.status ? 'green' : 'red')};
    margin-right: 20px;
    margin-left: 25px;
`;

export const Avatar = styled.img`
    margin-right: 20px;
`;

export const FriendName = styled.p`
    font-size: 20px;
`;