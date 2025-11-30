# IPivotTableCellChangeEventArgs

IPivotTableCellChangeEventArgs
-


# IPivotTableCellChangeEventArgs


Сборка: Pivot;


## Описание


Интерфейс IPivotTableCellChangeEventArgs
 содержит свойства аргумента события, наступающего после изменения данных
 в ячейке таблицы.


## Иерархия наследования


           IPivotTableCellChangeEventArgs


## Комментарии


Обработка события, наступающего после изменения данных в ячейке, осуществляется
 в событии [IPivotEvents.OnPivotTableCellChanged](../IPivotEvents/IPivotEvents.OnPivotTableCellChanged.htm).


Интерфейс является базовым для интерфейса [IPivotTableCellEventArgs](../IPivotTableCellEventArgs/IPivotTableCellEventArgs.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](IPivotTableCellChangeEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца изменяемой ячейки.


		 ![](../../Property_Image.gif)
		 [NewValue](IPivotTableCellChangeEventArgs.NewValue.htm)
		 Свойство NewValue возвращает
		 новое значение, которое будет установлено в ячейке.


		 ![](../../Property_Image.gif)
		 [Row](IPivotTableCellChangeEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки изменяемой ячейки.


		 ![](../../Property_Image.gif)
		 [Table](IPivotTableCellChangeEventArgs.Table.htm)
		 Свойство Table возвращает
		 данные таблицы, в которой изменяется ячейка.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
