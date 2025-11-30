# IScene3DCoordinateTextStyles.TextStyleAdditional

IScene3DCoordinateTextStyles.TextStyleAdditional
-


# IScene3DCoordinateTextStyles.TextStyleAdditional


## Синтаксис


TextStyleAdditional: [IScene3DTextStyle](../IScene3DTextStyle/IScene3DTextStyle.htm);


## Описание


Свойство TextStyleAdditional
 определяет стиль надписей координат выделенной сферы (точки).


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    sphere: IScene3DSphere;

	    Style : IScene3DCoordinateTextStyles;

	Begin

	    s.DisplayedObjects.Spheres.Count := 1;

	    sphere := s.DisplayedObjects.Spheres.Item(0);

	    sphere.R := 0.1;

	    sphere.Color := New GxColor.CreateRGB(255,0,0);

	    Style := s.DisplayedObjects.CoordinatePlanes.TextStyles;

	    Style.TextStyleAdditional.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет координат выделенной точки будет изменен
 на синий.


См. также:


[IScene3DCoordinateTextStyles](IScene3DCoordinateTextStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
