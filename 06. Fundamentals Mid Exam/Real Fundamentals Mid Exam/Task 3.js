function chatLogger (arr){

    let messageArr = [];

    for(const command of arr){
        let token = command.split(' ');
        let action = token.shift();
        let message = token.join(' ');
        // let [action, ...args] = command.split(" ");
        
        if(action === `Chat`){
            // let message = message.join(' ');
            messageArr.push(message);

        }else if (action === `Delete`){
            let message = args.join(' ');
            let index = messageArr.indexOf(message);
            if(index !== -1){
                messageArr.splice(index, 1);
            }
        }else if(action === `Edit`){
            message.split(' ');
            let oldMessage = message.shift();
            let newMessage = message.shift();
            // let oldMessage = args[0];
            // let newMessage = args.slice(1).join(' ');
            let index = messageArr.indexOf(oldMessage);
            if(index !== -1){
                messageArr.splice(index, 1, newMessage);
            }
        }else if(action === `Pin`){
            let message = args.join(' ');
            let index = messageArr.indexOf(message);
            if(index !== -1){
                messageArr.splice(index, 1);
                messageArr.push(message);
            }
        }else if(action === `Spam`){
            messageArr.push(...args);
        }else if(action === `end`){
            break;
        }
    }
    console.log(messageArr.join(`\n`));
}
chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);

// chatLogger(["Chat Hello",
//      "Delete John",
//      "Pin Hello",
//      "end"]);

// chatLogger(["Chat John",
//     "Spam Let's go to the zoo",
//     "Edit zoo cinema",
//     "Chat tonight",
//     "Pin John",
//     "end"]);