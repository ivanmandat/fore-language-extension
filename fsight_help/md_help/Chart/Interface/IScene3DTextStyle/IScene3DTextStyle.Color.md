# IScene3DTextStyle.Color

IScene3DTextStyle.Color
-


# IScene3DTextStyle.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 надписи.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    StF: IScene3DTextStyle;

	Begin

	    StF := s.DisplayedObjects.CoordinatePlanes.TextStyles.TextStyleOX;

	    StF.Color := New GxColor.CreateRGB(255,0,0);

	End Sub Chart3D;


После выполнения примера по оси OX будет изменен цвет шрифта на красный.


См. также:


[IScene3DTextStyle](IScene3DTextStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
