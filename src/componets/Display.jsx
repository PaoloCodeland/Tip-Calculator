export default function Display({ bill, avarageTip }) {
    return (
        <h2 className="display">
            You pay ${bill + avarageTip} (${bill} + ${avarageTip} tip)
        </h2>
    );
}
