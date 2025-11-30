# IPivotHighlightItems

IPivotHighlightItems
-


# IPivotHighlightItems


## Описание


Интерфейс IPivotHighlightItems
 содержит свойства и методы для работы с коллекцией условий подсветки данных
 таблицы.


## Комментарии


При работе с коллекцией условий подсветки данных, если установить какое-либо
 условие из Fore, на ряду с ним
 будут подсвечиваться данные, удовлетворяющие условию с индексом 0. Необходимо
 учитывать данную особенность при реализации пользовательских проектов.


Во избежание преждевременного срабатывания подсветки данных рекомендуется
 все настройки производить в блоке кода, выполняемого между вызовами методов
 [IPivot.BeginUpdate](../IPivot/IPivot.BeginUpdate.htm)/[IPivot.EndUpdate](../IPivot/IPivot.EndUpdate.htm).
 Если для возобновления перерисовки таблицы используется метод IPivot.EndUpdateEx,
 то применить какое-либо новое отдельное условие подсветки данных можно
 с помощью метода [IEaxGrid.ApplyHighlight](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.ApplyHighlight.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IPivotHighlightItems.Count.htm)
		 Свойство Count возвращает
		 количество условий подсветки данных.


		 ![](../../Property_Image.gif)
		 [Item](IPivotHighlightItems.Item.htm)
		 Свойство Item возвращает
		 параметры условия подсветки данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IPivotHighlightItems.Add.htm)
		 Метод Add создает новое
		 условие подсветки данных таблицы.


		 ![](../../Sub_Image.gif)
		 [Clear](IPivotHighlightItems.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех условий подсветки данных таблицы.


		 ![](../../Sub_Image.gif)
		 [Remove](IPivotHighlightItems.Remove.htm)
		 Метод Remove осуществляет
		 удаление условия подсветки данных таблицы.


См. также:


[Интерфейсы сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
