# IWxWorkspace.CreateDoubleBoxArrow

IWxWorkspace.CreateDoubleBoxArrow
-


# IWxWorkspace.CreateDoubleBoxArrow


## Синтаксис


CreateDoubleBoxArrow: [IWxDoubleBoxArrow](../IWxDoubleBoxArrow/IWxDoubleBoxArrow.htm);


## Описание


Метод CreateDoubleBoxArrow создает
 выноску с двумя стрелками.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    DBArrow: IWxDoubleBoxArrow;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    DBArrow := wsp.CreateDoubleBoxArrow;

	    DBArrow.ArrowHeightOffset := 3;

	    DBArrow.ArrowWidthOffset := 25;

	    DBArrow.BoxHeightOffset := 8;

	    DBArrow.BoxWidthOffset := 20;

	    DBArrow.PinPosition := New GxPointF.Create(12, 10);

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет создана выноска с двумя стрелками.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
