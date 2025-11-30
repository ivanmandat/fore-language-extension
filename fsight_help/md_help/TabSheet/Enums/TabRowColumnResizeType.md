# TabRowColumnResizeType

TabRowColumnResizeType
-


# TabRowColumnResizeType


## Описание


Перечисление TabRowColumnResizeType
 содержит типы действий, в результате которых изменяются размеры строк/столбцов
 таблицы.


Используется следующими свойствами и методами:


	- [ITabColumnResizeEventArgs.Type](../Interface/ITabColumnResizeEventArgs/ITabColumnResizeEventArgs.Type.htm);


	- [ITabRowResizeEventArgs.Type](../Interface/ITabRowResizeEventArgs/ITabRowResizeEventArgs.Type.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Resize. Изменение размера
		 столбца/строки в результате визуального перемещении границы, либо
		 изменения [ширины](../Interface/ITabSheet/ITabSheet.ColumnWidth.htm)/[высоты](../Interface/ITabSheet/ITabSheet.RowHeight.htm)
		 в коде приложения.


		 1
		 Hide. Скрытие столбца/строки
		 в результате сворачивания экспандера, либо установки нулевой ширины/высоты.


		 2
		 Show. Отображение столбца/строки
		 в результате разворачивания экспандера, либо установки не нулевой
		 ширины/высоты.


См. также:


[Перечисления
 сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
