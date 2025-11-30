# EtlAttachCPEventArgs.CreateArgs

EtlAttachCPEventArgs.CreateArgs
-


# EtlAttachCPEventArgs.CreateArgs


## Синтаксис


CreateArgs(Shape: [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);

           CPIndex:
 Integer;

           ShapeToAttache:
 [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);

           CPIndexToAttache:
 Integer;

           Cancel:
 Boolean);


## Параметры


Shape. Линия, у которой перемещается
 точка соединения;


CPIndex. Индекс точки соединения
 линии;


ShapeToAttache. Фигура, к которой
 была присоединена линия;


CPIndexToAttache. Индекс точки
 соединения фигуры, к которой была присоединена линия;


Cancel. Признак возможности
 перемещения.


## Описание


Конструктор CreateArgs создаёт
 аргумент события, связанного с завершением перемещения точки соединения.


См. также:


[EtlAttachCPEventArgs](EtlAttachCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
