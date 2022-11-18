import dollarIcon from'../images/icon-dollar.svg';
import personIcon from'../images/icon-person.svg';
function Form({bill , tip, setTip, setBill , people , setPeople}) {
  
    const handleSelectedTip = (e) => {
        setTip(+e.target.value)
    }
    return (
    <div className="form">
        <div className="label-group">
            <div className="label-wrapper">
            <label className="label" htmlFor="bill">Bill</label>
           {/* <p className="error">{
                !showBillAmtError ? "Please enter numbers only" : ""
           }</p> */}
           </div>
           <div className="number-wrapper">
           <input 
           onInput={(e) => setBill(+e.target.value)}
           type="number" 
           className="number-input" 
           id="bill"
           value={bill}
           />
           <img 
            src={dollarIcon} 
            aria-hidden="true" 
            className="icon" 
            />
           </div>
    </div>

        <div className="tip-section">
            <p className="label">Selected Tip %</p>
            <div className="tip-amount-wrapper">
        <div className="tip-amount">
           <input 
           type="radio" 
           className="tip-input" 
           onInput={handleSelectedTip} 
           name="tip" 
           id="input1" 
           value="5"/>
           <label 
           className="tip-btn" 
           htmlFor="input1"
           >5%
           </label>
           </div>
           <div className="tip-amount">
           <input 
           type="radio" 
           className="tip-input" 
           onInput={handleSelectedTip} 
           name="tip" 
           id="input2" 
           value="10"/>
           <label className="tip-btn" htmlFor="input2">10%</label>
           </div>
           <div className="tip-amount">
           <input 
           type="radio" 
           className="tip-input" 
           onInput={handleSelectedTip} 
           name="tip" 
           id="input3" 
           value="15"/>
           <label className="tip-btn" htmlFor="input3">15%</label>
           </div>
           <div className="tip-amount">
           <input 
           type="radio" 
           className="tip-input" 
           onInput={handleSelectedTip} 
           name="tip" 
           id="input4" 
           value="25"/>
           <label className="tip-btn" htmlFor="input4">25%</label>
           </div>
           <div className="tip-amount">
           <input 
           type="radio" 
           className="tip-input" 
           onInput={handleSelectedTip} 
           name="tip" 
           id="input5" 
           value="50"/>
           <label className="tip-btn" htmlFor="input5">50%</label>
           </div>
          <div className="custom-wrapper">
          <input 
          id="custom"
          type="number" 
          onInput={handleSelectedTip} 
          name="tip" 
          placeholder="Custom"
          className="number-input tip-custom"/>
          <label htmlFor="custom" className="tip-custom-label">Custom</label>
          </div>
           </div>
        </div>

    <div className="label-group">
        <div className="label-wrapper">
            <label className="label" htmlFor="people">Number of People</label>
            <p className="error">{
                people === 0 ? "Can't be zero" : ""
           }</p>
            </div>
            <div className="number-wrapper">
            <input 
            onInput={(e) => setPeople(+e.target.value)}
            type="number" 
            className={`number-input ${people === 0 ? 'number-error' : ""}`} 
            id="people"
            value={people}
            />
            <img 
            src={personIcon}
            aria-hidden="true"
            className="icon"
            />
            </div>
        </div>
    </div>
  )
}

export default Form;