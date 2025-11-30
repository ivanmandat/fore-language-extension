# IVZColorLegendBase.BetweenFormat

IVZColorLegendBase.BetweenFormat
-


# IVZColorLegendBase.BetweenFormat


## Синтаксис


BetweenFormat: Variant;


## Описание


Свойство BetweenFormat определяет
 формат записи интервалов с обеими границами.


## Комментарии


Для определения подписи для элемента визуализатора, соответствующего
 отсутствующим данным, используйте [IVZColorLegendBase.NoDataText](IVZColorLegendBase.NoDataText.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_IVZCOLORLEGENDBASE.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorLegend: IVZColorLegendBase;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS_IVZCOLORLEGENDBASE").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим цветовую шкалу дерева

	    ColorLegend := BubbleTree.Legends.Item(0) As IVZColorLegendBase;

	    // Определим формат записи интервалов с обеими границами

	    ColorLegend.BetweenFormat := "{0:0.00} - {1:0.00}";

	    // Определим формат записи интервала с левой границей

	    ColorLegend.GreaterFormat := "От {0:0.00}";

	    // Определим формат записи интервала c правой границей

	    ColorLegend.LessFormat := "До {0:0.00}";

	    // Отобразим пузырёк, соответствующий отсутствующим данным

	    ColorLegend.NoDataVisible := True;

	    // Установим подпись для данного пузырька

	    ColorLegend.NoDataText := "Данные отсутствуют";

	    // Отобразим данный пузырёк перед остальными

	    ColorLegend.NoDataPosition := VisualizatorNoDataPosition.Before;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для интервалов шкалы пузырькового дерева
 с обеими границами был определён формат записи «{0:0.00} - {1:0.00}»,
 для интервала с левой границей - «От {0:0.00}», с правой границей - «До
 {0:0.00}». Пузырёк, соответствующий отсутствующим данным, был переименован
 как «Данные отсутствуют» и расположен перед остальными пузырьками дерева:


![](IVZColorLegendBase-BetweenFormat.png)


См. также:


[IVZColorLegendBase](IVZColorLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
