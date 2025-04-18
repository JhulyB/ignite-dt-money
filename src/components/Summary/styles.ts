import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;

    @media (max-width: 840px){
        width: calc(100vw - 1.5rem);
        overflow-x: scroll;

        &::-webkit-scrollbar {
            height: 0;
        }
    }
`

interface SummaryCardProps{
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme["gray-300"]};
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme["green-700"]};
    `}
`