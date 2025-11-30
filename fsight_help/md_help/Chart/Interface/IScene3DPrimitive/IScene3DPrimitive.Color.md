# IScene3DPrimitive.Color

IScene3DPrimitive.Color
-


# IScene3DPrimitive.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 объекта.


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

	End Sub Chart3D;


После выполнения примера на сцене будет отображена сфера (точка) красного
 цвета.


См. также:


[IScene3DPrimitive](IScene3DPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
