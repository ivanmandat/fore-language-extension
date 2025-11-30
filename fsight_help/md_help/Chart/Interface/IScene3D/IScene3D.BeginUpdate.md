# IScene3D.BeginUpdate

IScene3D.BeginUpdate
-


# IScene3D.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate устанавливает
 запрет на обновление сцены. Метод используется для избежания мигания компонента
 при изменении его свойств. Снятие запрета осуществляет метод [IScene3D.EndUpdate](IScene3D.EndUpdate.htm).


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

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

	        S.BeginUpdate;

	        a[0] := Math.Rand*100 - Math.Rand*100;

	        a[1] := Math.Rand*100 - Math.Rand*100;

	        a[2] := Math.Rand*100 - Math.Rand*100;

	        Hulls.Item(0).DataSource.AddPoint("Point" + i.ToString, a, k, Color);

	        S.EndUpdate;

	    End For;

	End Sub Chart3D;


После выполнения примера будет построена поверхность, состоящая из 5
 точек. Построение поверхности основывалось на добавлении новой точки.


См. также:


[IScene3D](IScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
