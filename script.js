const options = document.getElementsByName("option");

options.forEach((option) => {
  option.addEventListener("change", (event) => {
    console.log(`Selected option: ${event.target.value}`);
  });
});


const metric = document.getElementById('metric');
const imperial = document.getElementById('imperial');
const imperialhidden = document.getElementById('input-hidden');
const submitBtn = document.getElementById('submit-form')



metric.addEventListener('click', function(){
    imperialhidden.style.display = 'none';
    console.log('metric clicked')
    console.log(heightCm);
})

imperial.addEventListener('click', function(){
  imperialhidden.style.display = 'inline-block'
})


submitBtn.addEventListener('submit', function(){
  console.log('submitted')
})