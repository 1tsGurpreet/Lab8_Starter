// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// TESTS FOR VALID PHONE NUMBERS

test('Checks Gurpreets phone number', () => {
    expect(functions.isPhoneNumber('818-310-0377')).toBe(true);
});
test('Checks Random phone number', () => {
    expect(functions.isPhoneNumber('815-924-6095')).toBe(true);
});
test('Checks Random number', () => {
    expect(functions.isPhoneNumber('21312312312231')).toBe(false);
});
test('Checks birthday', () => {
    expect(functions.isPhoneNumber('10/23/2000')).toBe(false);
});

// TESTS FOR EMAIL
test('Checks Gurpreets email', () => {
    expect(functions.isEmail('g6singh@ucsd.edu')).toBe(true);
});
test('Checks Professor Powell\'s email', () => {
    expect(functions.isEmail('tpowell2@ucsd.edu')).toBe(true);
});
test('Checks random characters', () => {
    expect(functions.isEmail('dawoimdpaowkdpoawkd@odiamwd')).toBe(false);
});
test('Checks backwards email', () => {
    expect(functions.isEmail('ude.dscu@hgnis6g')).toBe(false);
});

// TESTING PASSWORDS
test('Checks Gurpreets email\'s password (jk)', () => {
    expect(functions.isStrongPassword('potato')).toBe(true);
});
test('Checks random characters', () => {
    expect(functions.isStrongPassword('wiith2342on')).toBe(true);
});
test('Checks very simple password', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('Checks single character', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

// TESTING DATES
test('Checks Gurpreet\'s birthday', () => {
    expect(functions.isDate('10/23/2000')).toBe(true);
});
test('Checking todays date', () => {
    expect(functions.isDate('11/11/2021')).toBe(true);
});
test('Checking random numbers', () => {
    expect(functions.isDate('103129310293j11')).toBe(false);
});
test('Checking date with no format', () => {
    expect(functions.isDate('5-5-2021')).toBe(false);
});

// TESTING HEX COLORS
test('Checks Gurpreet\'s favorite color', () => {
    expect(functions.isHexColor('#2596be')).toBe(true);
});
test('Checks Gurpreet\'s favorite pokemon\'s color', () => {
    expect(functions.isHexColor('#77a6b8')).toBe(true);
});
test('Checking invalid format', () => {
    expect(functions.isHexColor('#77a6b812312')).toBe(false);
});
test('Checking random numbers', () => {
    expect(functions.isHexColor('#1231231')).toBe(false);
});






