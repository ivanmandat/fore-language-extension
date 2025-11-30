# IWxSelectionStyle.RoundedRectanglePointColor

IWxSelectionStyle.RoundedRectanglePointColor
-


# IWxSelectionStyle.RoundedRectanglePointColor


## Синтаксис


RoundedRectanglePointColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство RoundedRectanglePointColor
 определяет цвет точки скругления выделенного объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase, Workspace.


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

	    SStyle.RoundedRectanglePointColor := GxColor.FromName("Blue");

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет задан цвет точек скругления выделенного
 объекта.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
