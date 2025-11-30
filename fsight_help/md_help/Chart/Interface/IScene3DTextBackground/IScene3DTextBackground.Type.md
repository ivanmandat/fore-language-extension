# IScene3DTextBackground.Type

IScene3DTextBackground.Type
-


# IScene3DTextBackground.Type


## Синтаксис


Type: [Scene3DTextBackgroundType](../../Enums/Scene3DTextBackgroundType.htm);


## Описание


Свойство Type определяет тип
 фона надписи.


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
