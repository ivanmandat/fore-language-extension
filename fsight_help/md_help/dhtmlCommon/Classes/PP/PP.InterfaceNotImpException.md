# PP.InterfaceNotImpException

PP.InterfaceNotImpException
-


**


# PP.InterfaceNotImpException


## Синтаксис


InterfaceNotImpException(message: String, self: Object);


## Параметры


*message.* Сообщение, передаваемое исключению. Необязательный параметр, по умолчанию значение не определено;


*self.* Источник исключения. Необязательный параметр, по умолчанию значение не определено.


## Описание


Метод InterfaceNotImpException** возвращает форматированное сообщение об исключении InterfaceNotImpException.


## Комментарии


Метод возвращает значение типа String в следующем формате: «InterfaceNotImpException. Source: [Источник исключения] Message: [Передаваемое сообщение]».


Исключение **InterfaceNotImpException** используется, если объект не реализует интерфейс.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Создадим новое пространство имён, интерфейс, класс, реализующий данный интерфейс, но метод, определённый в интерфейсе, реализовывать не будем:


// Определим новое пространство имен внутри PP
PP.ArithmeticNamespace = {};
PP.initNamespace(PP.ArithmeticNamespace, "PP.ArithmeticNamespace");
// В созданном пространстве имен определим интерфейс, но без реализации
(PP.ArithmeticNamespace.OperationInterface = function () {
    var operationInterface = PP.ArithmeticNamespace.OperationInterface;
    PP.initInterface(operationInterface, "OperationInterface");
    operationInterface.calc = PP.ClassMembers.Method;
})();
/* Создадим класс Calculator, наследуемый от класса PP.Object
 и реализующий интерфейс PP.ArithmeticNamespace.OperationInterface */
PP.ArithmeticNamespace.Calculator = function (settings) {
    PP.ArithmeticNamespace.Calculator.base.constructor.call(this, settings);
};
PP.initClass(PP.ArithmeticNamespace.Calculator, PP.Object, "PP.ArithmeticNamespace.Calculator",
    PP.ArithmeticNamespace.OperationInterface);
// Создадим экземпляр класса PP.Calculator
var calculator = new PP.ArithmeticNamespace.Calculator();
/* Определим, реализует ли класс PP.ArithmeticNamespace.Calculator
   интерфейс PP.ArithmeticNamespace.OperationInterface */
var isInterfaceOf = PP.isInterfaceOf(calculator, PP.ArithmeticNamespace.OperationInterface, false);
if (isInterfaceOf) {
    console.log("Интерфейс PP.ArithmeticNamespace.OperationInterface не реализован");
} else {
    var msg = "Интерфейс PP.ArithmeticNamespace.OperationInterface не реализован";
    // Получим сообщение об ошибке
    var exception = PP.InterfaceNotImpException(msg, calculator);
    console.log(exception);
};

В результате выполнения примера было создано пространство имён ArithmeticNamespace, интерфейс OperationInterface и реализующий его класс Calculator. Поскольку класс не реализует метод calc, определённый в интерфейсе, то в консоли браузера было выведено сообщение об ошибке:


InterfaceNotImpException. Source: Calculator Message: Интерфейс PP.ArithmeticNamespace.OperationInterface не реализован


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
