# IScene3DCoordinateTextStyles.PrecisionOZ

IScene3DCoordinateTextStyles.PrecisionOZ
-


# IScene3DCoordinateTextStyles.PrecisionOZ


## Синтаксис


PrecisionOZ: Integer;


## Описание


Свойство PrecisionOZ определяет
 точность значений по оси OZ.


## Пример


В рассматриваемом примере предполагается существование объекта S типа
 IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Style : IScene3DCoordinateTextStyles;

	Begin

	    Style := s.DisplayedObjects.CoordinatePlanes.TextStyles;

	    Style.PrecisionOZ := 3;

	End Sub Chart3D;


После выполнения примера по оси OZ будут отражены значения с тремя десятичными
 знаками.


См. также:


[IScene3DCoordinateTextStyles](IScene3DCoordinateTextStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
