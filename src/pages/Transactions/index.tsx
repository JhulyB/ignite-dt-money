import { CalendarBlank, TagSimple } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { CategoryCol, CreatedAtCol, DescriptionCol, EmptyTransactions, PriceCol, PriceHighlight, TransactionsContainer, TransactionsGridTable, TransactionsTableRow } from "./styles";

export function Transactions() {

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })
    
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm/>

                {/* <TransactionsTable>
                    <tbody>
                        {
                            transactions.map((transaction)=>(
                                <tr key={transaction.id}>
                                    <td width={"50%"}>{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {transaction.type === "outcome" && "- "}
                                            {priceFormatter.format(transaction.price)}</PriceHighlight>
                                    </td>
                                    <td >Venda</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </TransactionsTable> */}
                {
                    transactions.length === 0 && (
                        <EmptyTransactions>
                            <h2>Opps!</h2>
                            <h3>Nenhuma transação encontrada </h3>
                        </EmptyTransactions>
                    )
                }
                <TransactionsGridTable>
                        {
                            transactions.map((transaction)=>(
                                <TransactionsTableRow key={transaction.id}>
                                    <DescriptionCol>{transaction.description}</DescriptionCol>
                                    <PriceCol>
                                        <PriceHighlight variant={transaction.type}>
                                            {transaction.type === "outcome" && "- "}
                                            {priceFormatter.format(transaction.price)}</PriceHighlight>
                                    </PriceCol>
                                    <CategoryCol >
                                        <TagSimple/>
                                        {transaction.category}
                                    </CategoryCol>
                                    <CreatedAtCol>
                                        <CalendarBlank/>
                                        {dateFormatter.format(new Date(transaction.createdAt))}
                                    </CreatedAtCol>
                                </TransactionsTableRow>
                            ))
                        }
                        
                </TransactionsGridTable>
            </TransactionsContainer>
        </div>
    )
}