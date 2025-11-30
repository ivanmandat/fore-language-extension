# IDataGridRows.AdjustHeight

IDataGridRows.AdjustHeight
-


# IDataGridRows.AdjustHeight


## Синтаксис


AdjustHeight([MaxHeight: Integer = -1;][MinHeight:
 Integer = -1]);


## Параметры


MaxHeight. Максимальная высота,
 которая может быть установлена, вне зависимости от содержимого ячеек;


MinHeight. Минимальная высота,
 которая будет установлена, вне зависимости от содержимого ячеек.


## Описание


Метод AdjustHeight изменяет
 высоту строк таким образом, чтобы содержимое полностью помещалось в ячейки.


## Комментарии


Значения параметров MaxHeight
 и MinHeight указываются в пикселях.


Метод доступен для использования, если свойству [RowSizingMode](../IDataGrid/IDataGrid.RowSizingMode.htm)
 установлено значение [DataGridRowSizingMode.Single](../../Enums/DataGridRowSizingMode.htm).


См. также:


[IDataGridRows](IDataGridRows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
