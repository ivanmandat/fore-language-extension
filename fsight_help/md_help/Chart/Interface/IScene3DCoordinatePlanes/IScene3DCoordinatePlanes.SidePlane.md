# IScene3DCoordinatePlanes.SidePlane

IScene3DCoordinatePlanes.SidePlane
-


# IScene3DCoordinatePlanes.SidePlane


## Синтаксис


SidePlane: [IScene3DPlane](../IScene3DPlane/IScene3DPlane.htm);


## Описание


Свойство SidePlane определяет
 параметры боковой стенки сцены (плоскость YOZ). Работа с доступными параметрами
 осуществляется посредством интерфейса IScene3DPlane.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Plane : IScene3DCoordinatePlanes;

	Begin

	    Plane := S.DisplayedObjects.CoordinatePlanes;

	    Plane.SidePlane.Grid.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет сетки боковой стенки сцены будет изменен
 на синий.


См. также:


[IScene3DCoordinatePlanes](IScene3DCoordinatePlanes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
