# IWxSelectionStyle.SelectionPointStyle

IWxSelectionStyle.SelectionPointStyle
-


# IWxSelectionStyle.SelectionPointStyle


## Синтаксис


SelectionPointStyle: [WxSelectionPointStyle](../../Enums/WxSelectionPointStyle.htm);


## Описание


Свойство SelectionPointStyle
 определяет тип выделения объекта.


## Комментарии


Фактически определяет сколько точек будет видно при выделении объекта
 на рабочей области.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Metabase, Workspace.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    View: IWxView;

	    SStyle: IWxSelectionStyle;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    Wsp := MB.ItemById("WSP").Edit As IWxWorkspace;

	    View := Wsp.CreateView;

	    SStyle := View.SelectionStyle;

	    SStyle.SelectionPointStyle := WxSelectionPointStyle.Corners;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет установлен тип выделения в 4 точки.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
