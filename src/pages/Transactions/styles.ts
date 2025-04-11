import styled from "styled-components";

export const TransactionsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;

`
export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td{
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

export const TransactionsGridTable = styled.div`
    margin: 1.5rem 0;
`

export const TransactionsTableRow = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(2, 1fr) 7.5rem;

    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};

    border-radius: 6px;

    white-space: nowrap;

    &:not(:first-child){
        margin-top: 0.5rem;
    }
    
    @media (max-width: 716px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }
`

export const DescriptionCol = styled.div`
    width: 15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 716px) {
        grid-column: 1 / span 2;
    }
`
export const PriceCol = styled.div`
    @media (max-width: 716px) {
        grid-column: 1 / span 2;
        margin-bottom: 0.25rem;
    }
`
export const CategoryCol = styled.div`
    svg{
        display: none;
    }

    @media (max-width: 716px) {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${props => props.theme["gray-500"]};

        svg{
            display: block;
        }
    }
`

export const CreatedAtCol = styled.div`
    svg{
        display: none;
    }

    @media (max-width: 716px) {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: end;
        color: ${props => props.theme["gray-500"]};
        
        svg{
            display: block;
        }
    }
`

interface PriceHighlightProps{
    variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`

export const EmptyTransactions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme["gray-500"]};
    margin-top: 2.5rem;
`