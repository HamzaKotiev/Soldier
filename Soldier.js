soldier = {
    Name: 'Тигр',
    health: 10 ,
    weapon: {
        namewe: '',
        cartridges: 30,
    },
    supplies: 3,
    shoot(){
        this.weapon.cartridges -=1;
        let text ;
        if(this.weapon.cartridges > 0){
            text = 'бах-бах'
        }else if(this.weapon.cartridges <= 0){
            text = 'Перезарядись олух'
        }
        return text 
    },
    hurt(){
        let text ;
        if(this.supplies >= 1){
            this.weapon.cartridges = 30
            this.supplies -=1
            text = 'перезарядка...'
        }else if(this.supplies <= 0){
            text = 'Припасов НЕТ... '
        }
    },
    reload(){
        let text ;
        if(this.health >1){
            this.health -= 1
            text = 'Остарожне!! В гроб захотел '
        }else if(this.health <= 1){
            text = 'Ха пакойничек. ЛУЗЕР!!'

        }
        
    },


































}