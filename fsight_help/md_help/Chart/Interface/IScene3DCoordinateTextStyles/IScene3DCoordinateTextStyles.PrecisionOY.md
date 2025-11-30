# IScene3DCoordinateTextStyles.PrecisionOY

IScene3DCoordinateTextStyles.PrecisionOY
-


# IScene3DCoordinateTextStyles.PrecisionOY


## Синтаксис


PrecisionOY: Integer;


## Описание


Свойство PrecisionOY определяет
 точность значений по оси OY.


## Пример


В рассматриваемом примере предполагается существование объекта S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Style : IScene3DCoordinateTextStyles;

	Begin

	    Style := s.DisplayedObjects.CoordinatePlanes.TextStyles;

	    Style.PrecisionOY := 3;

	End Sub Chart3D;


После выполнения примера по оси OY будут отражены значения с тремя десятичными
 знаками.


См. также:


[IScene3DCoordinateTextStyles](IScene3DCoordinateTextStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
