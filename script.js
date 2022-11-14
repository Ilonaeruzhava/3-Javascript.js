/* Явное Преобразование типов*/
/*let str = "6";
alert(str); //6
alert(typeof str);//String
let num=Number(str);//создание новой переменной и изменение типа
alert(typeof num);//number



/*Правила численного преобразования:
String Пробелы обрезаются по краям, если остается пустая
 строка, то получается 0. При ошмбке высвечивается NaN
 undefined NaN
 null 0
 true/false 1/0*/
 /*alert(Number ("   1222"));
 alert(Number("123z"));
 alert (Number(""));
 alert(Number(true));
 alert(Number(false));

 /*Явное Логическое преобразованиие
 Boolean(value)
 Пустые значения: 0, пустая строка, null, undefined, NaN
 становятся false;
 все остальные значения true;*/
 /*alert("пустая строка");
 alert(Boolean(""));//false
 alert("10"/"0");
 alert(Boolean("10"/"0"));//true
 alert("dog");
 alert(Boolean("dog"));//true
 alert("7");
 alert(Boolean("7"));//true
 alert(("9"+"11"));//тип string
 alert(Boolean("9"+"11")); 

//Особоые случаи, в которых часто допускаются ошибки 
//undefined при численном преобразовании становится NaN
//"0" и строки из пробелов при логическом преобразовании 
//всегда true
/*Какой результат будет в следующем списке выражений? Проверьте ваши знания о том, как работает приведение типов в JavaScript.
*/

//alert(Number("true"+"false"))//NaN
//alert(String("true"+"false"))//true+false (truefalse)
//alert(Boolean("true"+"false"))//true
//alert(Number(8/"2"))//4
//alert(Boolean(8/"2"))//true
//alert(String(8/"2"))//4
//alert(String("number" + 5 + 1))//number51
//alert(Number("number" + 5 + 1))//NaN
//alert(Boolean("number" + 5 + 1))//true
//alert(Number(5 + 1 + "number"))//NaN
//alert(String(5 + 1 + "number"))//6number
//alert(Boolean(5 + 1 + "number"))//true
//alert(Number(7 && 2))//2
//alert(String(7 && 2))//2
//alert(Boolean(7 && 2))//true
//alert(Number(2 && 7))//7
//alert(String(2 && 7))//7
//alert(Boolean(2 && 7))//true
//alert(Number(null + 1))//1
//alert(String(null + 1))//1
//alert(Boolean(null + 1))//true
//alert(Number(undefined + 1))//NaN
//alert(String(undefined + 1))//NaN
//alert(Boolean(undefined + 1))//false
//alert(Number("five" + + "two"))//NaN
//alert(String("five" + + "two"))//fiveNaN
//alert(Boolean("five" + + "two"))//true
//alert(Number('true' == true))//0
//alert(String('true' == true))//false
//alert(Boolean('true' == true))//false
//alert(Number(false == 'false'))//0
//alert(String(false == 'false'))//false
//alert(Boolean(false == 'false'))//false
//alert(Number(null == ''))//0
//alert(String(null == ''))//false
//alert(Boolean(null == ''))//false
//alert(Number(!!"false" == !!"true"))//1
//alert(String(!!"false" == !!"true"))//true
//alert(Boolean(!!"false" == !!"true"))//true
//alert(Number("4" - 3))//1
//alert(String("4" - 3))//1
//alert(Boolean("4" - 3))//true
//alert(Number("4px" - 3))//NaN
//alert(String("4px" - 3))//NAN
//alert(Boolean("4px" - 3))//false
//alert(Number(0 || "0" && 1 */))//undefined
//alert(String(0 || "0" && 1 */))//undefined
//alert(Boolean(0 || "0" && 1 */))//undefined

