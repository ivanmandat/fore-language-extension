# IScene3DConvexHulls.Count

IScene3DConvexHulls.Count
-


# IScene3DConvexHulls.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count определяет количество
 трехмерных поверхностей в коллекции.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Hulls : IScene3DConvexHulls;

	    Hull : IScene3DConvexHull;

	    a : array [0..2] Of double;

	    i : integer;

	    k : Double;

	    Color : IGxColor;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    Hull := Hulls.Item(0);

	    k := 0.004;

	    Color := New GxColor.CreateARGB(255, 0,0, 255) ;

	    For i := 0 To 4 Do

	        S.BeginUpdate;

	        a[0] := Math.Rand*100 - Math.Rand*100;

	        a[1] := Math.Rand*100 - Math.Rand*100;

	        a[2] := Math.Rand*100 - Math.Rand*100;

	        Hull.DataSource.AddPoint("Point" + i.ToString, a, k, Color);

	        S.EndUpdate;

	    End For;

	End Sub Chart3D;


После выполнения примера будет построена одна трехмерная поверхность.


См. также:


[IScene3DConvexHulls](IScene3DConvexHulls.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
