new Vue({
    el:'#vue-app',
    data:{

        /////assigning default values to data
        hours:0,
        extrahours:0,
        price:1000,
        extraPrice: 200,
        earn: 0,
        xearn : 0,
        tearn: 0,
        error: false

    },
    methods:{
        calculateSalary(){
            // Calculate the Employee Earning without extra Hours

            if(this.extrahours == 0){
                this.earn = parseInt(this.hours) * parseInt(this.price)
                this.tearn = parseInt(this.hours) * parseInt(this.price)
            }

            // Calculate the Employee Earning witho extra Hours
            if(this.extrahours > 0){
                var normalHours = parseInt(this.hours) * parseInt(this.price)
                var extraHours = parseInt(this.extrahours) * parseInt(this.extraPrice)
                this.xearn = extraHours
                this.earn =  normalHours
                this.tearn = normalHours + extraHours
            }
        },

    }
});