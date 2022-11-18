const [billAmt,setBillAmt] = useState(0);
const [showBillAmtError,setShowBillAmtError] = useState(false);
const [peeps,setPeeps] = useState(0);
const [showPeepsError,setShowPeepsError] = useState(false);
const [iSTipSelected,setIsTipSelected] = useState(false);
const [selectedTip,setSelectedTip] = useState(0);
const [calculatedTip,setCalculatedTip]= useState(0);
const [calculatedTotal,setCalculatedTotal]= useState(0);

function calculateTip(){
  setCalculatedTip(billAmt * selectedTip);
  console.log(calculatedTip)
}

function handleBillAmtInput(e){
  const input = e.target.value;
  // const pattern = /^[0-9]+\.?[0-9]*$/;
  // if(pattern.test(input)){
  //   setShowBillAmtError(false);
  //   setBillAmt(input);
  // }else{
  //   setShowBillAmtError(true)
  // }
  setBillAmt(input);
  calculateTip();
}
function handleSelectedTip(e){
  setSelectedTip(e.target.value);
}

function handlePeepsInput(e){
  const input = e.target.value;
    // const pattern = /^[0-9]$/;
    // if(pattern.test(input)){
    //   setShowPeepsError(false);
    //   setPeeps(input);
    // }else{
    //   setShowPeepsError(true)
    // }
    setPeeps(input);
  }