function searchCar() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const carItems = document.querySelectorAll('.car-item');

    carItems.forEach(car => {
        const name = car.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            car.style.display = '';
        } else {
            car.style.display = 'none';
        }
    });
}