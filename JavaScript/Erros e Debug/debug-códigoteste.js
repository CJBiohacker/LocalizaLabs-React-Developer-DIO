class App {
    constructor() {
        this.bind();
    }

    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

        document.querySelector('sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }

    handleClick(val) {
        const counterEl = document.querySelector('.counter');
        const value = parseInt(counterEl.innerText);

        counterEl.innerText = value + val;
    }
}

new App();