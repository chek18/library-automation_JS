export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    
    //creat a function that can verify expected and actual messeges are equal using promice
    static async verifyMessages(expectedMessage, actualMessage) {
        return new Promise((resolve) => {
           
                resolve(expectedMessage.toString()===actualMessage.toString);
                   });
    } 


}