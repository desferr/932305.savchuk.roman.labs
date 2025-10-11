function create(shape) {
    const canvas = document.getElementById('canvas');
    const canvasRect = canvas.getBoundingClientRect();
    const amount = document.getElementById('amount');
    if (shape == 'square') {
        for (let i = 0; i < parseInt(amount.value); i++) {
            const figure = document.createElement('div');
            figure.className = "square";
            let size = Math.floor(Math.random() * 400) + 1;
            figure.style.position = "absolute";
            figure.style.width = figure.style.height = size + "px";
            figure.style.top = Math.floor(Math.random() * (canvasRect.height - size)) + "px";
            figure.style.left = Math.floor(Math.random() * (canvasRect.width - size)) + "px";
            figure.style.backgroundColor = "rgba(224, 11, 11, 0.8)";
            figure.style.border = "1px solid black";
            canvas.appendChild(figure);
            figure.addEventListener('dblclick', function(event) {
                if (event.target === this) {
                    this.remove();
                }
            });
        }
    }
    if (shape == 'triangle') {
        for (let i = 0; i < parseInt(amount.value); i++) {
            const figure = document.createElement('div');
            figure.className = "triangle";
            let size = Math.floor(Math.random() * 400) + 1;
            figure.style.position = "absolute";
            figure.style.width = figure.style.height = "0";
            figure.style.top = Math.floor(Math.random() * (canvasRect.height - size)) + "px";
            figure.style.left = Math.floor(Math.random() * (canvasRect.width - size)) + "px";
            figure.style.borderBottom = size + "px solid rgba(6, 23, 121, 0.8)";
            figure.style.borderLeft = size / 2 + "px solid transparent";
            figure.style.borderRight = size / 2 + "px solid transparent";
            canvas.appendChild(figure);
            figure.addEventListener('dblclick', function(event) {
                if (event.target === this) {
                    this.remove();
                }
            });
        }
    }
    if (shape == 'circle') {
        for (let i = 0; i < parseInt(amount.value); i++) {
            const figure = document.createElement('div');
            figure.className = "circle";
            let size = Math.floor(Math.random() * 400) + 1;
            figure.style.position = "absolute";
            figure.style.width = figure.style.height = size + "px";
            figure.style.top = Math.floor(Math.random() * (canvasRect.height - size)) + "px";
            figure.style.left = Math.floor(Math.random() * (canvasRect.width - size)) + "px";
            figure.style.backgroundColor = "rgba(7, 122, 7, 0.8)";
            figure.style.border = "1px solid black";
            figure.style.borderTopLeftRadius = figure.style.borderTopRightRadius = figure.style.borderBottomLeftRadius = figure.style.borderBottomRightRadius = size / 2 + "px";
            canvas.appendChild(figure);
            figure.addEventListener('dblclick', function(event) {
                if (event.target === this) {
                    this.remove();
                }
            });
        }
    }
}