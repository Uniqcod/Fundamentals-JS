function passValidator(pass) {

    function lengthPass(pass) {
        let length = pass.length;
        if (length >= 6 && length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkAlfanumeric(pass) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function consistLeatsTwoDig(pass) {
        let pattern = /[0-9]{2,}/

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    const isValidLength = lengthPass(pass);
    const isAlfanumeric = checkAlfanumeric(pass);
    const isConsistTwoDig = consistLeatsTwoDig(pass);

    if (isValidLength && isAlfanumeric && isConsistTwoDig) {
        console.log("Password is valid");
    }

}
passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');