//Задача Создайте переменную str и присвойте ей 
//значение 'abcde'. Обращаясь к отдельным символам \
//этой строки выведите на экран символ 'a', символ 'b', 
//символ 'e'.
//alert('abcde'.charAt(0));//a
//alert('abcde'.charAt(1));//b
//alert('abcde'.charAt(4));//e
/*let str = ('abcde');
alert(str.charAt(0));
alert(str.charAt(1));
alert(str.charAt(4));*/




//Задача. Напишите скрипт, который считает количество секунд в часе.
//alert(60*60);

//Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
//let num = "3";
//alert(num);

// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
//let a= Number("10");
//let b= Number ("2");
//alert(a+b);
//alert(a-b);
//alert(a*b);
//alert(a/b);

//let a = 10;
//let b = 2;
//alert(a+b);

// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
/*let c =15;
let d =2;
let result = (c+d);
alert(result);*/

// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
/*let a=10;
let b=2;
let c=5;
let result = (a+b+c);
alert(result);*/

//Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
/*let a=17;
let b=10;
let c = (a-b);
let d=7;
let result = (c+d);
alert(result);*/

// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
/*let str ="'Привет, Мир!'";
alert(str);*/

//Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
/*let str1 = "Привет, ";
let str2 ="Мир!";
alert(str1+str2);*/

//Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
/*let name = "Илона";
alert("Привет, " + name);*/

// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
/*let age = 31;
alert("Мне " +age+ " лет");*/

//Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
/*let name = prompt("Ваше имя???", "Напишите ваше имя");
alert("Ваше имя - " + name);*/

//Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
/*let askednumber = Number(prompt("Какое число?", "введите ваше число"));
alert(askednumber*askednumber);*/

//Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
/*let num=('12345');
let MultiplyResult=alert(num.charAt(0)*num.charAt(1)*num.charAt(2)*num.charAt(3)*num.charAt(4));*/

//Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
/*let DaysInMonth = "30";
let QuantitySeconds=alert(60*60*24*DaysInMonth);*/

//Чему будут равны переменные a, b, c и d в примере ниже?
/*let a = 1, b = 1;

let c = ++a; 
let d = b++; 
alert (++a);//2
alert(b++);//1
alert (c);//2
alert (d);//1
*/

//Чему будут равны переменные a и x после исполнения кода в примере ниже?
/*let a = 2;
let x = 1 + (a *= 2);//Сначала скобки, 2*2=4+1=5*/

//Какой результат будет у выражений ниже?
/*alert("" + 1 + 0);//10
"" - 1 + 0//-1
true + false//1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//NaN
"  -9  " + 5//-9    5
"  -9  " - 5//-14
null + 1//1
undefined + 1//NAN
" \t \n" - 2//-2 */

/*Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12*/
//Испралено - Надо явно прописать тип заданных переменных a и b в качестве типа number
/*let a =Number(prompt("Первое число?", 1));
let b =Number(prompt("Второе число?", 2));
alert(a+b);//3 */
/*let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 3*/
/*let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 3*/

/*Каким будет результат этих выражений?

5 > 4//true
"ананас" > "яблоко"//false
"2" > "12"//true
undefined == null//true//
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"*///false

/*Составьте ПР, которая присваивает переменной d значение 7, а затем выводит на экран, в первой строке - это значение, во второй - квадрат, в третьей - куб этого значения)*/
/*let d = +7;
alert(d);//7
alert(d**2);//49
alert(d**3);//343*/

/*Составьте ПР, которая присваивает переменной h значение 5, а затем выводит на экран: в первой строке - это значение с поясняющей записью, во второй - квадрат с поясняющей записью*/
/*let h = 5;
alert (`h = ${h}`);
alert (`h в квадрате = ${h**2}`); */

//Составьте ПР, которая присваивает значения 2-ум переменным, а затем выводит на экран, в первой строке - произведение этих переменных (с пояснительной надписью), во второй - сумма(с пояснительной надписью)
/*let a = +3;
let b = +5;
alert(`Сумма чисел = ${a+b}`);
alert(`a*b = ${a*b}`);*/


