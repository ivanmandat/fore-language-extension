# IScene3DDisplayedObjects.SceneCoordinates

IScene3DDisplayedObjects.SceneCoordinates
-


# IScene3DDisplayedObjects.SceneCoordinates


## Синтаксис


SceneCoordinates: [IScene3DCoordinates](../IScene3DCoordinates/IScene3DCoordinates.htm);


## Описание


Свойство SceneCoordinates определяет
 параметры системы координат. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DCoordinates.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    i, point : Integer;

	Begin

	    point := s.DisplayedObjects.SceneCoordinates.AxisStep;

	    S.DisplayedObjects.SceneCoordinates.UseNumericAxes := False;

	    For i:= 0 To point Do

	        S.BeginUpdate;

	        s.DisplayedObjects.SceneCoordinates.NonnumericValueX(i) := "Точка" + i.ToString;

	        S.EndUpdate;

	    End For;

	End Sub Chart3D;


После выполнения примера для каждой точки оси Х будут отображаться указанные
 наименования.


См. также:


[IScene3DDisplayedObjects](IScene3DDisplayedObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
