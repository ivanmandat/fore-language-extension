# ITabRowResizingEventArgs

ITabRowResizingEventArgs
-


# ITabRowResizingEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabRowResizingEventArgs
 содержит свойства аргумента события, происходящего при каждом видимом
 изменении размера строки таблицы.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabRowEventArgs](../ITabRowEventArgs/ITabRowEventArgs.htm)


           [ITabRowResizeEventArgs](../ITabRowResizeEventArgs/ITabRowResizeEventArgs.htm)


           ITabRowResizingEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnRowResizing](../../Class/TabSheetBox/TabSheetBox.OnRowResizing.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabRowResizingEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 допустимость изменения высоты строки.


## Свойства, унаследованные от [ITabRowResizeEventArgs](../ITabRowResizeEventArgs/ITabRowResizeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Type](../ITabRowResizeEventArgs/ITabRowResizeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип действия, в результате которого изменяется размер строки.


## Свойства, унаследованные от [ITabRowEventArgs](../ITabRowEventArgs/ITabRowEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Row](../ITabRowEventArgs/ITabRowEventArgs.Row.htm)
		 Свойство Row возвращает
		 номер строки, для которой произошло событие.


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
