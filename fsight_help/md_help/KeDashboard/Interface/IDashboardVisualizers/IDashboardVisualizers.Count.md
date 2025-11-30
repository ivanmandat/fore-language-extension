# IDashboardVisualizers.Count

IDashboardVisualizers.Count
-


# IDashboardVisualizers.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 визуализаторов в коллекции.


## Пример


Для выполнения примера в репозитории предполагается наличие информационной
 панели с идентификатором DASHBOARD.


Добавьте ссылки на системные сборки: Dashboard, Express, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Dashboard: IDashboard;

	    Visualizers: IDashboardVisualizers;

	    Visualizer: IDashboardVisualizer;

	    i, c: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие на редактирование информационной панели

	    Dashboard := Mb.ItemById("DASHBOARD").Bind As IDashboard;

	    Visualizers := Dashboard.Visualizers;

	    c := Visualizers.Count;

	    Debug.WriteLine("Количество визуализаторов: " + c.ToString);

	    // Информация о визуализаторах

	    For i := 0 To c - 1 Do

	        Visualizer := Visualizers.Item(i);

	        Debug.WriteLine("Визуализатор: " + Visualizer.Id);

	        If Not IsNull(Visualizer.EaxObject) Then

	            Select Case Visualizer.EaxObject.Type

	                Case EaxObjectType.Grid: Debug.WriteLine("   Таблица");

	                Case EaxObjectType.Chart: Debug.WriteLine("   Диаграмма");

	                Case EaxObjectType.Map: Debug.WriteLine("   Карта");

	                Else Debug.WriteLine(Visualizer.EaxObject.Type);

	            End Select;

	        End If;

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена общая
 информация о визуализаторах информационной панели.


См. также:


[IDashboardVisualizers](IDashboardVisualizers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
