# ITabSelection

ITabSelection
-


# ITabSelection


Сборка: Tab;


## Описание


Интерфейс ITabSelection содержит
 свойства и методы для работы с выделенным диапазоном таблицы.


## Иерархия наследования


           ITabSelection


## Комментарии


Для работы с ячейками и диапазонами ячеек таблицы используйте свойства
 и методы интерфейса [ITabRange](../ITabRange/ITabRange.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FocusedColumn](ITabSelection.FocusedColumn.htm)
		 Свойство FocusedColumn
		 определяет индекс столбца, в котором находится ячейка с фокусом.


		 ![](../../Property_Image.gif)
		 [FocusedRow](ITabSelection.FocusedRow.htm)
		 Свойство FocusedRow
		 определяет индекс строки, в которой находится ячейка с фокусом.


		 ![](../../Property_Image.gif)
		 [Range](ITabSelection.Range.htm)
		 Свойство Range определяет
		 диапазон отмеченных ячеек.


		 ![](../../Property_Image.gif)
		 [Style](ITabSelection.Style.htm)
		 Свойство Style определяет
		 стиль отметки ячеек таблицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddRange](ITabSelection.AddRange.htm)
		 Метод AddRange добавляет
		 к выделенному диапазону диапазон, который передается в качестве
		 входного параметра.


		 ![](../../Sub_Image.gif)
		 [CenterAtView](ITabSelection.CenterAtView.htm)
		 Метод CenterAtView
		 прокручивает таблицу таким образом, чтобы выделенный диапазон
		 находился в центре таблицы.


		 ![](../../Sub_Image.gif)
		 [Copy](ITabSelection.Copy.htm)
		 Метод Copy копирует
		 отмеченную область в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [Cut](ITabSelection.Cut.htm)
		 Метод Сut перемещает
		 данные из отмеченной области в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [Empty](ITabSelection.Empty.htm)
		 Метод Empty снимает
		 всю установленную отметку.


		 ![](../../Sub_Image.gif)
		 [Paste](ITabSelection.Paste.htm)
		 Метод Paste вставляет
		 данные из буфера обмена в отмеченную область.


		 ![](../../Sub_Image.gif)
		 [SelectAll](ITabSelection.SelectAll.htm)
		 Метод SelectAll выделяет
		 диапазон непустых ячеек, расположенных около активной ячейки/диапазона.


		 ![](../../Sub_Image.gif)
		 [SelectColumns](ITabSelection.SelectColumns.htm)
		 Метод SelectColumns
		 выделяет столбец/столбцы таблицы, в которых расположена активная
		 ячейка/диапазон (CTRL + SPACE).


		 ![](../../Sub_Image.gif)
		 [SelectRows](ITabSelection.SelectRows.htm)
		 Метод SelectRows выделяет
		 строку/сроки таблицы, в которых расположена активная ячейка/диапазон
		 (SHIFT + SPACE).


См. также:


[Интерфейсы сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
