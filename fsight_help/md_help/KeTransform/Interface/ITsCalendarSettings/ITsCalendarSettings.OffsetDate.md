# ITsCalendarSettings.OffsetDate

ITsCalendarSettings.OffsetDate
-


# ITsCalendarSettings.OffsetDate


## Синтаксис


OffsetDate(Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)):
 Integer;


## Параметры


Level. Уровень календаря.


## Описание


Свойство OffsetDate определяется
 число дней, на которые будет смещена дата начала указанного уровня.


## Комментарии


Смещение доступно для следующих уровней:


	- годы. Level = DimCalendarLevel.Year;


	- кварталы. Level = DimCalendarLevel.Quarter;


	- месяцы. Level = DimCalendarLevel.Month;


	- недели. Level = DimCalendarLevel.Week.


Если значение OffsetDate положительное,
 то смещение выполняется вперед, если отрицательное - назад. Наименование
 уровня календаря формируется с учетом смещения.


Если необходимо задать смещение от конца указанного периода, то установите
 значение [ITsCalendarSettings.IsDateEnd](ITsCalendarSettings.IsDateEnd.htm)
 в True.


## Пример


Использование свойства приведено в примере для [ITsCalendarSettings.IsDateEnd](ITsCalendarSettings.IsDateEnd.htm).


См. также:


[ITsCalendarSettings](ITsCalendarSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
