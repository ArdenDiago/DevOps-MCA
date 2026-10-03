import { useEffect, useState } from "react";
export default function Synopsis({ functionCaller, lengthTargetFulfilled }) {
  let dataValue = [
    ["Enter", 2000],
    ["the", 500],
    ["digital", 1500],
    ["playground,", 1500],
    ["where", 1000],
    ["the", 500],
    ["city's", 1000],
    ["heartbeat", 2500],
    ["syncs", 1000],
    ["with", 1000],
    ["the", 1000],
    ["pulse", 3000],
    ["of", 1000],
    ["innovation.", 3500],
    ["Welcome", 1500],
    ["to", 500],
    ["the", 500],
    ["Techno", 1000],
    ["Cultural", 2000],
    ["Fest", 1000],
    ["Oracle,", 2000],
    ["where", 1000],
    ["every", 1000],
    ["pixel", 1000],
    ["holds", 1000],
    ["a", 500],
    ["secret", 3000],
    ["and", 500],
    ["every", 1900],
    ["line", 1000],
    ["of", 500],
    ["code", 1500],
    ["whispers", 2500],
    ["prophecy.", 1500],
    ["In", 500],
    ["this", 1300],
    ["realm", 1400],
    ["of", 1000],
    ["digital", 2000],
    ["liberation,", 2000],
    ["where", 500],
    ["information", 2000],
    ["is", 400],
    ["power", 1500],
    ["and", 1000],
    ["connection", 2000],
    ["is", 500],
    ["key,", 1500],
    ["we", 500],
    ["harness", 2000],
    ["the", 500],
    ["power", 1800],
    ["of", 10],
    ["technology", 2000],
    ["to", 500],
    ["unlock", 1500],
    ["the", 100],
    ["mysteries", 2200],
    ["of", 100],
    ["tomorrow.", 1800],
    ["So,", 500],
    ["fellow", 1500],
    ["hackers,", 2000],
    ["gear", 500],
    ["up,", 50],
    ["plug", 1500],
    ["in,", 500],
    ["and", 500],
    ["let", 500],
    ["the", 500],
    ["revolution", 3000],
    ["begin.", 2000],
    ["Welcome", 1500],
    ["to", 500],
    ["the", 100],
    ["Oracle,", 2000],
    ["where", 1000],
    ["freedom", 1500],
    ["reigns", 1000],
    ["supreme", 1000],
    ["in", 500],
    ["the", 500],
    ["digital", 2000],
    ["age", 9000],
    ["", 0],
  ];
  const [timeout, setTimeOut] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [textValueIndex, setTextValueIndex] = useState(0);
  const lenOfText = dataValue.length;
  const [lastEleReached, setLastEleReached] = useState(0);
  const lastEle = dataValue[lenOfText - 2][0].valueOf('age');

  useEffect(() => {
    setTimeout(() => {
      if (textValueIndex !== lenOfText - 1) {
        if (dataValue[textValueIndex][0].valueOf(0) === lastEle) {
          setLastEleReached(!lastEleReached);
          console.log(';hi')
        }

        // setTimeOut(() => 0);
        setTimeOut(() => dataValue[textValueIndex][1] - 950);
        setTextValue(
          (prevText) => prevText + dataValue[textValueIndex][0].valueOf(0) + " "
        ); 

        setTextValueIndex((prevIndex) => prevIndex + 1);
      }
    }, timeout);
  }, [textValueIndex, dataValue]);
  return (
    <>
      <p>
        {textValue}
        <div className="text-control-parent">
          {!lastEleReached ? (
            <div className="text-control">|</div>
          ) : undefined}
        </div>
      </p>
      {lastEleReached ? (
        <input value={lastEleReached} onChange={functionCaller(lastEleReached)} />
      ) : undefined}
    </>
  );
}
