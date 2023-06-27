import { useState } from 'react';
import Bill from './componets/Bill';
import Button from './componets/Button';
import Display from './componets/Display';
import Tip from './componets/Tip';

function App() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    // Derived state
    const avarageTip = bill * ((tip + friendTip) / 2 / 100);

    function handleReset() {
        setBill(0);
        setTip(0);
        setFriendTip(0);
    }

    return (
        <div className="app">
            <h1>Tip Calculator</h1>

            <Bill
                bill={bill}
                onBillChange={ammount => setBill(ammount)}
            />

            <Tip
                tip={tip}
                id="client"
                onTipChange={percentage => setTip(percentage)}
                isDisabled={bill === 0}
            >
                How did you like the service?
            </Tip>

            <Tip
                tip={friendTip}
                id="friend"
                onTipChange={percentage => setFriendTip(percentage)}
                isDisabled={bill === 0}
            >
                How did your friend like the service?
            </Tip>

            {bill > 0 ? (
                <>
                    <Display
                        bill={bill}
                        avarageTip={avarageTip}
                    />

                    <Button onClick={handleReset}>
                        <span>❌</span>
                        <span>Reset</span>
                    </Button>
                </>
            ) : (
                <h2 className="display">Please insert a bill ammount.</h2>
            )}
        </div>
    );
}

export default App;
