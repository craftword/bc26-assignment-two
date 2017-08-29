class MobilePhones  {
    constructor(IMEICode, OS, SIMCard) {
        
        // If it is, use it to initialize "this" Phone
        this._IMEICode = IMEICode;
        this._SIMCard = SIMCard;
        this._OS = OS;

        this.Dial = () => {
            // Dialing numbers 
            // ...
            if(this._SIMCard >= 2) {
                return 'Choice the network you want to use to call';
            }else {
                return 'Dial the numbers .......';
            }
        };

        this.Receive = () => {
            // Receive a call
            // ...
            return 'Receiving a call';
        };
        this.SendMessage = () => {
            // Send an SMS 
            // ...
            return 'sending a message';
        };
    

    }
   
}
// child class 
class Samsung extends MobilePhones {
    constructor(IMEICode, OS, SIMCard) {
        super(IMEICode, OS, SIMCard);
        this.screenRotation = (arg) => {
            if(arg == "vertical") {
                return "rotate horizontal";
            }else {
                return 'rotate vertical';            
            }
           
        };
        this.Receive = () => {     //overiding method
            return 'Press any Key to recieve call'; 
        };          
    }
    

}



export {MobilePhones, Samsung };