# Speedometer.NumberFormat

Speedometer.NumberFormat
-


# Speedometer.NumberFormat


## Синтаксис


NumberFormat: String;


## Описание


Свойство NumberFormat определяет
 формат данных спидометра.


## Комментарии


Значение свойства устанавливается из JSON, а возвращается с помощью
 метода getBorderEnabled.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с идентификатором «speedometer» (см. «[Пример
 создания спидометра с мастером](../../../Components/Speedometer/speedometer_wirh_master.htm)»).


Получим формат данных спидометра:


// Выведем формат данных
console.log("Формат, в котором выводятся данные: " + speedometer.getNumberFormat());
В результате выполнения примера в консоли браузера будет выведено сообщение:


Формат, в котором выводятся данные: #,##0.00


См. также:


[Speedometer](Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