//Составьте программу, которая принимает с клавиатуры челое число, и выводит на экран два новых числа (каждое в отдельной строке)Ж число, больше введенного с клавиатуры на 7 и число, меньше введенного с клавиатуры на 9
/*let num = +prompt("Введите целое число", "Целое число");
alert(num +7);
alert(num-9);*/

//Составьте Пр, которая принимает с клавиатуры 2 целых числа и выводит на экран следующие значения (каждое в отдельной строке) сумму, произведение, разницу между первым и вторым
/*let a = Number(prompt("Целое число", "Введите целое число"));
let b = Number(prompt("Целое число","Введите число два"));
alert(a+b);
alert(a*b);
alert(a-b);*/

//Составьте ПР, которая принимает с клавиатуры два целых числа и выводит на экран следующие значения квадрат каждого числа (отдельно), сумму квадратов введенных чисел
/*let a = Number(prompt("integer", "enter a number"));
let b = Number(prompt("integer","enter integer"));
alert(a**2);
alert(b**2);
let c = (a**2);
let d=(b**2);
alert(c+d);*/

//Составьте пр, котрая принимает с клавиатуры два целых числа, первое - год рождения, а второе - нынешний год, Пр должна вывести на экран озраст учениика
/*let YearOfBirth =prompt("Year Of Birth", "Enter your year of birth");
let CurrentYear =prompt("Current year", "Enter current year");
alert(`Your year of birth is ${CurrentYear - YearOfBirth}`);*/

//Составьте Пр, которая принимает с К ЦЧ(целое число) и, если оно положительное, увеличивает его вдвое. Вывести новое значение
/*let num = prompt("Integer", "Enter a number");
if (num > 0) {
    alert(+num*2);
} else {
        alert('Ooops, something went wrong');
    }*/

//Составьте Пр, которая принимает с клавиатуры ЦЧ, и если оно равно нулю, выводит на экран сообщение "ноль"
/*let num=+prompt("Enter a number", "Enter number");
if (num==0) {
    alert("ноль")
}*/

//Составьте Пр, которая принимает с Кл ЦЧ и выыводит на экран одно из следующих сообщений: "положительное", или "отрицательное", или "ноль" - в зависимости от значениия числа

/*let EnteredNumber = +prompt("Enter a number", "Enter here");

if (EnteredNumber>0) {
    alert("positive");
}
else if (EnteredNumber===0) {
    alert("zero");
} else {

    alert("negative");
}*/

//Составьте Пр, которая принимает с Кл 2 ЦЧ и, если первое больше второго, выводит на экран их сумму, если же наоборот - выводит на экран их произведение. В случае если одинаковы, ПР выводит на экран сообщение "числа одинаковые".

/*let FirstNumber=+prompt("First Number", "Enter");
let SecondNumber=+prompt("Second Number", "Enter");
if (FirstNumber>SecondNumber) {
    alert(FirstNumber+SecondNumber);
}
if (FirstNumber===SecondNumber) {
alert("Числа одинаковые");    
} if (FirstNumber<SecondNumber) {
    alert(FirstNumber*SecondNumber);
}*/

//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»*/


//Составьте ПР, которая принимает с КЛ 2 ЦЧ и если оба имеют одинаковый знак, на экоан выводится сообщение "один и тот же знак", а если разный, то на экран выводится сообщение "разные знаки". Если оба числа равны, выводится сообщение "некорреткно".

/*let FirstNumber =+prompt("Enter first number");
let SecondNumber=+prompt("Enter second number");
if (FirstNumber>0, SecondNumber>0) {
    alert("один и тот же знак");
}
else if (FirstNumber<0, SecondNumber<0) {
    alert("один и тот же знак");
}
else if (FirstNumber>0, SecondNumber<0){
    alert("разные знаки");
}
else if (FirstNumber<0, SecondNumber>0){
    alert("разные знаки");
}
else if (FirstNumber===SecondNumber){
    alert("некорректен");
}*/
