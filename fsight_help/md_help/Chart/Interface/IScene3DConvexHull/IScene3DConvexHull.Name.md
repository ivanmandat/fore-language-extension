# IScene3DConvexHull.Name

IScene3DConvexHull.Name
-


# IScene3DConvexHull.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет имя
 трехмерной поверности.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    Hull := Hulls.Item(0);

	    Hulls.Item(0).Name := "Поверхность 1";

	End Sub Chart3D;


После выполнения примера поверхности с индексом «0» будет присвоено
 имя «Поверхность 1».


См. также:


[IScene3DConvexHull](IScene3DConvexHull.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
