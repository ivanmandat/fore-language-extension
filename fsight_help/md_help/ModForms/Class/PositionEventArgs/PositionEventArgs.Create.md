# PositionEventArgs.Create

PositionEventArgs.Create
-


# PositionEventArgs.Create


## Синтаксис


Create(Width: Integer; Height: Integer; Point: [IPoint](../../Interface/IPoint/IPoint.htm));


## Параметры


Width - новая ширина компонента.


Height - новая высота компонента.


Point - новая координата верхнего левого угла компонента.


## Описание


Конструктор Create создает аргумент событий, возникающих при перемещении компонента, либо при изменении его размеров.


## Комментарии


События, использующие данный аргумент:


-
[OnControlMove](../../Interface/IControl/IControl.OnControlMove.htm) - возникает при перемещении компонента.


-
[OnControlResize](../../Interface/IControl/IControl.OnControlResize.htm) - возникает при изменении размеров компонента.


См. также:


[PositionEventArgs](PositionEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
