const HEIGHT_SCALE = 12

export const goToSection = (e, value) => {
  e.preventDefault()
  const element = document.getElementById(value || e.target.value)
  const heigth = element.clientHeight / HEIGHT_SCALE
  const scrollTo = element.offsetTop - heigth
  window.scrollTo({ top: scrollTo, behavior: 'smooth' })
}
