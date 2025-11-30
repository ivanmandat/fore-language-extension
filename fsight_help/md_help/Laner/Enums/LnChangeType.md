# LnChangeType

LnChangeType
-


# LnChangeType


## Описание


Перечисление LnChangeType содержит
 изменения, произошедшие в рабочей книге.


Используется свойством [ILanerBoxChangeEventArgs.Value](KeExpress.chm::/Interface/ILanerBoxChangeEventArgs/ILanerBoxChangeEventArgs.Value.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 CellValues. Изменились
		 значения ячеек.


		 2
		 ColumnCount. Изменилось
		 количество столбцов.


		 4
		 RowCount. Изменилось
		 количество строк.


		 8
		 Property_. Свойства
		 рабочей области, при изменении которых должно происходить обновление
		 таблицы данных.


		 32
		 LoadDatesChanged. Изменились
		 даты начала/конца периода, для которого отображаются данные.


		 64
		 AttributeValues. Изменились
		 значения атрибутов.


		 255
		 All. Изменилось всё.


## Комментарии


Даты начала/конца периода, для которого отображаются данные, определяются
 свойствами [ILaner.StartDate](../Interface/ILaner/ILaner.StartDate.htm)
 и [ILaner.EndDate](../Interface/ILaner/ILaner.EndDate.htm).


Атрибуты, отображаемые в рабочей книге, возвращает свойство [ILaner.AttributeColumns](../Interface/ILaner/ILaner.AttributeColumns.htm).


См. также:


[Перечисления сборки Laner](Laner_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
