import { parsePhoneNumberFromString } from 'libphonenumber-js'

const phoneNumber = parsePhoneNumberFromString('+12133734253')

phoneNumber.format("NATIONAL") === '(213) 373-4253'
phoneNumber.format("INTERNATIONAL") === '+1 213 373 4253'
phoneNumber.format("RFC3966") === 'tel:+12133734253'

// Aliases
phoneNumber.formatNational() === phoneNumber.format("NATIONAL")
phoneNumber.formatInternational() === phoneNumber.format("
