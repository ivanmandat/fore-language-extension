# IVZDataScale.RoundBias

IVZDataScale.RoundBias
-


# IVZDataScale.RoundBias


## Синтаксис


RoundBias: Double;


## Описание


Свойство RoundBias определяет
 значение, до которого необходимо округлить значения границ интервалов
 шкалы.


## Комментарии


Данное свойство преобразовывает значение к более удобочитаемым для пользователя.


Для округления интервала необходимо, чтобы указанное в данном свойстве
 значение не нарушало значения элементов в каждом промежутке.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего пузырьковое дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


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

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую шкалу дерева

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Получим шкалу цветовой легенды

	    Scale := ColorLegend.Scale;

	    // Округлим значения шкалы

	    Scale.RoundBias := 1000;

	    // Обновим отчёт и сохраним изменения

	    Analyzer.RefreshAll;

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера значения границ цветовой легенды пузырькового
 дерева, которые близки к 1000, округлятся до этого значения.


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
