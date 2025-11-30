# ICalendarDimensionClass.Level

ICalendarDimensionClass.Level
-


# ICalendarDimensionClass.Level


## Синтаксис


Level(Calendar: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm); El: Integer): [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm);


## Параметры


Calendar. Данные календарного справочника, по которым выполняется расчет;


El. Индекс элемента, относительно которого выполняется расчет.


## Описание


Метод Level возвращает уровень справочника, на котором расположен указанный элемент.


## Комментарии


Для проверки принадлежности элемента требуемому уровню справочника используйте метод [ICalendarDimensionClass.IifLevel](ICalendarDimensionClass.IifLevel.htm).


## Пример


Использование метода приведено в примере для [ICalendarDimensionClass.Day](ICalendarDimensionClass.Day.htm).


См. также:


[ICalendarDimensionClass](ICalendarDimensionClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
