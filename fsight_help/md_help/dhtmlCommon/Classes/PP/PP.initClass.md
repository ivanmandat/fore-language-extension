# PP.initClass

PP.initClass
-


**


# PP.initClass


## Синтаксис


initClass(cls: Function, baseClass: Function|Array,
 name: String, interfaces: Array);


## Параметры


*cls.* Инициализируемый класс;


*baseClass.* Родительский класс или
 массив данных классов;


*name.* Полное наименование класса;


*interfaces.* Массив реализуемых интерфейсов.


## Описание


Метод initClass** инициализирует
 класс.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Создадим новое пространство имён, перечисление, интерфейс,
 класс, реализующий данный интерфейс, и определим в нём метод, выполняющий
 арифметическую операцию над двумя числами:


// Определим новое пространство имен внутри PP
PP.ArithmeticNamespace = {};
PP.initNamespace(PP.ArithmeticNamespace, "PP.ArithmeticNamespace");
// В созданном пространстве имен определим интерфейс с одним методом calc
PP.ArithmeticNamespace.OperationInterface = function () {
    var operationInterface = PP.ArithmeticNamespace.OperationInterface;
    PP.initInterface(operationInterface, "OperationInterface");
    operationInterface.calc = PP.ClassMembers.Method;
};
// Инициализируем перечисление, содержащее арифметические операции
(PP.ArithmeticNamespace.Operations = function () {
    var operations = PP.ArithmeticNamespace.Operations;
    operations.Sum = "Sum";
    operations.Multiply = "Multiply";
    PP.initEnum(operations, "PP.ArithmeticNamespace.Operations");
})();
/* Создадим класс Calculator, наследуемый от класса PP.Object
 и реализующий интерфейс PP.ArithmeticNamespace.OperationInterface */
PP.ArithmeticNamespace.Calculator = function (settings) {
    PP.ArithmeticNamespace.Calculator.base.constructor.call(this, settings);
};
PP.initClass(PP.ArithmeticNamespace.Calculator, PP.Object,
             "PP.ArithmeticNamespace.Calculator", PP.ArithmeticNamespace.OperationInterface);
// Реализуем метод calc
var calculatorPrototype = PP.ArithmeticNamespace.Calculator.prototype;
calculatorPrototype.calc = function (a, b, operation) {
    var result;
    switch (operation) {
        case PP.ArithmeticNamespace.Operations.Sum:
            result = a + b;
            break;
        case PP.ArithmeticNamespace.Operations.Multiply:
            result = a * b;
            break;
    };
    return result;
};
//Создадим экземпляр класса PP.Calculator
var calculator = new PP.ArithmeticNamespace.Calculator();
// Получим сумму двух чисел
var a = 56,
    b = 87;
var sum = calculator.calc(a, b, PP.ArithmeticNamespace.Operations.Sum);
console.log(a + " + " + b + " = " + sum);
// Получим произведение двух чисел
var mult = calculator.calc(a, b, PP.ArithmeticNamespace.Operations.Multiply);
console.log(a + " x " + b + " = " + mult);

В результате выполнения примера было создано пространство имён ArithmeticNamespace, перечисление
 Operations, интерфейс OperationInterface
 и реализующий его класс Calculator.
 Для данного класса был определён метод calc,
 выполняющий арифметические операции над двумя числами. Результат операции
 сложения и умножения был выведен в консоль браузера:


56 + 87 = 143


56 x 87 = 4872


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
