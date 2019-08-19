function validateString(str) {
    if (str.toLowerCase().indexOf('superman') < 0) {
        throw new Error('String does not contain superman');
    }    
} 