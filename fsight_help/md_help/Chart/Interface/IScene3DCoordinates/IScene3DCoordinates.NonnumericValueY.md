# IScene3DCoordinates.NonnumericValueY

IScene3DCoordinates.NonnumericValueY
-


# IScene3DCoordinates.NonnumericValueY


## Синтаксис


NonnumericValueY(Index: Integer): String;


## Параметры


Index - индекс точки оси, нумерация
 начинается с нуля.


## Описание


Свойство NonnumericValueY позволяет
 задавать пользовательские наименования точек оси Y. Для отображения нечисловых
 значений по оси, необходимо установить UseNumericAxes
 в False.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    i, point : Integer;

	Begin

	    point := s.DisplayedObjects.SceneCoordinates.AxisStep;

	    S.DisplayedObjects.SceneCoordinates.UseNumericAxes := False;

	    For i:= 0 To point Do

	        S.BeginUpdate;

	        s.DisplayedObjects.SceneCoordinates.NonnumericValueY(i) := "Точка" + i.ToString;

	        S.EndUpdate;

	    End For;

	End Sub Chart3D;


После выполнения примера для каждой точки оси Y будут отображаться указанные
 наименования.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)
 | [IScene3DCoordinates.UseNumericAxes](IScene3DCoordinates.UseNumericAxes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
