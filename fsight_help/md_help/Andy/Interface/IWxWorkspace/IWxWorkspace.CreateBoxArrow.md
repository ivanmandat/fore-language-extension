# IWxWorkspace.CreateBoxArrow

IWxWorkspace.CreateBoxArrow
-


# IWxWorkspace.CreateBoxArrow


## Синтаксис


CreateBoxArrow: [IWxBoxArrow](../IWxBoxArrow/IWxBoxArrow.htm);


## Описание


Метод CreateBoxArrow создает
 выноску со стрелкой.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    BArrow: IWxBoxArrow;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    BArrow := ws.CreateBoxArrow;

	    BArrow.Id := "BoxArrow1";

	    BArrow.ArrowHeightOffset := 3;

	    BArrow.ArrowWidthOffset := 25;

	    BArrow.Angle := 40;

	    Style := ws.CreateStyle;

	    Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    Style.ShadowBrushForeColor := New GxColor.CreateRGB(0, 129, 255);

	    Style.ShadowBrushBackColor := New GxColor.CreateRGB(255, 87, 192);

	    Style.ShadowBrushPattern := GxBrushPattern.Diagonals;

	    BArrow.Style := Style;

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера на рабочем пространстве будет создана выноска
 со стрелкой, для которой будет создан свой стиль оформления.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
