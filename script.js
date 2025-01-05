function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    let bmr = 0;
    if (gender==='male'){
        bmr=88.362+(13.397*weight)+(4.799*height)-(5.677*age);
    }else if(gender==='female'){
        bmr=447.593+(9.247*weight)+(3.098*height)-(4.330*age);
    }
    const resultElement = document.getElementById('result');
    const bmrValueElement = document.getElementById('bmrValue');
    bmrValueElement.textContent = bmr.toFixed(2);
    resultElement.classList.remove('hidden');
}
function calculatePowerOutput(){
    const massFlowRate =parseFloat(document.getElementById('massFlowRate').value);
    const enthalpy1 = parseFloat(document.getElementById('enthalpy1').value)
    const enthalpy2 = parseFloat(document.getElementById('enthalpy2').value)
    if (isNaN(massFlowRate) || massFlowRate <= 0){
        alert('กรอกอัตราการไหลน้ำ');
        return;
    }
    if (isNaN(enthalpy1) || isNaN(enthalpy2)){
        alert('กรอกค่าความหนาแน่นไอน้ำ');
        return;
    }
    const powerOutput=massFlowRate*(enthalpy1 -enthalpy2)*1000;
    document.getElementById('powerOutput').value =powerOutput.toFixed(2);
}

