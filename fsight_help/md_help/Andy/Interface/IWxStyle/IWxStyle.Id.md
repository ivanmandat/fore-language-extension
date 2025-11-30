# IWxStyle.Id

IWxStyle.Id
-


# IWxStyle.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 стиля оформления.


## Комментарии


По умолчанию стилям присваиваются идентификаторы «Style N», где N -
 номер стиля.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Metabase, Drawing.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Style := Wsp.CreateStyle;

	    Style.Id := "New_Style";

	    Style.IsPrivate := False;

	    Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    Style.ShadowBrushForeColor := GxColor.FromName("Yellow");

	    Style.TextAlignmentHorizontal := GxAlignment.Far;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера добавленный стиль будет отображен в коллекции
 стилей.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
