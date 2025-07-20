function showAboutMe() {
    document.getElementById('about-me-content').style.display = 'block';
    document.getElementById('placeholder-text').style.display = 'none';
    document.querySelector('button').style.display = 'none'; 

}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let category = '';

        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 24.9) category = 'Normal';
        else if (bmi < 29.9) category = 'Overweight';
        else category = 'Obese';

        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    } else {
        alert('Please enter valid height and weight.');
    }
}
