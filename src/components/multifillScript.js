// This is basically optional & needs additional work; For the SEED PHRASE.

// I noticed when seed was copied it then had to be cut up in order to process through quickly. 

// The idea is to take the paste and spread it across the inputs.  Would be better for DEMOS for sure. 




import { useEffect } from 'react';

export default function PasteHandler() {
    const handlePaste = event => {
        console.log(event.clipboardData.getData('text'));
    };

    useEffect(() => {
        const handlePasteAnywhere = event => {
            console.log(event.clipboardData.getData('text'));
        };

        window.addEventListener('paste', handlePasteAnywhere);

        return () => {
            window.removeEventListener('paste', handlePasteAnywhere);
        };
    }, []);

    return (
        <div>
            {/* <h2>Hello world</h2> */}

            {/* 👇️ handle paste event on an input field */}
            <input onPaste={handlePaste} type="text" id="message" autoComplete="no" />
        </div>
    );
}
