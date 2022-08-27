import OnramperWidget from "@onramper/widget";
import { useEffect, useState } from "react";

function OnRamperModal({
    address,
    defaultPaymentMethod, 
    defaultAmount, 
    defaultCrypto,
    defaultFiat,
    setOnramper}) {
  const wallets = {defaultAddrs: {
    ALGO: { address: address, memo: "cryptoTag" },
    ETH: { address: address, memo: "cryptoTag" },
    AVAX: { address: address, memo: "cryptoTag" },
    BOBA: { address: address, memo: "cryptoTag" },
    FANTOM: { address: address, memo: "cryptoTag" },
    NEAR: { address: address, memo: "cryptoTag" },
    MATIC: { address: address, memo: "cryptoTag" },
    SOL: { address: address, memo: "cryptoTag" },}
  };
  const supportedBundlrCurrencies = [
    "ALGO",
    "ETH",
    "AVAX",
    'BOBA',
    'FANTOM',
    'NEAR',
    'MATIC',
    'SOL'
  ]
  const [settable, setSettable] = useState(false)
  function setModal(){
    if(settable){setOnramper(false)}
  }

  return (
    <div id="onramper-modal" onClick={()=>{setModal()}} >
        <div className="onramper-widget" onMouseOver={()=>{setSettable(false)}} onMouseLeave={()=>{setSettable(true)}}>
      <OnramperWidget
        API_KEY={"pk_prod_lSuDzNPsKDWT6TEYHlzdwL4YBRhw5W_jLAcHFEBQUEM0"}
        //color={defaultColor}
        //fontFamily={fontFamily}
        defaultAddrs={wallets}
        defaultAmount={defaultAmount}
        defaultCrypto={defaultCrypto}
        defaultFiat={defaultFiat}
        //defaultFiatSoft={defaultFiatSoft}
        defaultPaymentMethod={defaultPaymentMethod}
        filters={{
          onlyCryptos: supportedBundlrCurrencies,
          //excludeCryptos: excludeCryptos,
          //onlyPaymentMethods: onlyPaymentMethods,
          //excludePaymentMethods: excludePaymentMethods,
         // excludeFiat: excludeFiat,
         // onlyGateways: onlyGateways,
          //onlyFiat: onlyFiat,
        }}
        //isAddressEditable={false}
        //amountInCrypto={amountInCrypto}
        //redirectURL={redirectURL}
        darkMode={false}
      />
    </div>
    </div>
  );
}

export default OnRamperModal