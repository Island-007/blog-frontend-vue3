export default {
  mounted(el:HTMLElement,binding:any) {
    el.addEventListener('click',() => {
      el.style.backgroundColor = binding.value
    })
    console.log(el,binding)
  }
}