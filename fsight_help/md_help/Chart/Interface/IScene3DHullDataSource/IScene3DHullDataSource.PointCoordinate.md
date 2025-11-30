# IScene3DHullDataSource.PointCoordinate

IScene3DHullDataSource.PointCoordinate
-


# IScene3DHullDataSource.PointCoordinate


## Синтаксис


PointCoordinate(Index: Integer): Array;


## Параметры


Index - индекс точки.


## Описание


Свойство PointCoordinate определяет
 координаты точки.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	    a : array [0..2] Of Double;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hull := Hulls.Item(0);

	    a[0] := Math.Rand*100 - Math.Rand*100;

	    a[1] := Math.Rand*100 - Math.Rand*100;

	    a[2] := Math.Rand*100 - Math.Rand*100;

	    Hull.DataSource.PointCoordinate(0) := a;

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера будут изменены координаты точки с индексом
 «0».


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
