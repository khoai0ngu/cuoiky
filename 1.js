document.addEventListener('DOMContentLoaded', function() {
    const supportMenu = document.querySelector('.support-menu');
    const moreMenu = document.querySelector('.more-menu');
    const currencyMenu = document.querySelector('.currency-menu');

    supportMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    moreMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    currencyMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!supportMenu.contains(event.target)) {
            supportMenu.classList.remove('active');
        }
        if (!moreMenu.contains(event.target)) {
            moreMenu.classList.remove('active');
        }
        if (!currencyMenu.contains(event.target)) {
            currencyMenu.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputContainer = document.querySelector('.input-container');
    const input = inputContainer.querySelector('input');
    const dropdown = inputContainer.querySelector('.dropdown-list');

    // Xử lý sự kiện click vào input-container
    inputContainer.addEventListener('click', function() {
        // Hiển thị hoặc ẩn danh sách dropdown
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });

    // Đóng dropdown nếu click bên ngoài
    document.addEventListener('click', function(e) {
        if (!inputContainer.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Xử lý chọn item trong dropdown
    dropdown.querySelectorAll('td').forEach(function(item) {
        item.addEventListener('click', function() {
            input.value = item.textContent.trim();
            dropdown.style.display = 'none';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const checkInTimeInput = document.getElementById('check-in-time');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    checkInTimeInput.value = currentDateTime;
});