# IScene3DCoordinatePlanes.BackPlane

IScene3DCoordinatePlanes.BackPlane
-


# IScene3DCoordinatePlanes.BackPlane


## Синтаксис


BackPlane: [IScene3DPlane](../IScene3DPlane/IScene3DPlane.htm);


## Описание


Свойство BackPlane определяет
 параметры задней стенки сцены (плоскость XOZ). Работа с доступными параметрами
 осуществляется посредством интерфейса IScene3DPlane.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Plane : IScene3DCoordinatePlanes;

	Begin

	    Plane := s.DisplayedObjects.CoordinatePlanes;

	    Plane.BackPlane.Plane.Color := New GxColor.CreateRGB(255,0,0);

	End Sub Chart3D;


После выполнения примера цвет задней стенки сцены будет изменен на красный.


См. также:


[IScene3DCoordinatePlanes](IScene3DCoordinatePlanes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
