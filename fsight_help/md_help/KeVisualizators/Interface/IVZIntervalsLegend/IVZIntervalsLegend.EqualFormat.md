# IVZIntervalsLegend.EqualFormat

IVZIntervalsLegend.EqualFormat
-


# IVZIntervalsLegend.EqualFormat


## Синтаксис


EqualFormat: Variant;


## Описание


Свойство EqualFormat определяет
 формат подписи интервалов, включающих в себя границы, в легенде с интервалами.


## Комментарии


Данное свойство актуально:


	- если свойство [IVZDataScale.EnableEquality](../IVZDataScale/IVZDataScale.EnableEquality.htm)
	 принимает значение True;


	- если свойство [IVZIntervalsLegend.IncludeEquals](IVZIntervalsLegend.IncludeEquals.htm)
	 принимает значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_IVZINTERVALSLEGEND. Отчёт содержит пузырьковое
 дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub Userproc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Intervals: IVZIntervalsLegend;

	    Scale: IVZDataScale;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_IVZINTERVALSLEGEND").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим легенду с интервалами

	    Intervals := BubbleTree.Legends.Item(0) As IVZIntervalsLegend;

	    // Получим размерную шкалу легенды

	    Scale := Intervals.Scale;

	    // Отобразим интервалы, имеющие границу

	    Intervals.Mode := VisualizatorLegendMode.BetweenOnly;

	    // Включим отображение формата подписи "Равно" на шкале легенды

	    Scale.EnableEquality := True;

	    Intervals.IncludeEquals := True;

	    // Изменим формат подписи

	    Intervals.EqualFormat := "{0:#,###0.000}";

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера формат записи интервалов, включающих в себя
 границы, изменится до трёх знаков после запятой.


См. также:


[IVZIntervalsLegend](IVZIntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
