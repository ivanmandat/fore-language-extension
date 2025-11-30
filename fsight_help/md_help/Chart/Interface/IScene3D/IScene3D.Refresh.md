# IScene3D.Refresh

IScene3D.Refresh
-


# IScene3D.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh осуществляет принудительное
 обновление изображения трехмерной сцены.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Volume3D;

	Var

	S : IScene3D;

	Hulls : IScene3DConvexHulls;

	a : array [0..2] Of double;

	i : integer;

	k : Double;

	Color : IGxColor;

	Begin

	    Hulls := S.DisplayedObjects.ConvexHulls;

	    Hulls.Count := 1;

	    k := 0.004;

	    Color := New GxColor.CreateARGB(255, 0,0, 255) ;

	    For i := 0 To 4 Do

	        a[0] := Math.Rand*100 - Math.Rand*100;

	        a[1] := Math.Rand*100 - Math.Rand*100;

	        a[2] := Math.Rand*100 - Math.Rand*100;

	        Hulls.Item(0).DataSource.AddPoint("Point" + i.ToString, a, k, Color);

	        s.Refresh;

	    End For;

	End Sub Volume3D;


После выполнения примера будет построена замкнутая поверхность, состоящая
 из 5 точек.


См. также:


[IScene3D](IScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
