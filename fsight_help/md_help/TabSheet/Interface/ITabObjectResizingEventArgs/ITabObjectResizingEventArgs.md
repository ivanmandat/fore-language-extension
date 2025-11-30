# ITabObjectResizingEventArgs

ITabObjectResizingEventArgs
-


# ITabObjectResizingEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabObjectResizingEventArgs
 содержит свойства аргумента события, происходящего при изменении размеров
 объекта.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           ITabObjectResizingEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [TabSheetBox.OnObjectResizing](../../Class/TabSheetBox/TabSheetBox.OnObjectResizing.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabObjectResizingEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли изменение размеров.


		 ![](../../Property_Image.gif)
		 [Object](ITabObjectResizingEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Rect](ITabObjectResizingEventArgs.Rect.htm)
		 Свойство Rect возвращает
		 координаты прямоугольной области занимаемой объектом.


		 ![](../../Property_Image.gif)
		 [Side](ITabObjectResizingEventArgs.Side.htm)
		 Свойство Side возвращает
		 сторону, которая была изменена.


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
