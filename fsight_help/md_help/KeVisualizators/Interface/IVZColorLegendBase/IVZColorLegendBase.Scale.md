# IVZColorLegendBase.Scale

IVZColorLegendBase.Scale
-


# IVZColorLegendBase.Scale


## Синтаксис


Scale: [IVZDataScale](../IVZDataScale/IVZDataScale.htm);


## Описание


Свойство Scale определяет шкалу
 для цветовой легенды визуализатора.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


До выполнения примера цветовая шкала пузырькового дерева выглядит так,
 как показано на странице [описания интерфейса
 IVZColorLegendBase](IVZColorLegendBase.htm). Установим для данной шкалы количество элементов,
 равное двум:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorLegend: IVZColorLegendBase;

	    Scale: IVZDataScale;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую легенду дерева

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Отключим отображение элемента «Нет данных»

	    ColorLegend.NoDataVisible := False;

	    // Получим шкалу цветовой легенды

	    Scale := ColorLegend.Scale;

	    // Определим количество элементов, равное двум

	    Scale.ItemsCount := 2;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для цветовой легенды пузырькового дерева
 было установлено количество элементов шкалы, равное двум, а также отключено
 отображение элемента «Нет данных»:


![](IVZColorLegendBase_Scale.png)


См. также:


[IVZColorLegendBase](IVZColorLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
