# IScene3DDataSource.ValueY

IScene3DDataSource.ValueY
-


# IScene3DDataSource.ValueY


## Синтаксис


ValueY(Index: Integer): Double;


## Параметры


Index - индекс значения по
 оси OY.


## Описание


Свойство ValueY изменяет значение
 по оси OY в источнике данных.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    i : integer;

	    s : IScene3D;

	    sur : IScene3DSurface;

	Begin

	    s.DisplayedObjects.Surfaces.Count := 1;

	    sur := s.DisplayedObjects.Surfaces.Item(0);

	    For i := 0 To 50 Do

	        sur.DataSource.NewRow := Math.Rand;

	    End For;

	    sur.DataSource.ValueY(25) := 0;

	End Sub Chart3D;


После выполнения примера будет изменено заданное по индексу значение
 по оси OY.


См. также:


[IScene3DDataSource](IScene3DDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
