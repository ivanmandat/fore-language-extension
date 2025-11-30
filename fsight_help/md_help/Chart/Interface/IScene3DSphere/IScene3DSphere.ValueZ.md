# IScene3DSphere.ValueZ

IScene3DSphere.ValueZ
-


# IScene3DSphere.ValueZ


## Синтаксис


ValueZ: Double;


## Описание


Свойство ValueZ определяет координату
 сферы (точки) по оси OZ.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    sphere: IScene3DSphere;

	Begin

	    s.DisplayedObjects.Spheres.Count := 1;

	    sphere := s.DisplayedObjects.Spheres.Item(0);

	    sphere.R := 0.1;

	    sphere.Color := New GxColor.CreateRGB(255,0,0);

	    sphere.ValueX := 0.1;

	    sphere.ValueY := 0.2;

	    sphere.ValueZ := 0.3;

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
