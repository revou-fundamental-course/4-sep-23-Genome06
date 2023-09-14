document.addEventListener('DOMContentLoaded', function () {
    const sideInput = document.getElementById('side');
    const calculateAreaButton = document.getElementById('calculateArea');
    const calculatePerimeterButton = document.getElementById('calculatePerimeter');
    const resetButton = document.getElementById('reset');
    const resultArea = document.getElementById('resultArea');
    const resultPerimeter = document.getElementById('resultPerimeter');

    calculateAreaButton.addEventListener('click', function () {
        const side = parseFloat(sideInput.value);
        if (!isNaN(side) && side > 0) {
            const area = side * side;
            resultArea.textContent = 'Luas: ' + area;
        } else {
            resultArea.textContent = 'Masukkan angka positif!';
        }
    });

    calculatePerimeterButton.addEventListener('click', function () {
        const side = parseFloat(sideInput.value);
        if (!isNaN(side) && side > 0) {
            const perimeter = 4 * side;
            resultPerimeter.textContent = 'Keliling: ' + perimeter;
        } else {
            resultPerimeter.textContent = 'Masukkan angka positif!';
        }
    });

    resetButton.addEventListener('click', function () {
        sideInput.value = ''; // Menghapus nilai dari input sisi
        resultArea.textContent = 'Luas:'; // Menghapus teks hasil luas
        resultPerimeter.textContent = 'Keliling:'; // Menghapus teks hasil keliling
    });
});
