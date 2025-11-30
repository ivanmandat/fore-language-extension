# ITabBeforeExpanderChangedEventArgs

ITabBeforeExpanderChangedEventArgs
-


# ITabBeforeExpanderChangedEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabBeforeExpanderChangedEventArgs
 содержит свойства аргумента события, наступающего перед изменением состояния
 экспандера в ячейке таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabCellEventArgs](../ITabCellEventArgs/ITabCellEventArgs.htm)


           [ITabExpanderChangedEventArgs](../ITabExpanderChangedEventArgs/ITabExpanderChangedEventArgs.htm)


           ITabBeforeExpanderChangedEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnBeforeExpanderChanged](../../Class/TabSheetBox/TabSheetBox.OnBeforeExpanderChanged.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabBeforeExpanderChangedEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак допустимости изменения состояния экспандера.


## Свойства, унаследованные от [ITabExpanderChangedEventArgs](../ITabExpanderChangedEventArgs/ITabExpanderChangedEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [State](../ITabExpanderChangedEventArgs/ITabExpanderChangedEventArgs.State.htm)
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
