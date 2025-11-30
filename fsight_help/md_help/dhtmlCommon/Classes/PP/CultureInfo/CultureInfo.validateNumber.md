# CultureInfo.validateNumber

CultureInfo.validateNumber
-


# CultureInfo.validateNumber


## Синтаксис


validateNumber(ValObj: Object, GroupSeparator: String, DecimalSeparator: String, FractionCount: Number);


## Параметры


ValObj. JSON-объект с полем value, содержащим исходную строку;


GroupSeparator. Разделитель разрядов. Если не указан, то значение параметра берётся из региональных настроек;


DecimalSeparator. Разделитель дробной части. Если не указан, то значение параметра берётся из региональных настроек;


FractionCount. Количество цифр в дробной части. Если параметр не задан, то их количество не ограничено.


## Описание


Метод validateNumber преобразует заданную строку в число, если это возможно.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Определим, являются ли строки «0,2», «0.2»,  «100`000» и «100 000» числами и отформатируем число 500000.12 в соответствии с разделителями разрядов и дробной части, заданными в параметрах метода [numberToFormattedString](CultureInfo.numberToFormattedString.htm):


var cultureInfo = new PP.CultureInfo();
// Установим разделитель дробной части
cultureInfo.DecimalSeparator = ",";
console.log("Разделитель дробной части: «" + cultureInfo.DecimalSeparator + "»");
//Проверим, является ли значения 0.2 и 0,2 числами для "русской культуры"
var isNumber = cultureInfo.validateNumber({
    value: "0.2"
});
console.log("Значение «0.2» " + (isNumber ? "является" : "не является") + " числом. ");
isNumber = cultureInfo.validateNumber({
    value: "0,2"
});
console.log("Значение «0,2» " + (isNumber ? "является" : "не является") + " числом.");
// Установим разделитель разрядов
cultureInfo.GroupSeparator = "`";
console.log("Разделитель разрядов: «" + cultureInfo.GroupSeparator + "»");
isNumber = cultureInfo.validateNumber({
    value: "100`000"
});
console.log("Значение «100`000» " + (isNumber ? "является" : "не является") + " числом.");
isNumber = cultureInfo.validateNumber({
    value: "«100 000» "
});
console.log("Значение «100 000» " + (isNumber ? "является" : "не является") + " числом.");
// Отформатируем число с учётом разделителей
console.log("Отформатированное число: " + cultureInfo.numberToFormattedString(500000.123, " ", ".", 2));

В результате выполнения примера в консоли браузера были выведены уведомления о том, являются ли строки «0,2», «0.2»,  «100`000» и «100 000» числами. При этом предварительно с помощью свойств [DecimalSeparator](CultureInfo.DecimalSeparator.htm) и [GroupSeparator](CultureInfo.GroupSeparator.htm) были заданы соответственно разделители дробной части и разрядов, отличные от их значений в региональных настройках:


Разделитель дробной части: «,»

Значение «0.2» не является числом.

Значение «0,2» является числом.

Разделитель разрядов: «`»

Значение «100`000» является числом.

Значение «100 000» не является числом.


Также в консоли браузера было выведено отформатированное число 500000.12 с учётом разделителей дробной части и разрядов, указанных в качестве параметров метода [numberToFormattedString](CultureInfo.numberToFormattedString.htm):


Отформатированное число: 500 000.12


См. также:


[CultureInfo](CultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
