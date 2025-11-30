# IScene3DCoordinateTextStyles.TextStyleOX

IScene3DCoordinateTextStyles.TextStyleOX
-


# IScene3DCoordinateTextStyles.TextStyleOX


## Синтаксис


TextStyleOX: [IScene3DTextStyle](../IScene3DTextStyle/IScene3DTextStyle.htm);


## Описание


Свойство TextStyleOX определяет
 стиль надписей для оси OX.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    S : IScene3D;

	    Style : IScene3DCoordinateTextStyles;

	Begin

	    Style := s.DisplayedObjects.CoordinatePlanes.TextStyles;

	    Style.TextStyleOX.Color := New GxColor.CreateARGB(255,0,0,255);

	End Sub Chart3D;


После выполнения примера цвет надписей по оси OX будет изменен на синий.


См. также:


[IScene3DCoordinateTextStyles](IScene3DCoordinateTextStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
