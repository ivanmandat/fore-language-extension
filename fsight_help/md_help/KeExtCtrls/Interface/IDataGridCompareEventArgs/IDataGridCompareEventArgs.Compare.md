# IDataGridCompareEventArgs.Compare

IDataGridCompareEventArgs.Compare
-


# IDataGridCompareEventArgs.Compare


## Синтаксис


Compare: Integer;


## Описание


Свойство Compare устанавливает
 признак сортировки.


## Комментарии


Для свойства должно быть установлено одно из следующих значений:


	- 0 - если элементы равны;


	- меньше 0 - если [LeftItem](IDataGridCompareEventArgs.LeftRow.htm)
	 < [RightItem](IDataGridCompareEventArgs.RightRow.htm);


	- больше 0 - если [LeftItem](IDataGridCompareEventArgs.LeftRow.htm)
	 > [RightItem](IDataGridCompareEventArgs.RightRow.htm).


## Пример


Использование свойства приведено в примере для [IDataGrid.SortType](../IDataGrid/IDataGrid.SortType.htm).


См. также:


[IDataGridCompareEventArgs](IDataGridCompareEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
