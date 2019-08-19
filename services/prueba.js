'use strict';

const parser = require('libphonenumber-js').parsePhoneNumberFromString;

const validar = function (num) {
    try {
        const phoneNumber = parser(num,'US');
            if (phoneNumber) {
                return true;   
            }
    } 
    catch (error) {
        if (error instanceof ParseError) {
            console.log(error.message)
          } else {
            throw error
          } 
    }
}
module.exports = {
    validar
}