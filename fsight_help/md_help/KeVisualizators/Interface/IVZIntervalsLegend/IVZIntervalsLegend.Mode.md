# IVZIntervalsLegend.Mode

IVZIntervalsLegend.Mode
-


# IVZIntervalsLegend.Mode


## Синтаксис


Mode: [VisualizatorLegendMode](../../Enums/VisualizatorLegendMode.htm);


## Описание


Свойство Mode определяет режим
 отображения легенды с интервалами.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


До выполнения примера легенда с интервалами у пузырькового дерева выглядит
 так, как показано на странице [описания
 интерфейса IVZDataScale](../IVZDataScale/IVZDataScale.htm). Отобразим только те интервалы, у которых
 есть обе границы:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Legend: IVZIntervalsLegend;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим легенду

	    Legend := BubbleTree.Legends.Item(0) As IVZIntervalsLegend;

	    // Отобразим только интервалы, имеющие границы

	    Legend.Mode := VisualizatorLegendMode.BetweenOnly;

	    // Сохраним сделанные изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в легенде были отображены только те
 интервалы, которые имеют обе границы:


![](IVZIntervalsLegend_Mode.png)


См. также:


[IVZIntervalsLegend](IVZIntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
