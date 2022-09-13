import PropTypes from 'prop-types';
import { TransactionUnit } from 'components/Transaction/Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <tr>
            <TransactionUnit>{type}</TransactionUnit>
            <TransactionUnit>{amount}</TransactionUnit>
            <TransactionUnit>{currency}</TransactionUnit>
        </tr>
)}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}