# IPivotTableCellEventArgs

IPivotTableCellEventArgs
-


# IPivotTableCellEventArgs


Сборка: Pivot;


## Описание


Интерфейс IPivotTableCellEventArgs
 содержит свойства аргумента события, наступающего при изменении данных
 в ячейке таблицы.


## Иерархия наследования


           [IPivotTableCellChangeEventArgs](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.htm)


           IPivotTableCellEventArgs


## Комментарии


Обработка события, наступающего после изменения данных в ячейке, осуществляется
 в событии [IPivotEvents.OnPivotTableCellChange](../IPivotEvents/IPivotEvents.OnPivotTableCellChange.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IPivotTableCellEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак возможности изменения значения ячейки.


## Свойства, унаследованные от [IPivotTableCellChangeEventArgs](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца изменяемой ячейки.


		 ![](../../Property_Image.gif)
		 [NewValue](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.NewValue.htm)
		 Свойство NewValue возвращает
		 новое значение, которое будет установлено в ячейке.


		 ![](../../Property_Image.gif)
		 [Row](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки изменяемой ячейки.


		 ![](../../Property_Image.gif)
		 [Table](../IPivotTableCellChangeEventArgs/IPivotTableCellChangeEventArgs.Table.htm)
		 Свойство Table возвращает
		 данные таблицы, в которой изменяется ячейка.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
