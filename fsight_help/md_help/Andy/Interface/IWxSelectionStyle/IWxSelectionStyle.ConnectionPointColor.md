# IWxSelectionStyle.ConnectionPointColor

IWxSelectionStyle.ConnectionPointColor
-


# IWxSelectionStyle.ConnectionPointColor


## Синтаксис


ConnectionPointColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство ConnectionPointColor
 определяет цвет точек соединения объектов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP».


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

	    SStyle.ConnectionPointColor := New GxColor.CreateRGB(0, 128, 255);

	    // Сохраняем изменения

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет задан цвет для точек соединения объектов.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
