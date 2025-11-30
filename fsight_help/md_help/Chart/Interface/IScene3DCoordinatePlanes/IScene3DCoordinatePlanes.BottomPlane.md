# IScene3DCoordinatePlanes.BottomPlane

IScene3DCoordinatePlanes.BottomPlane
-


# IScene3DCoordinatePlanes.BottomPlane


## Синтаксис


BottomPlane: [IScene3DPlane](../IScene3DPlane/IScene3DPlane.htm);


## Описание


Свойство BottomPlane определяет
 параметры нижней стенки сцены (плоскость XOY ).


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.
 Работа с доступными параметрами осуществляется посредством интерфейса
 IScene3DPlane.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Plane : IScene3DCoordinatePlanes;

	Begin

	    Plane := s.DisplayedObjects.CoordinatePlanes;

	    Plane.BottomPlane.Grid.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет нижней стенки сцены будет изменен на синий.


См. также:


[IScene3DCoordinatePlanes](IScene3DCoordinatePlanes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
