# IWxWorkspace.CreateView

IWxWorkspace.CreateView
-


# IWxWorkspace.CreateView


## Синтаксис


CreateView: [IWxView](../IWxView/IWxView.htm);


## Описание


Метод CreateView создает отображение
 рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    view: IWxView;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    view := ws.CreateView;

	    view.Id := "MyView";

	    view.Scale := 0.5;

	    view.Size := New GxSizeF.Create(100.55, 100.66);

	    view.Offset := New GxPointF.Create(10, 3);

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет создано отображение рабочего пространства
 и заданы его идентификатор, масштаб, размер и смещение центра.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
