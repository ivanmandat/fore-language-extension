# AttachCPEventArgs.CreateArgs

AttachCPEventArgs.CreateArgs
-


# AttachCPEventArgs.CreateArgs


## Синтаксис


CreateArgs(


Shape: [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


CPIndex: Integer;


ShapeToAttach: [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


CPIndexToAttach: Integer;


Cancel: Boolean);


## Параметры


Shape - объект рабочего пространства,
 конечная точка которого была перемещена.


CPIndex - индекс конечной точки,
 которая была перемещена.


ShapeToAttach - объект рабочего
 пространства, к соединительной точке которого была присоединена точка
 Shape.


CPIndexToAttach - индекс конечной
 точки, к которой была присоединена точка Shape.


Cancel - параметр определяющий,
 будет ли происходить перемещение конечной точки.


## Описание


Конструктор CreateArgs создает
 аргумент события, возникающего после перемещения одной из конечных точек
 линии связи.


См. также:


[AttachCPEventArgs](AttachCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
