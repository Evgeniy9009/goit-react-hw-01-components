import styled from '@emotion/styled';

export const Item = styled.li`
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    border: 1px solir black;
    background-color: white;
    margin-bottom: 10px;
    margin-left: 50px;
`
    
export const Status = styled.span`
    width: 4px;
    height: 4px;
    margin-left: 20px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: ${props => {
    if (props.isOnline===true) {return `green`}
    else {return `red`}
    }}
    


`

export const Avatar = styled.img`
margin: 6px;
`

export const Name = styled.p`
margin-left: 10px;
`
