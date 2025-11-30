# IWxSelectionStyle.RotationPointVisible

IWxSelectionStyle.RotationPointVisible
-


# IWxSelectionStyle.RotationPointVisible


## Синтаксис


RotationPointVisible: Boolean;


## Описание


Свойство RotationPointVisible
 определяет признак отображения точки вращения у выделенного объекта.


## Комментарии


Если свойство имеет значение True,
 то точка вращения будет отображаться, при значении False
 - нет.


По умолчанию свойство имеет значение True.


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

	    SStyle := view.SelectionStyle;

	    SStyle.RotationPointVisible := True;

	    SStyle.ActiveRotationPointColor := New GxColor.CreateRGB(0, 128, 255);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет включено отображение точки вращения выделенного
 объекта и задан цвет для активной точки вращения.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
