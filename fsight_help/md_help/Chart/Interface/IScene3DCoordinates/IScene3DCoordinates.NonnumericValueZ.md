# IScene3DCoordinates.NonnumericValueZ

IScene3DCoordinates.NonnumericValueZ
-


# IScene3DCoordinates.NonnumericValueZ


## Синтаксис


NonnumericValueZ(Index: Integer): String;


## Параметры


Index - индекс точки оси, нумерация
 начинается с нуля.


## Описание


Свойство NonnumericValueZ позволяет
 задавать пользовательские наименования точек оси Z. Для отображения нечисловых
 значений по оси, необходимо установить UseNumericAxes
 в False.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Chart3D2;

	Var

	    S : IScene3D;

	    i, point : Integer;

	Begin

	    point := s.DisplayedObjects.SceneCoordinates.AxisStep;

	    S.DisplayedObjects.SceneCoordinates.UseNumericAxes := False;

	    For i:= 0 To point Do

	        S.BeginUpdate

	        s.DisplayedObjects.SceneCoordinates.NonnumericValueZ(i) := "Точка" + i.ToString;

	        S.EndUpdate;

	    End For;

	End Sub Chart3D2;


После выполнения примера для каждой точки оси Z будут отображаться указанные
 наименования.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)
 | [IScene3DCoordinates.UseNumericAxes](IScene3DCoordinates.UseNumericAxes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
