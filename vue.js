var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operator: '+',
        operator: '-',
        operator: '*',
        operator: '/',

    },
    computed: {
        result () {
            return eval(this.a + this.operator + this.b);
        }
    }
    
})