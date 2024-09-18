document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const overlay = document.getElementById('overlay');
    const refresh = document.getElementById('refresh');
    let clickCount = 0;

    rock.addEventListener('click', () => {
        clickCount++;
        console.log(`clickCount: ${clickCount}`);

        const crack = document.createElement('img');
        crack.src = './image/crack.png';
        crack.style.position = 'absolute';
        crack.style.height = '100px';
        crack.style.width = '100px';
        overlay.appendChild(crack);
    });

    refresh.addEventListener('click', () => {
        clickCount = 0;
        console.log(`clickCount: ${clickCount}`);
        overlay.innerHTML = '';
    });
});