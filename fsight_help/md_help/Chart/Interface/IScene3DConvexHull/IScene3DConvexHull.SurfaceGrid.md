# IScene3DConvexHull.SurfaceGrid

IScene3DConvexHull.SurfaceGrid
-


# IScene3DConvexHull.SurfaceGrid


## Синтаксис


SurfaceGrid: [IScene3DGrid](../IScene3DGrid/IScene3DGrid.htm);


## Описание


Свойство SurfaceGrid определяет
 параметры линий, которые соединяют точки трехмерной поверхности. Работа
 с доступными параметрами осуществляется посредством интерфейса IScene3DGrid.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    Hull := Hulls.Item(0);

	    Hull.SurfaceGrid.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера линии, которые соединяют точки трехмерной поверхности,
 будут синего цвета.


См. также:


[IScene3DConvexHull](IScene3DConvexHull.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
