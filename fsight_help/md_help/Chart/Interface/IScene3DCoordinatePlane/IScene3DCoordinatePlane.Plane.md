# IScene3DCoordinatePlane.Plane

IScene3DCoordinatePlane.Plane
-


# IScene3DCoordinatePlane.Plane


## Синтаксис


Plane: [IScene3DPlane](../IScene3DPlane/IScene3DPlane.htm);


## Описание


Свойство Plane определяет параметры
 плоскости системы координат. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DPlane.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	Begin

	    S.DisplayedObjects.CoordinatePlanes.BackPlane.Plane.Color := New GxColor.CreateRGB(255,0,0);

	End Sub Chart3D;


После выполнения примера цвет задней стенки сцены будет изменен на красный.


См. также:


[IScene3DCoordinatePlane](IScene3DCoordinatePlane.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
