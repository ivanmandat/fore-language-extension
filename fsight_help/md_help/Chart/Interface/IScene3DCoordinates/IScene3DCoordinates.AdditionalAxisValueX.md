# IScene3DCoordinates.AdditionalAxisValueX

IScene3DCoordinates.AdditionalAxisValueX
-


# IScene3DCoordinates.AdditionalAxisValueX


## Синтаксис


AdditionalAxisValueX: Double;


## Описание


Свойство AdditionalAxisValueX
 возвращает координату по оси X выделенной сферы (точки).


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sphere: IScene3DSphere;

	    Value : Double;

	Begin

	    s.DisplayedObjects.Spheres.Count := 1;

	    sphere := s.DisplayedObjects.Spheres.Item(0);

	    sphere.R := 0.1;

	    sphere.Color := New GxColor.CreateRGB(255,0,0);

	    sphere.Selected := True;

	    Value := S.DisplayedObjects.SceneCoordinates.AdditionalAxisValueX;

	End Sub Chart3D;


После выполнения примера в переменной Value
 будет храниться координата по оси X.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
