import directives from './directives'
import filters from './filters'

export default {
    install(Vue){
        Vue.directive("preload",directives.preload);
        Vue.filter("getSource",filters.getSource);
    }
}