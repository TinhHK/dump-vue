var vueInstance = new Vue({
    el: '#showtime',
    data: {
        firstname: 'Thomas',
        lastname: 'Anderson',
        address: 'Hanoi'
    },
    methods: {
        mydetails: function() {
            return "I am " + this.firstname + " " + this.lastname;
        }
    }
});