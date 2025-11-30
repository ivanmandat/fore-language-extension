# IScene3DHullDataSource.PointColor

IScene3DHullDataSource.PointColor
-


# IScene3DHullDataSource.PointColor


## Синтаксис


PointColor(Index: Integer): [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Параметры


Index - индекс
 точки.


## Описание


Свойство PointColor определяет
 цвет точки.


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

	    Hull.DataSource.PointColor(0) := New GxColor.CreateRGB(255,0,0);

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера будет изменен цвет точки (сферы) с индексом
 «0» на красный.


См. также:


[IScene3DHullDataSource](IScene3DHullDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
