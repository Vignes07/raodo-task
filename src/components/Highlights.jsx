import PropTypes from "prop-types";

const Highlights = ({data}) => {
    return (
        <div className="highlights">
            <div className="highlights-label">
                <h3>Total Highlights (14) </h3>
                <span>{data.date}</span>
            </div>
            <div className="income-expense">
                <div>
                    <span>Income</span>
                    <span className="income-amount">{data.income} CAD</span>
                    <span className="payment">{data.incomePayment} payments received</span>
                </div>
                <div>
                    <span>Expenses</span>
                    <span className="expense-amount">{data.expenses} CAD</span>
                    <span className="payment">{data.expensesPayment} payments paid</span>
                </div>
            </div>
        </div>
    );
};

Highlights.propTypes = {
    data: PropTypes.object.isRequired
}

export default Highlights;