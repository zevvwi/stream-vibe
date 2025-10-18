class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
  }

  stateClasses = {
    isLock: 'is-lock',
    isActive: 'is-active'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvent()
  }

  onBurgerButtonClick = () => {
    this.dialogElement.toggleAttribute('open')
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive,
      this.dialogElement.hasAttribute('open')
    )
    document.documentElement.classList.toggle(this.stateClasses.isLock,
      this.dialogElement.hasAttribute('open')
    )
  }

  bindEvent() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default OverlayMenu