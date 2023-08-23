const pos = document.querySelectorAll('.pos');
const body = document.querySelector('body');
const p = document.getElementById('p');
body.addEventListener('mousemove', updatePos, false);
body.addEventListener('touchmove', updatePos);

function updatePos(event) {
    const height = window.innerHeight;
    const width = window.innerWidth;
    let x,
        y,
        blur,
        dark,
        blurFactor = 0;
    if (event.type == 'touchmove') {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else if (event.type == 'mousemove') {
        x = event.pageX;
        y = event.pageY;
    }
    let ver = ((-(height / 2 - y) / height) * height) / 10;
    let hor = ((-(width / 2 - x) / width) * width) / 10;
    let top = ver - height / 10;
    let left = hor - width / 10;
    const blurY = y / height;
    pos.forEach((el, index) => {
        el.style.left = (1 - 0.1 * index) * left + 'px';
        el.style.top = (0.7 + 0.1 * index) * top + 'px';
        blurFactor = Math.abs(-0.2 * index + blurY);
        blur = blurFactor * 3;
        dark = 100 - blurFactor * 50;
        el.style.filter = 'blur(' + blur + 'px) brightness(' + dark + '%)';
    });
    p.style.left = 0.4 * width + 0.1 * left + 'px';
    p.style.top = 0.55 * height + top + 'px';
}
