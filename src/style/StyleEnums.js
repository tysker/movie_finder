import styled from 'styled-components';

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

export const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;

export const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${(props) => props.backdrop}) no-repeat;
    background-size: cover;
`;

export const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
      margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;
