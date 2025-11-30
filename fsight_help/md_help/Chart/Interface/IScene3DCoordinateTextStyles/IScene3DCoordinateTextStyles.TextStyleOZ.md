# IScene3DCoordinateTextStyles.TextStyleOZ

IScene3DCoordinateTextStyles.TextStyleOZ
-


# IScene3DCoordinateTextStyles.TextStyleOZ


## Синтаксис


TextStyleOZ: [IScene3DTextStyle](../IScene3DTextStyle/IScene3DTextStyle.htm);


## Описание


Свойство TextStyleOZ определяет
 стиль надписей для оси OZ.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Style : IScene3DCoordinateTextStyles;

	Begin

	    Style := s.DisplayedObjects.CoordinatePlanes.TextStyles;

	    Style.TextStyleOZ.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет надписей по оси OZ будет изменен на синий.


См. также:


[IScene3DCoordinateTextStyles](IScene3DCoordinateTextStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
