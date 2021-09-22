/*1. Login to your account dmytro.borodyn@aaa-gth.com
2. Theory: Особенности тестирования мобильных приложений: - Installation/Un-installation testing - Network Testing (wifi, 3g, 4g ) - Device Compatibility (should be compatible with all kind of operating systems versions and device screen resolutions) - Memory Testing etc
3. Install Charles/Fiddler https://www.charlesproxy.com/  https://www.telerik.com/fiddler
4. Read about deployments of apps (TestFlight, Firebase)
5. Postman / swagger
6. Webstorm trial version
7. Investigate project https://gitlab.com/aaa-gth/api_automation_tests
8. Basics of JS https://learn.javascript.ru/
9. Basic AWS course https://www.aws.training/Details/eLearning?id=60697
10. JS Tasks*/

//TASK 1:
let a = 'Today'
let b = ' is the ' 
let c = 29
let d = 'of July ' 
//'OUTPUT': 'TODAY is the 29 of July' 
 

//TASK 2:
let x = 20
let y = 'TripleA'
//OUTPUT: 'Company 'TripleA' operates 20 years on the Ukrainian market'

//TASK 3:
let v = '$20.99'
//OUTPUT: '20'

//TASK 6:
let w = '20,99'
//OUTPUT: '20.99'

//TASK 7:
let r = 'This is 123 kjdnkjnd 123 sdkjnsdkjfn 123'
//OUTPUT: Count how many times 123 appears in string

//TASK 8:
//'Get the result 30 from two values' 10 + 20 '10' + 20 '10' + '20' 10 + '20'

//TASK 9
//'Write simple calculator' Prompt 2 values Return sum of 2 values If you write string – display the message 'Incorrect value, please input number' test cases: 3+5, 30+50, 15, adding decimals, adding zero, strings


//TASK 10
//написать функцию: принимает два параметра ("Hello, today is", a). Вернуть "Hello, today is {current date}"
//date format: mm/dd/yyyy

//TASK 11 Напишите функцию max(a,b), которая возвращает большее из чисел a и b.

//TASK 12 переделать из обычной функии в стрелочную
let z = function sum (i,j) {
    return i+j
}
//TASK 13 переделать из стрелочной в обычную
let double = n => n * 2;
