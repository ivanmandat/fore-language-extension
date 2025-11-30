# IScene3DHullDataSource.PointName

IScene3DHullDataSource.PointName
-


# IScene3DHullDataSource.PointName


## Синтаксис


PointName(Index: Integer): String;


## Параметры


Index - индекс
 точки.


## Описание


Свойство PointName определяет
 имя точки.


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

	    Hull.DataSource.PointName(0) := "Вершина";

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера будет изменено имя точки (сферы) на заданное.


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
