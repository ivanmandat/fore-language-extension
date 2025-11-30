# AttachCPEventArgs

AttachCPEventArgs
-


# AttachCPEventArgs


## Описание


Класс AttachCPEventArgs реализует
 аргумент события, возникающего после перемещения одной из конечных точек
 линии связи.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](AttachCPEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент события, возникающего после перемещения одной
		 из конечных точек линии связи.


## Свойства объекта класса, унаследованные от [IAttachCPEventArgs](../../Interface/IAttachCPEventArgs/IAttachCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CPIndexToAttach](../../Interface/IAttachCPEventArgs/IAttachCPEventArgs.CPIndexToAttach.htm)
		 Свойство CPIndexToAttach
		 возвращает индекс соединительной точки объекта рабочего пространства,
		 к которой была присоединена конечная точка соединительной линии,
		 после перемещения.


		 ![](../../Property_Image.gif)
		 [ShapeToAttach](../../Interface/IAttachCPEventArgs/IAttachCPEventArgs.ShapeToAttach.htm)
		 Свойство ShapeToAttach
		 возвращает объект рабочего пространства, к соединительной точке
		 которого была присоединена конечная точка линии связи.


## Свойства объекта класса, унаследованные от [IMoveCPEventArgs](../../Interface/IMoveCPEventArgs/IMoveCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IMoveCPEventArgs/IMoveCPEventArgs.Cancel.htm)


		 Свойство Cancel определяет,
		 будет ли происходить перемещение конечной точки линии связи.


		 ![](../../Property_Image.gif)
		 [CPIndex](../../Interface/IMoveCPEventArgs/IMoveCPEventArgs.CPIndex.htm)


		 Свойство CPIndex возвращает
		 индекс конечной точки соединительной линии, которую необходимо
		 переместить.


		 ![](../../Property_Image.gif)
		 [Shape](../../Interface/IMoveCPEventArgs/IMoveCPEventArgs.Shape.htm)


		 Свойство Shape возвращает
		 объект рабочего пространства - соединительную линию, у которой
		 перемещается конечная точка.


См. также:


[Классы сборки Workspace](../Workspace_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
