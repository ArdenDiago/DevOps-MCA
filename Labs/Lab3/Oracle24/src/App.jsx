import Second from "./Component/Second";
import { useState, useEffect } from "react";
import "./Component/Background2.css";
import "./Component/Name.css";
import "./Component/Conformation.css";

import Line from "./Component/Line/Line";
import Synopsis from "./Component/Synopsis/Synopsis";

import image from "./assets/Images/Logo/DeptLogo.svg";
import audioFile from "./assets/Audio/BGSound.mp3";
import declare from "./assets/Audio/Declare.mp3";

function App() {
  const [page, setPage] = useState(0);
  function myFunction() {
    setTimeout(() => {
      setPage(() => !page);
    }, 1000);
  }
  // -------------------------------

  function Background() {
    // Setting States for Controling the Behavior
    const [command, setCommand] = useState("");
    const [enterValue, setEnter] = useState(0);
    const [lengthTargetFulfilled, setLengthTargetFulfilled] = useState(0);

    // data

    // Second
    const [parentName, setChangeParent] = useState(0);
    let x = "Name";

    // Third
    const [keyValue, setKeyValue] = useState("");
    const [enterValueFinal, setEnterValueFinal] = useState(0);
    const [change, setChange] = useState(0);

    // First
    // Controlling the key function
    useEffect(() => {
      document.addEventListener("keydown", detectKeyDown, true);
    }, []);

    const detectKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setCommand(() => "");
      } else if (e.key === "ArrowUp") {
        setCommand(() => "man oracle");
      } else if (e.key === "Enter") {
        setEnter(() => !enterValue);
        if ((command === "man oracle") & enterValue) {
          setTimeout(() => {
            setCommand("");
            setEnter(0);
          }, 1000);
        }
      }
    };
    // second

    // Third
    // if (textValueIndex === lenOfText && !lengthTargetFulfilled) {
    // setLengthTargetFulfilled(() => !lengthTargetFulfilled);
    // }

    useEffect(() => {
      document.addEventListener("keypress", detectKey, true);
    });
    const detectKey = (e) => {
      const eKey = e.key;
      if (eKey !== "Enter") {
        setKeyValue(() => eKey);
      } else {
        setEnterValueFinal(() => !enterValueFinal);
        setValueChange();
      }
    };

    function setValueChange() {
      if ((enterValueFinal && keyValue === "Y") || keyValue === "y") {
        setChange(() => !change);
      }
    }
    function parentClass() {
      setTimeout(() => {
        setChangeParent(1);
      },1000);
    }
    return (
      <>
        <div className="master-div">
          <div className="header-nav">
            <div className="header-nav-img">
              <img src={image} />
            </div>
            <div className="header-nav-text">
              <h1>Pegasus@localhost</h1>
            </div>
            <div className="header-nav-buttons">
              <div className="header-nav-buttons-align">
                <div className="header-nav-buttons-buttons">
                  <div className="circle-r">
                    <span>-</span>
                  </div>
                  <div className="circle-g">
                    <span>X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myTer">
            {!enterValueFinal ? (
              <Line intruction={command} />
            ) : (
              <div className="background-width">
                <div className="header-name">
                  <div className="header-command-name header-command-name-left"></div>
                  <div className="header-command-name">
                    <p></p>
                  </div>

                  <div className="header-command-name left"></div>
                </div>
                <div>
                  <div className="Name">SYNOPSIS</div>
                  <div className="ls">
                    <audio src={audioFile} autoPlay></audio>
                    <Synopsis
                      lengthTargetFulfilled={lengthTargetFulfilled}
                      functionCaller={() => parentClass()}
                    />
                  </div>
                </div>
                <div className="permission-declare">
                  {parentName ? (
                    <p>
                      <audio src={declare} autoPlay />
                      :Declare Oracle Open: y/n: {keyValue}
                      <div className="text-control">|</div>
                    </p>
                  ) : undefined}
                </div>

                {((enterValueFinal && keyValue === "Y") || keyValue === "y") &&
                  myFunction()}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // ------------------------------------------
  return <>{!page ? <Background /> : <Second />}</>;
}

export default App;
