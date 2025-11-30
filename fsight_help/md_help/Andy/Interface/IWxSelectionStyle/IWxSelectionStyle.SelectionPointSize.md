# IWxSelectionStyle.SelectionPointSize

IWxSelectionStyle.SelectionPointSize
-


# IWxSelectionStyle.SelectionPointSize


## Синтаксис


SelectionPointSize: Double;


## Описание


Свойство SelectionPointSize
 определяет радиус точек выделения. Значение задается в миллиметрах.


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

	    SStyle.SelectionPointSize := 2;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет задан размер точек выделения объектов.


См. также:


[IWxSelectionStyle](IWxSelectionStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
