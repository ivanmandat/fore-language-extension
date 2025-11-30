# IDataGridSelRowStyleEventArgs

IDataGridSelRowStyleEventArgs
-


# IDataGridSelRowStyleEventArgs


Сборка: ExtCtrls;


## Описание


Интерфейс IDataGridSelRowStyleEventArgs
 содержит свойства аргумента события, наступающего при отрисовке выделенной
 строки таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IDataGridEventArgs](../IDataGridEventArgs/IDataGridEventArgs.htm)


           IDataGridSelRowStyleEventArgs


## Комментарии


Данный аргумент используется при обработке события [OnGetSelectedRowStyle](../../Class/DataGrid/DataGrid.OnGetSelectedRowStyle.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Focused](IDataGridSelRowStyleEventArgs.Focused.htm)
		 Свойство Focused возвращает
		 признак нахождения фокуса в ячейке текущей строки.


		 ![](../../Property_Image.gif)
		 [Row](IDataGridSelRowStyleEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки, которую необходимо отрисовать.


		 ![](../../Property_Image.gif)
		 [Selected](IDataGridSelRowStyleEventArgs.Selected.htm)
		 Свойство Selected возвращает
		 признак выделения строки.


		 ![](../../Property_Image.gif)
		 [StyleIndex](IDataGridSelRowStyleEventArgs.StyleIndex.htm)
		 Свойство StyleIndex
		 определяет индекс стиля, который необходимо применить при отрисовке
		 текущей строки.


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
