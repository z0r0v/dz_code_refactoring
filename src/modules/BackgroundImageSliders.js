/**
 * class Sliders
 *
 */
class BackgroundImageSliders {
    /**
     *
     * @param { string } selector
     */
    constructor(selector, timeInterval) {
        this.selector = document.querySelector(selector);
        this.timeInterval = timeInterval;
    }

    init() {
        const self = this;
        this.getRenderInterval(self.render.bind(self));
    }

    /**
     *
     * @param { function } render
     */
    getRenderInterval(render) {
        let i = 0;
        const self = this;

        setInterval(
            function () {
                i++;
                i < 6 ? render(i) : i = 0;
            }, self.timeInterval
        );
    }

    /**
     *
     * @param { number } i
     */
    render(i) {
        this.selector.classList = '';
        this.selector.classList = this.getClassName(i);
    }

    /**
     *
     * @param { number } i
     * @returns { string }
     */
    getClassName(i) {
        return `slide${i}`;
    }
}

export { BackgroundImageSliders };
