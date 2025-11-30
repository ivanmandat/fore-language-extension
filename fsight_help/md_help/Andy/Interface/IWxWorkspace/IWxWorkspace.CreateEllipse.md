# IWxWorkspace.CreateEllipse

IWxWorkspace.CreateEllipse
-


# WxWorkspace.CreateEllipse


## Синтаксис


CreateEllipse: [IWxEllipse](../IWxEllipse/IWxEllipse.htm);


## Описание


Метод CreateEllipse создает
 эллипс.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Ellipse: IWxEllipse;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    Ellipse := wsp.CreateEllipse;

	    Ellipse.Id := "Ellipse1";

	    Ellipse.PinPosition := New GxPointF.Create(12, -10);

	    Style := wsp.CreateStyle;

	    Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    Style.ShadowBrushForeColor := New GxColor.CreateRGB(0, 129, 255);

	    Style.ShadowBrushBackColor := New GxColor.CreateRGB(255, 87, 192);

	    Style.ShadowBrushPattern := GxBrushPattern.Diagonals;

	    Ellipse.Style := Style;

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет создан эллипс с заданными параметрами
 оформления.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
