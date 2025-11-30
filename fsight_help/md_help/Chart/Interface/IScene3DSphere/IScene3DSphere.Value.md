# IScene3DSphere.Value

IScene3DSphere.Value
-


# IScene3DSphere.Value


## Синтаксис


Value: Array;


## Описание


Свойство Value определяет координаты
 сферы (точки).


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sphere: IScene3DSphere;

	    a : array [0..2] Of Double;

	Begin

	    s.DisplayedObjects.Spheres.Count := 1;

	    sphere := s.DisplayedObjects.Spheres.Item(0);

	    sphere.R := 0.1;

	    sphere.Color := New GxColor.CreateRGB(255,0,0);

	    a[0] := 0.1;

	    a[1] := 0.2;

	    a[2] := 0.3;

	    sphere.Value := a;

	    s.Refresh;

	End Sub Chart3D;


После выполнения примера на сцене будет отображена сфера (точка) с заданными
 координатами.


См. также:


[IScene3DSphere](IScene3DSphere.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
