# IScene3DHullDataSource.Count

IScene3DHullDataSource.Count
-


# IScene3DHullDataSource.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 точек, заданных для построения.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	    Count : Integer;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hull := Hulls.Item(0);

	    Count := Hull.DataSource.Count;

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера в переменной Count будет храниться количество
 точек, заданных для построения


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
