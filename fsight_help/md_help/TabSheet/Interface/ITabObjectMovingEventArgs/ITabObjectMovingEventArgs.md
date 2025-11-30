# ITabObjectMovingEventArgs

ITabObjectMovingEventArgs
-


# ITabObjectMovingEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabObjectMovingEventArgs
 содержит свойства аргумента события, происходящего при перемещении объекта.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           ITabObjectMovingEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [TabSheetBox.OnObjectMoving](../../Class/TabSheetBox/TabSheetBox.OnObjectMoving.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabObjectMovingEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли перемещение объекта.


		 ![](../../Property_Image.gif)
		 [Object](ITabObjectMovingEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Rect](ITabObjectMovingEventArgs.Rect.htm)
		 Свойство Rect возвращает
		 координаты прямоугольной области, занимаемой объектом.


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
