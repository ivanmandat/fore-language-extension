# IScene3DCoordinatePlane.Grid

IScene3DCoordinatePlane.Grid
-


# IScene3DCoordinatePlane.Grid


## Синтаксис


Grid: [IScene3DGrid](../IScene3DGrid/IScene3DGrid.htm);


## Описание


Свойство Grid определяет параметры
 сетки плоскости системы координат.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	Begin

	    S.DisplayedObjects.CoordinatePlanes.BackPlane.Grid.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет сетки задней стенки сцены будет изменен
 на синий.


См. также:


[IScene3DCoordinatePlane](IScene3DCoordinatePlane.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
