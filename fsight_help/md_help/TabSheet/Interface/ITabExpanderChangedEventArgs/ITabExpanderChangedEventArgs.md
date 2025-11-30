# ITabExpanderChangedEventArgs

ITabExpanderChangedEventArgs
-


# ITabExpanderChangedEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabExpanderChangedEventArgs
 содержит свойства аргумента события, наступающего при изменении состояния
 экспандера в ячейке таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabCellEventArgs](../ITabCellEventArgs/ITabCellEventArgs.htm)


           ITabExpanderChangedEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnExpanderChanged](../../Class/TabSheetBox/TabSheetBox.OnExpanderChanged.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [State](ITabExpanderChangedEventArgs.State.htm)
		 Свойство State возвращает
		 состояние экспандера, которое будет установлено.


## Свойства, унаследованные от [ITabCellEventArgs](../ITabCellEventArgs/ITabCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../ITabCellEventArgs/ITabCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 номер столбца, в котором находится ячейка таблицы.


		 ![](../../Property_Image.gif)
		 [Row](../ITabCellEventArgs/ITabCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 номер строки, в которой находится ячейка таблицы.


## Свойства, унаследованные от [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TabSheet](../ITabSheetEventArgs/ITabSheetEventArgs.TabSheet.htm)
		 Свойство TabSheet возвращает
		 компонент, для которого сгенерировано событие.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
