# IScene3DHullDataSource.PointRadius

IScene3DHullDataSource.PointRadius
-


# IScene3DHullDataSource.PointRadius


## Синтаксис


PointRadius(Index: Integer): Double;


## Параметры


Index - индекс
 точки.


## Описание


Свойство PointRadius определяет
 радиус точки (сферы).


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hull := Hulls.Item(0);

	    Hull.DataSource.PointRadius(0) := 0.07;

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера будет изменен радиус точки (сферы) на заданный.


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
