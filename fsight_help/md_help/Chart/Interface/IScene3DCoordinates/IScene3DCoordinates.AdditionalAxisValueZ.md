# IScene3DCoordinates.AdditionalAxisValueZ

IScene3DCoordinates.AdditionalAxisValueZ
-


# IScene3DCoordinates.AdditionalAxisValueZ


## Синтаксис


AdditionalAxisValueZ: Double;


## Описание


Свойство AdditionalAxisValueZ
 возвращает координату по оси Z выделенной сферы (точки).


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

	    Value := s.DisplayedObjects.SceneCoordinates.AdditionalAxisValueZ;

	End Sub Chart3D;


После выполнения примера в переменной Value будет храниться координата
 по оси Z.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
