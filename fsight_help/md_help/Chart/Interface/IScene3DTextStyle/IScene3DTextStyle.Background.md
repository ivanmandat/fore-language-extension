# IScene3DTextStyle.Background

IScene3DTextStyle.Background
-


# IScene3DTextStyle.Background


## Синтаксис


Background: [IScene3DTextBackground](../IScene3DTextBackground/IScene3DTextBackground.htm);


## Описание


Свойство Background определяет
 параметры фонового объекта надписи.


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


После выполнения примера по оси OX у надписи будет отражена обводка
 красного цвета.


См. также:


[IScene3DTextStyle](IScene3DTextStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
