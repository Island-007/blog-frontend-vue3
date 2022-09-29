import test from './test'

const directives = {
  test
} 

export default {
  install(app) {
    Object.keys(directives).forEach((key)=>{
      app.directive(key,directives[key])
    })
  }
}