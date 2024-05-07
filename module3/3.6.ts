{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;  //ei variable shudu ei class er modhe available
        protected _balance: number; //ei class & child class ea available but instance ea noy


        constructor(id: number, name: string, _balace: number){
            this.id = id;
            this.name = name;
            this._balance = _balace;
        }


        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance(){
            return this._balance;
        }

    //    private getBalance() {
    //         return this._balance;
    //     }

       

    }


    const goribManusherAccount =  new BankAccount( 111,'Muntasir', 20);
    //     goribManusherAccount.addDeposit(20);   //function call kore
    goribManusherAccount.deposit = 50;
   

    const myBalance = goribManusherAccount.balance; //get ke property moto kore call korte hoy

    console.log(myBalance);
}