new Vue({
    el: '#el',
    data() {
        return {
            counter: 0,
            someText: ' '
        }
    },
    watch: {
        counter(newVal, oldVal) {
            console.log(`old value ${oldVal}, new value ${newVal}`);
        },
        someText: {
            handler: 'updateCounter',
            immediate:true
        }
    },
    methods: {
        updateCounter() {
            this.counter++;
            console.log('updated');
        }
    }
});