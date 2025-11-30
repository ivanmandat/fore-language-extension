# IScene3DConvexHull.TextStyle

IScene3DConvexHull.TextStyle
-


# IScene3DConvexHull.TextStyle


## Синтаксис


TextStyle: [IScene3DTextStyle](../IScene3DTextStyle/IScene3DTextStyle.htm);


## Описание


Свойство TextStyle позволяет
 определить параметры надписей имен точек трехмерной поверхности. Работа
 с доступными параметрами осуществляется посредством объекта IScene3DTextStyle.


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

	    Hull.TextStyle.Color := New GxColor.CreateARGB(255,255,0,0);

	End Sub Chart3D;


После выполнения примера наименования вершин трехмерной поверности будут
 красного цвета.


См. также:


[IScene3DConvexHull](IScene3DConvexHull.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
