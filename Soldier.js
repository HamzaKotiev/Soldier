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
        if(this.supplies > 1){
            this.weapon.cartridges = 30
            this.supplies -=1
            text = 'перезарядка...'
        }else if(this.supplies = 1){
            this.weapon.cartridges = 30
            this.supplies -=1
            text = 'перезарядка...успешна, но припасов больше нет '
        }else if(this.supplies <=0){
            text = 'Припасов НЕТ... '
        }
    },
    reload(){
        let text ;
        if(this.health > 1){
            this.health -= 1
            text = 'Ай в ноге больно!'
        }else if(this.health = 1){
            this.health -= 1
            text = 'Осторожне!! В гроб захотел '
        }else if(this.health <= 0){
            text = 'Ха пакойничек. Валел хьйн хачи эйла!!'
        }
        
    },


































}