import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction'
import { TransactionHistoryContainer, TransactionHead } from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <TransactionHistoryContainer class="transaction-history">
        <thead>
            <tr>
                <TransactionHead>Type</TransactionHead>
                <TransactionHead>Amount</TransactionHead>
                <TransactionHead>Currency</TransactionHead>
            </tr>
        </thead>
        
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <Transaction
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency} />
            )
            )}
        </tbody>
    </TransactionHistoryContainer>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}