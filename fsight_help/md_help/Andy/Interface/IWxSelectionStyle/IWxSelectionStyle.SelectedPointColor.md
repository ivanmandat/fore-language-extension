# IWxSelectionStyle.SelectedPointColor

IWxSelectionStyle.SelectedPointColor
-


# IWxSelectionStyle.SelectedPointColor


## Синтаксис


SelectedPointColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство SelectedPointColor
 определяет цвет точек выделения всех предпоследних выделенных объектов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase, Workspace.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ws: IWxWorkspace;

	    view: IWxView;

	    SStyle: IWxSelectionStyle;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    ws := MB.ItemById("WSP").Edit As IWxWorkspace;

	    view := ws.CreateView;

	    SStyle := view.SelectionStyle;

	    SStyle.SelectedPointColor := GxColor.FromName("Blue");

	    // Сохраняем изменения

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет задан цвет точек выделения всех предпоследних
 выделенных объектов.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
