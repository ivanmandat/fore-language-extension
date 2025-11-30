# IAttachCPEventArgs

IAttachCPEventArgs
-


# IAttachCPEventArgs


## Описание


Интерфейс IAttachCPEventArgs
 содержит свойства аргумента события, происходящего после перемещения одной
 из конечных точек линии связи.


## Комментарии


Линиями связи в рабочем пространстве являются: линия, связь, стрелка,
 двойная стрелка.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CPIndexToAttach](IAttachCPEventArgs.CPIndexToAttach.htm)
		 Свойство CPIndexToAttach
		 возвращает индекс соединительной точки объекта рабочего пространства,
		 к которой была присоединена конечная точка соединительной линии,
		 после перемещения.


		 ![](../../Property_Image.gif)
		 [ShapeToAttach](IAttachCPEventArgs.ShapeToAttach.htm)
		 Свойство ShapeToAttach
		 возвращает объект рабочего пространства, к соединительной точке
		 которого была присоединена конечная точка линии связи.


## Свойства, унаследованные от [IMoveCPEventArgs](../IMoveCPEventArgs/IMoveCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../IMoveCPEventArgs/IMoveCPEventArgs.Cancel.htm)


		 Свойство Cancel определяет,
		 будет ли происходить перемещение конечной точки линии связи.


		 ![](../../Property_Image.gif)
		 [CPIndex](../IMoveCPEventArgs/IMoveCPEventArgs.CPIndex.htm)


		 Свойство CPIndex возвращает
		 индекс конечной точки соединительной линии, которую необходимо
		 переместить.


		 ![](../../Property_Image.gif)
		 [Shape](../IMoveCPEventArgs/IMoveCPEventArgs.Shape.htm)


		 Свойство Shape возвращает
		 объект рабочего пространства - соединительную линию, у которой
		 перемещается конечная точка.


См. также:


[Интерфейсы сборки Workspace](../Workspace_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
