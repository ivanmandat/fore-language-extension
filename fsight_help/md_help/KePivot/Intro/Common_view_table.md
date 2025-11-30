# Настройка отображения данных таблицы

Настройка отображения данных таблицы
-


# Настройка отображения данных таблицы


Рассмотрим пример получения основы для построения таблицы и настройки
 отображения данных таблицы экспресс-отчета.


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXPRESS», источником данных которого является стандартный
 куб.


## Пример


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Totals: IPivotEvaluatorTotals;

    HighItem: IPivotHighlightItem;

    Filter: IPivotFilterSettings;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    Pivot := Express.Pivot;

    //Итоги

    Totals := Pivot.Evaluator.Totals;

    Totals.RowTypes := PivotEvaluatorElementType.Sum + PivotEvaluatorElementType.Max;

    Totals.IncludeOwner := True;

    Totals.TreatEmptyAsZero := False;

    //Подсветка данных в диапазоне [10;20]

    HighItem := Pivot.Highlight.Add;

    HighItem.ConditionType := PivotHighlightType.NLAandNGB;

    HighItem.ConditionValueA := 10;

    HighItem.ConditionValueB := 20;

    HighItem.Area := PivotFilterArea.Table;

    HighItem.Enabled := True;

    //Фильтрация данных

    Filter := Pivot.Filter As IPivotFilterSettings;

    Filter.Enabled := True;

    Filter.UseCondition := True;

    Filter.ConditionType := PivotFilterType.NEqA;

    Filter.ConditionValueA := 25;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице экспресс-отчета будут выведены: итоги,
 будут подсвечены данные в диапазоне [10;20], будет осуществлена фильтрация
 по значениям не равным 25.


См. также:


[Общие
 принципы программирования с использованием сборки Pivot](KePivot_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
