new Vue({
    el:'#vue-app',
    data:{

        /////assigning default values to data
        hours:0,
        extrahours:0,
        price:500,
        earn: 0,
        error: false

    },
    methods:{
        calculateSalary(){
            // Calculate the Employee Earning without extra Hours

            if(this.extrahours == 0){
                this.earn = parseInt(this.hours) * parseInt(this.price)
            }

            // Calculate the Employee Earning witho extra Hours
            if(this.extrahours > 0){
                var totalHours = parseInt(this.hours) + parseInt(this.extrahours)
                this.earn =  totalHours * this.price
            }
        },
        validateInput(){
            if(this.hours < 0){
                console.log('tag', '')
            }
        }
    }
});