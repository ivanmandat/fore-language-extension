# IWxStyles.FindById

IWxStyles.FindById
-


# IWxStyles.FindById


## Синтаксис


FindById(Id: String): [IWxStyle](../IWxStyle/IWxStyle.htm);


## Параметры


Id. Идентификатор;


## Описание


Метод FindById осуществляет
 поиск стиля по заданному идентификатору.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «IWSTYLE», содержащего стиль с идентификатором «New_Style».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Sts: IWxStyles;

	    style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Sts := ws.Styles;

	    style := Sts.FindById("New_Style");

	    style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для найденного стиля будет изменен цвет заливки
 фона.


См. также:


[IWxStyles](IWxStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
