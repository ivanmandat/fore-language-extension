# IWxSelectionStyle.GroupFrameColor

IWxSelectionStyle.GroupFrameColor
-


# IWxSelectionStyle.GroupFrameColor


## Синтаксис


GroupFrameColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство GroupFrameColor определяет
 цвет рамки у выделенной группы.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP».


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

	    SStyle := view.SelectionStyle;

	    SStyle.GroupFrameVisible := True;

	    SStyle.GroupFrameColor := New GxColor.CreateRGB(120, 0, 120);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера у выделенной группы объектов на рабочем пространстве
 будет отображаться рамка заданного цвета.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
