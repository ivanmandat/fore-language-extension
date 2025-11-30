# IScene3DHullDataSource.DeletePoint

IScene3DHullDataSource.DeletePoint
-


# IScene3DHullDataSource.DeletePoint


## Синтаксис


DeletePoint(Index: Integer);


## Параметры


Index - индекс
 точки.


## Описание


Метод DeletePoint удаляет точку,
 заданную по индексу.


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

	    Hull.DataSource.DeletePoint(4);

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера будет удалена точка с индексом «4».


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
