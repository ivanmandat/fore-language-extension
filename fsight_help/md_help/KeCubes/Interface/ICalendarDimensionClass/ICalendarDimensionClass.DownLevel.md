# ICalendarDimensionClass.DownLevel

ICalendarDimensionClass.DownLevel
-


# ICalendarDimensionClass.DownLevel


## Синтаксис


DownLevel(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): Integer;


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод DownLevel возвращает индекс элемента, являющегося родительским для указанного элемента.


## Комментарии


Если родительский элемент отсутствует, то метод вернет значение «-1».


Например, если календарный справочник содержит уровни годы, полугодия, кварталы и расчёт выполняется для:


-
элемента полугодовой динамики, то метод DownLevel возвращает элемент, соответствующий году, в который входит полугодие;


-
элемента квартальной динамики, то метод DownLevel возвращает элемент, соответствующий полугодию, в которое входит квартал.


## Пример


Использование свойства приведено в примере для [ICalendarDimensionClass.IifLevel](ICalendarDimensionClass.IifLevel.htm).


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
