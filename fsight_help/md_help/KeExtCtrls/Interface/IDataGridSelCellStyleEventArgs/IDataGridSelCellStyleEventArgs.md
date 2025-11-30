# IDataGridSelCellStyleEventArgs

IDataGridSelCellStyleEventArgs
-


# IDataGridSelCellStyleEventArgs


Сборка: ExtCtrls;


## Описание


Интерфейс IDataGridSelCellStyleEventArgs
 содержит свойства аргумента события, наступающего при отрисовке выделенной
 ячейки таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IDataGridEventArgs](../IDataGridEventArgs/IDataGridEventArgs.htm)


           [IDataGridCellEventArgs](../IDataGridCellEventArgs/IDataGridCellEventArgs.htm)


           IDataGridSelCellStyleEventArgs


## Комментарии


Данный аргумент используется при обработке события [OnGetSelectedCellStyle](../../Class/DataGrid/DataGrid.OnGetSelectedCellStyle.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Focused](IDataGridSelCellStyleEventArgs.Focused.htm)
		 Свойство Focused возвращает
		 признак нахождения фокуса в ячейке.


		 ![](../../Property_Image.gif)
		 [Selected](IDataGridSelCellStyleEventArgs.Selected.htm)
		 Свойство Selected возвращает
		 признак выделения ячейки.


		 ![](../../Property_Image.gif)
		 [StyleIndex](IDataGridSelCellStyleEventArgs.StyleIndex.htm)
		 Свойство StyleIndex
		 определяет индекс стиля, который необходимо применить при отрисовке
		 текущей ячейки.


## Свойства, унаследованные от [IDataGridCellEventArgs](../IDataGridCellEventArgs/IDataGridCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../IDataGridCellEventArgs/IDataGridCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 сквозной номер столбца ячейки, для которой сгенерировано событие.


		 ![](../../Property_Image.gif)
		 [Row](../IDataGridCellEventArgs/IDataGridCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 номер строки ячейки, для которой сгенерировано событие.


## Свойства, унаследованные от [IDataGridEventArgs](../IDataGridEventArgs/IDataGridEventArgs.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Grid](../IDataGridEventArgs/IDataGridEventArgs.Grid.htm)
		 Свойство Grid возвращает
		 таблицу, для которой сгенерировано какое-либо событие.


См. также:


[Интерфейсы
 сборки ExtCtrls](../KeExtCtrls_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
