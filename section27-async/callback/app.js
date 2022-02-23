setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
}, 2000)

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow';
}, 3000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


delayedColorChange(randomColor(), 1000, () => {
    delayedColorChange(randomColor(), 1000, () => {
        delayedColorChange(randomColor(), 1000, () => {
            delayedColorChange(randomColor(), 1000, () => {
                delayedColorChange(randomColor(), 1000, () => {
                    delayedColorChange(randomColor(), 1000, () => {
                        delayedColorChange(randomColor(), 1000, () => {
                            delayedColorChange(randomColor(), 1000, () => {

                            })
                        })
                    })
                })
            })
        })
    })
})