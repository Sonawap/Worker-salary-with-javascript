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
            // Calculate the Employee Earning witho extra Hours
            if(this.hours < 0){
                this.error = true;
            }
            if(this.hours < 5 ){
                var normalHours = parseInt(this.hours) * parseInt(this.price)
                var extraHours = parseInt(this.extrahours) * parseInt(this.extraPrice)
                this.xearn = extraHours
                this.earn =  normalHours
                this.tearn = normalHours + extraHours
            }

            if(this.hours > 4){
                this.extrahours = this.hours - 4
                var normalHours = parseInt(this.hours) * parseInt(this.price)
                var extraHours = parseInt(this.extrahours) * parseInt(this.extraPrice)
                this.xearn = extraHours
                this.earn =  normalHours
                this.tearn = normalHours + extraHours
                
            }
        },

    }
});