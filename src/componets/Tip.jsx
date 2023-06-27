export default function Tip({ id, tip, onTipChange, isDisabled, children }) {
    return (
        <div className="field-item">
            <label htmlFor={id}>{children}</label>
            <select
                id={id}
                value={tip}
                // Controlled component
                onChange={e => onTipChange(Number(e.target.value))}
                disabled={isDisabled}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was kkay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}
