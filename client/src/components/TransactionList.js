import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
      getTransactions();
      // elint-disable-nect-line react-hooks/exhaustive-deps
    },[]);
    return (
        <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(transaction => (<Transaction key={transactions.id} transaction={transaction} />))}

        </ul>
        </>
    )
}

export default TransactionList;
