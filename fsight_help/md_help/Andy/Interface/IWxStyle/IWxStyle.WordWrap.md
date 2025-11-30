# IWxStyle.WordWrap

IWxStyle.WordWrap
-


# IWxStyle.WordWrap


## Синтаксис


WordWrap: [WxWordWrap](../../Enums/WxWordWrap.htm);


## Описание


Свойство WordWrap определяет
 перенос текста, содержащегося в объектах.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Style := Wsp.Styles.Item(0);

	    Style.WordWrap := WxWordWrap.BreakWords;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет установлен перенос текста по словам.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
