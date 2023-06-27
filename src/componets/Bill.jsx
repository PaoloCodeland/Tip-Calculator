export default function Bill({ bill, onBillChange }) {
    return (
        <div className="field-item">
            <label htmlFor="bill">How much was the bill?</label>
            <input
                type="number"
                id="bill"
                min="0"
                // Controlled component
                value={bill}
                onChange={e => onBillChange(Number(e.target.value))}
            />
        </div>
    );
}
