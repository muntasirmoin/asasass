{
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;  //ei variable shudu ei class er modhe available
        protected _balance: number; //ei class & child class ea available but instance ea noy


        constructor(id: number, name: string, _balace: number) {
            this.id = id;
            this.name = name;
            this._balance = _balace;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance = this._balance;
        }
    }


    const goribManusherAccount = new BankAccount(111, 'Muntasir', 20);
    goribManusherAccount.addDeposit(0);

    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);


}