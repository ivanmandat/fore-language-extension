# IScene3DTextBackground.Color

IScene3DTextBackground.Color
-


# IScene3DTextBackground.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 фонового объекта надписи.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	    StF: IScene3DTextStyle;

	Begin

	    StF := s.DisplayedObjects.CoordinatePlanes.TextStyles.TextStyleOX;

	    StF.Background.Type := 0 As Scene3DTextBackgroundType;

	    StF.Background.Color := New GxColor.CreateRGB(255,0,0);

	    StF.Background.Visible := True;

	End Sub Chart3D;


После выполнения примера по оси OX у надписей будет отражена обводка
 красного цвета.


См. также:


[IScene3DTextBackground](IScene3DTextBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
