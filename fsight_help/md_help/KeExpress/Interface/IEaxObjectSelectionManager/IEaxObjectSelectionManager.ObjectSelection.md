# IEaxObjectSelectionManager.ObjectSelection

IEaxObjectSelectionManager.ObjectSelection
-


# IEaxObjectSelectionManager.ObjectSelection


## Синтаксис


ObjectSelection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство ObjectSelection возвращает
 текущую отметку измерений.


## Комментарии


Для определения, выставлять ли отметку измерений по выделению в визуализаторе,
 используйте [IEaxObjectSelectionManager.TrackObjectSelection](IEaxObjectSelectionManager.TrackObjectSelection.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_SELECTIONMANAGER, который содержит диаграмму.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    analyzer: IEaxAnalyzer;

	    chart: IEaxObject;

	    objselmanager: IEaxObjectSelectionManager;

	    dimselectionset: IDimSelectionSet;

	    count: integer;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    analyzer := mb.ItemById("EXPRESS_SELECTIONMANAGER").Edit As IEaxAnalyzer;

	    // Получим диаграмму

	    chart := analyzer.Chart As IEaxObject;

	    // Получим управление отметками

	    objselmanager := chart.SelectionManager;

	    // Включим конвертацию отметки по выделению в визуальную отметку

	    objselmanager.AcceptDataSelection := True;

	    // Выставим отметки в измерениях

	    objselmanager.TrackObjectSelection := True;

	    // Получим объект с выделенными отметками

	    dimselectionset := objselmanager.ObjectSelection;

	    // Выведем количество измерений с выделенными отметками

	    count := dimselectionset.Count;

	    Debug.WriteLine("Количество измерений с активными отметками  = " + count.ToString);

	    //Сохраним изменения

	    (analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- в переменной «DimSelectionSet» будет хранится отметка измерений
	 по выделению в визуализаторе;


	- в окно консоли выведется количество измерений в отметке;


	- будет включена конвертация отметки по выделению в визуальную
	 отметку.


См. также:


[IEaxObjectSelectionManager](IEaxObjectSelectionManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
