# IScene3DTextStyle.Font

IScene3DTextStyle.Font
-


# IScene3DTextStyle.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет шрифт
 надписи.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    StF: IScene3DTextStyle;

	Begin

	    StF := s.DisplayedObjects.CoordinatePlanes.TextStyles.TextStyleOX;

	    StF.Font := New GxFont.Create("Arial Black", 10, 3 As GxFontStyle, 3 As GxUnit);

	End Sub Chart3D;


После выполнения примера по оси OX будет изменен шрифт на заданный.


См. также:


[IScene3DTextStyle](IScene3DTextStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
