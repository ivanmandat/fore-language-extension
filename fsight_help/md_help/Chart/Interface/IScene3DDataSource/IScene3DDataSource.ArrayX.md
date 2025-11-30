# IScene3DDataSource.ArrayX

IScene3DDataSource.ArrayX
-


# IScene3DDataSource.ArrayX


## Синтаксис


ArrayX : Array;


## Описание


Свойство ArrayX определяет все
 значения по оси OX.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Scene;

	Var

	    s : IScene3D;

	    sur : IScene3DSurface;

	    i, j : integer;

	    min, max : double;

	    x, y : array Of double;

	Begin

	    min := -5;

	    max := 5;

	    x := New Double[51];

	    y := New Double[51];

	    For i := 0 To 50 Do

	        x[i] := (max - min)/(50)*i + min;

	        y[i] := (max - min)/(50)*i + min;

	    End For;

	    x[0] := (max - min)/(50)*0 + min;

	    s.DisplayedObjects.Surfaces.Count := 1;

	    sur := s.DisplayedObjects.Surfaces.Item(0);

	    s.BeginUpdate;

	    sur.DataSource.ArrayX := x;

	    sur.DataSource.ArrayY := y;

	    For i := 0 To sur.DataSource.ColumnCount - 1 Do

	        For j := 0 To sur.DataSource.RowCount - 1 Do

	            sur.DataSource.ValueZ(i, j) := Math.sin(sur.DataSource.ValueX(i)) + Math.sin(sur.DataSource.ValueY(j));

	        End For;

	    End For;

	    s.EndUpdate;

	End Sub Scene;


После выполнения примера на сцене будет построена поверхность данных.


См. также:


[IScene3DDataSource](IScene3DDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
