# ITabSheet.InsertColumns

ITabSheet.InsertColumns
-


# ITabSheet.InsertColumns


## Синтаксис


InsertColumns(Column: Integer; Count: Integer);


## Параметры


Column. Индекс столбца, перед которым будут вставлены столбцы. Допустимое значение параметра находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


Count. Количество добавляемых столбцов.


## Описание


Метод InsertColumns позволяет вставить указанное количество столбцов (параметр Count) перед столбцом, индекс которого передается в качестве входного параметра Column.


## Комментарии


Для корректной работы данного метода должно соблюдаться следующее соотношение параметров: Column + Count <= [ColumnsCount](ITabSheet.ColumnsCount.htm).


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
