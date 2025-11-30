# ICalendarDimension.IsDateEnd

ICalendarDimension.IsDateEnd
-


# ICalendarDimension.IsDateEnd


## Синтаксис


IsDateEnd(Level: [DimCalendarLevel](../../Enums/DimCalendarLevel.htm)):
 Boolean;


## Параметры


Level. Уровень календаря.


## Описание


Свойство IsDateEnd определяет,
 заменять ли дату начала периода датой конца периода для указанного уровня
 календаря.


## Комментарии


Допустимые значения:


	- True. Датой начала периода
	 является дата конца периода. Смещение выполняется от конца периода;


	- False. Дата начала периода
	 не изменяется. Смещение выполняется от начала периода.


Смещение доступно для следующих уровней:


	- годы. Level = DimCalendarLevel.Year;


	- кварталы. Level = DimCalendarLevel.Quarter;


	- месяцы. Level = DimCalendarLevel.Month;


	- недели. Level = DimCalendarLevel.Week.


Для указания количества дней, на которое будет выполнено смещение даты
 начала периода используйте свойство [ICalendarDimension.OffsetDate](ICalendarDimension.OffsetDate.htm).


## Пример


Использование свойства приведено в примере для [ICalendarDimension.OffsetDate](ICalendarDimension.OffsetDate.htm).


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
