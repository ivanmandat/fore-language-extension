# IScene3DGrid.Weight

IScene3DGrid.Weight
-


# IScene3DGrid.Weight


## Синтаксис


Weight: Double;


## Описание


Свойство Weight определяет толщину
 линий координатной сетки.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.CoordinatePlanes.BackPlane.Grid.Weight := 3;

	End Sub Chart3D;


После выполнения примера толщина сетки задней стенки системы координат
 будет изменена на заданную.


См. также:


[IScene3DGrid](IScene3DGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
