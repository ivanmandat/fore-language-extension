# IScene3DDisplayedObjects.Surfaces

IScene3DDisplayedObjects.Surfaces
-


# IScene3DDisplayedObjects.Surfaces


## Синтаксис


Surfaces: [IScene3DSurfaces](../IScene3DSurface/IScene3DSurfaces.htm);


## Описание


Свойство Surfaces определяет
 поверхности представления данных. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DSurfaces.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sur : IScene3DSurface;

	    i, j : integer;

	    min, max : double;

	Begin

	    min := -5;

	    max := 5;

	    s.DisplayedObjects.Surfaces.Count := 1;

	    sur := s.DisplayedObjects.Surfaces.Item(0);

	    s.BeginUpdate;

	    For i := 0 To 50 Do

	        sur.DataSource.NewColumn := (max - min)/(50)*i + min;

	    End For;

	    sur.DataSource.ValueY(0) := (max - min)/(50)*0 + min;

	    For i := 1 To 50 Do

	        sur.DataSource.NewRow := (max - min)/(50)*i + min;

	    End For;

	    For i := 0 To sur.DataSource.ColumnCount - 1 Do

	        For j := 0 To sur.DataSource.RowCount - 1 Do

	            sur.DataSource.ValueZ(i, j) := Math.sin(sur.DataSource.ValueX(i)) + Math.sin(sur.DataSource.ValueY(j));

	        End For;

	    End For;

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера на сцене будет построена поверхность данных.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
