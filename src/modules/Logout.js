class Logout {
    constructor() {
        this.selectors = {
            inputLoginSelector: document.getElementById("example-input-login"),
            inputPasswordSelector: document.getElementById("exampleInputPassword"),
            topNavigationPanelSelector: document.querySelector(".top-navigation-panel"),
            containerLoginSelector: document.querySelector(".login"),
            masterInfoSelector: document.querySelector(".masterInfo"),
            executedOrderTrSelector: document.querySelector(".executedOrder > tr"),
            buttonLogoutSelector: document.querySelector(".logOut")
        }
    }

    init() {
        const self = this;
        this.selectors.buttonLogoutSelector.addEventListener("click", this.logoutClickHandler.bind(self));
    }

    logoutClickHandler() {
        const { inputLoginSelector, inputPasswordSelector, topNavigationPanelSelector, containerLoginSelector, masterInfoSelector, executedOrderTrSelector} = this.selectors;

        //to do state add isLogged = false;

        this.showHtmlElement(containerLoginSelector);

        this.hideHtmlElement(masterInfoSelector);
        this.hideHtmlElement(topNavigationPanelSelector);

        this.resetInput(inputPasswordSelector, "Enter you password");
        this.resetInput(inputLoginSelector, "Enter you loggin");

        executedOrderTrSelector.innerText = null;
    }

    hideHtmlElement(htmlElement){
        htmlElement.classList.add('hidden');
    }

    showHtmlElement(htmlElement){
        htmlElement.classList.remove('hidden');
    }

    resetInput(arraySelectors, placeholderText) {
        arraySelectors.value = null;
        arraySelectors.placeholder = placeholderText;
    }
}

export { Logout }