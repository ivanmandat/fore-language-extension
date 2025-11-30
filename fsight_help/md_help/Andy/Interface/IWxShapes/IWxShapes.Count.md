# IWxShapes.Count

IWxShapes.Count
-


# IWxShapes.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 объектов рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    View: IWxView;

	    Shape: IWxShapes;

	    i: Integer;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    View := Wsp.CreateView;

	    Shape := Wsp.Shapes;

	    For i := 0 To Shape.Count - 1 Do

	        View.SelectedShapes.Add(wsp.Shapes.Item(i));

	    End For;

	    View.GroupSelectedShapes;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера все объекты, расположенные на рабочем пространстве
 будут объединены в группу.


См. также:


[IWxShapes](IWxShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
