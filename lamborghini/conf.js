exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

   /* globalTimeout: 3000000,
    pageTimeout: 30000000,
    allScriptsTimeout: 30000000,*/

    specs: [
        'lambo_tests/test_price.js'
    ],

  
};