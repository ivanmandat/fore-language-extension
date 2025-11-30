# IWxPageSettings.FitToPages

IWxPageSettings.FitToPages
-


# IWxPageSettings.FitToPages


## Синтаксис


FitToPages: Boolean;


## Описание


Свойство FitToPages определяет
 размещение и печать рабочего пространства на заданном количестве страниц
 по горизонтали и вертикали.


## Комментарии


По умолчанию свойство имеет значение True.
 Определите количество страниц по горизонтали ([PageWidth](IWxPageSettings.PageWidth.htm))
 и вертикали ([PageHeight](IWxPageSettings.PageHeight.htm)).


Если значение свойства False,
 то определите масштаб рабочего пространства ([Scale](IWxPageSettings.Scale.htm)).


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    PS: IWxPageSettings;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    PS := wsp.PageSettings;

	    PS.FitToPages := True;

	    PS.PageHeight := 2;

	    PS.PageWidth := 3;

	    (wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера при печати рабочее пространство будет размещено
 не более чем на 3 страницах в ширину и 2 страниц в высоту.


См. также:


[IWxPageSettings](IWxPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
