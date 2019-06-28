import moment from 'moment';


const number = document.querySelector('.number')
const up = document.querySelector('.countUp')
const down = document.querySelector('.countDown')
const countReset = document.querySelector('.countReset')
const date = document.querySelector('.date')


date.innerHTML = `Today is ${moment().format('dddd')}`
const countFn = {
    num :0,
    countUp: function(){
        this.num = this.num +1;
    },
    countDown: function(){
        this.num = this.num -1;
    },

    countReset: function(){
        this.num = 0;
    },
    

    getnum : function(){
        return this.num;
    }

}

function setNum(){
    number.innerHTML = countFn.getnum()
}
setNum()


up.addEventListener('click',function(){
    countFn.countUp();
    setNum()
})

down.addEventListener('click',function(){
    countFn.countDown();
    setNum()
})

countReset.addEventListener('click',function(){
    countFn.countReset();
    setNum()
})


