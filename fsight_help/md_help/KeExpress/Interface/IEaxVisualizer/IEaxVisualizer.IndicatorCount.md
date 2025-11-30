# IEaxVisualizer.IndicatorCount

IEaxVisualizer.IndicatorCount
-


# IEaxVisualizer.IndicatorCount


## Синтаксис


IndicatorCount: Integer;


## Описание


Свойство IndicatorCount возвращает
 количество метрик визуализатора.


## Комментарии


Метрики позволяют управлять характеристиками визуализатора. Например,
 используемый цвет шрифта выбирается в зависимости от значения метрики.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, в котором должны находиться визуализаторы:
 пузырьковое дерево и плоское дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TM: IEaxVisualizer;

	    BT: IEaxVisualizer;

	    I, K: Integer;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим плоское дерево из экспресс-отчета

	    TM := EaxAnalyzer.TreeMap;

	    // Выведем в окно консоли количество метрик плоского дерева

	    I := TM.IndicatorCount;

	    Debug.WriteLine("Количество метрик плоского дерева = " + i.ToString);

	    // Получим пузырьковое дерево из экспресс-отчета

	    BT := EaxAnalyzer.BubbleTree;

	    // Выведем в окно консоли количество метрик пузырькового дерева

	    Debug.WriteLine("Количество метрик пузырькового дерева = " + k.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли выведутся количество метрик
 плоского и пузырькового деревьев.


См. также:


[IEaxVisualizer](IEaxVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
