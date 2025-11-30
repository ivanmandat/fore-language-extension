# IVZTerritoryTranscript.SortingMode

IVZTerritoryTranscript.SortingMode
-


# IVZTerritoryTranscript.SortingMode


## Синтаксис


SortingMode: [VisualizatorSortingMode](../../Enums/VisualizatorSortingMode.htm);


## Описание


Свойство SortingMode определяет
 режим сортировки элементов в расшифровке территорий.


## Комментарии


Для определения режима выбора элементов в расшифровке территорий используйте
 [IVZTerritoryTranscript.SelectEvent](IVZTerritoryTranscript.SelectEvent.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    MC: IVZMapChart;

	    TT: IVZTerritoryTranscript;

	    Color: IGxColor;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    MC := Express.MapChart.MapChart;

	    // Получим расшифровку территорий

	    TT := MC.TerritoryTranscript;

	    // Включим расшифровку территорий

	    TT.Visible := True;

	    // Установим количество столбцов в расшифровке

	    TT.ColumnsCount := 2;

	    // Уменьшим масштаб карты

	    TT.IsOverlap := False;

	    // Установим максимальное количество элементов в расшифровке

	    TT.MaxItemsCount := 10;

	    // Изменим цвет шрифта элементов

	    Color := New GxColor.CreateRGB(120, 0, 120);

	    TT.ItemsStyle.FontColor := Color;

	    // Изменим режим сортировки - по возрастанию

	    TT.SortingMode := VisualizatorSortingMode.Asc;

	    // Изменим режим выбора элемента - по щелчку мыши

	    TT.SelectEvent := VisualizatorTerritoryTranscriptSelectEvent.SelectOnClick;

	    // Выведем в консоль наименование родительского слоя расшифровки

	    Debug.WriteLine("Наименование родительского слоя расшифровки - " + TT.ParentLayer.Name);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут применены изменения к расшифровке территорий.
 В консоль будет выведено наименование родительского слоя расшифровки.


См. также:


[IVZTerritoryTranscript](IVZTerritoryTranscript.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
