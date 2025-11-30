# IWxStyles.Item

IWxStyles.Item
-


# IWxStyles.Item


## Синтаксис


Item(Index: Integer): [IWxStyle](../IWxStyle/IWxStyle.htm);


## Параметры


Index. Индекс стиля.


## Описание


Свойство Item возвращает стиль
 по заданному индексу.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «IWSTYLE», содержащего стиль.


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

	    style := Sts.Item(0);

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
