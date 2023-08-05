const options = document.getElementsByName("option");

options.forEach((option) => {
  option.addEventListener("change", (event) => {
    console.log(`Selected option: ${event.target.value}`);
  });
});


const metric = document.getElementById('metric');
const imperial = document.getElementById('imperial');
const imperialhidden = document.getElementById('height-in');
const submitBtn = document.getElementById('submit-Btn')
const bmiEl = document.getElementById('bmi-el')
const labelCm = document.getElementById('label-cm');
const labelKg = document.getElementById('label-kg');
const heightCm = document.getElementById('height-cm');
const weightKg = document.getElementById('weight-kg');
const bmiForm = document.getElementById('bmi-form');


heightCm.addEventListener('focus', function() {
  this.placeholder = '';
});

weightKg.addEventListener('focus', function() {
  this.placeholder = '';
});





metric.addEventListener('click', function(){
    imperialhidden.style.display = 'none';
    labelCm.textContent = 'cm';
    labelKg.textContent = 'kg';
    heightCm.id = 'height-cm';
    weightKg.id = 'weight-kg';
    
    
    

    
})

imperial.addEventListener('click', function(){
  imperialhidden.style.display = 'inline-block'
  labelCm.textContent = 'ft';
  labelKg.textContent = 'lbs';
  heightCm.id = 'height-ft';
  weightKg.id = 'weight-lbs';
  document.getElementById('bmi-form').reset();
  
  
})

const heightFt = document.getElementById('height-ft');
const weightLbs = document.getElementById('weight-lbs');


// if (metric.checked) {
//   bmiForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     const cmInput = heightCm.value;
//     const kgInput = weightKg.value;
//     const bmi = kgInput / (cmInput / 100 * cmInput / 100);
//     const bmiRounded = bmi.toFixed(2);
//     alert(`Your BMI is ${bmiRounded}`);
//   })
// } else if (imperial.checked) {
//   bmiForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     const ftInput = heightFt.value;
//     const lbsInput = weightLbs.value;
//     const bmi = lbsInput / (ftInput * ftInput) * 703;
//     const bmiRounded = bmi.toFixed(2);
//     alert(`Your BMI is ${bmiRounded}`);
//   })
// }



bmiForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (metric.checked) {
    const cmInput = parseFloat(document.getElementById('height-cm').value);
    const kgInput = parseFloat(document.getElementById('weight-kg').value);
    const bmi = kgInput / (cmInput / 100 * cmInput / 100);
    const bmiRounded = bmi.toFixed(2);
    bmiEl.textContent = bmiRounded;
  } else if (imperial.checked) {
    const ftInput = parseFloat(document.getElementById('height-ft').value);
    const lbsInput = parseFloat(document.getElementById('weight-lbs').value);
    const bmi = lbsInput / (ftInput * ftInput) * 703;
    const bmiRounded = bmi.toFixed(2);
    alert(`Your BMI is ${bmiRounded}`);
  }
});


