const crypto = require('crypto');
module.exports = {
    hmac(pwd){
        const hmac = crypto.createHmac('sha256', '1705b');

        hmac.update(pwd);

        return hmac.digest('hex')
    }
}