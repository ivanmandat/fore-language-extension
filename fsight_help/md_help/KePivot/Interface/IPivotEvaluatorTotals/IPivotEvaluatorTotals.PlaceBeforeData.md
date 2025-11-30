# IPivotEvaluatorTotals.PlaceBeforeData

IPivotEvaluatorTotals.PlaceBeforeData
-


# IPivotEvaluatorTotals.PlaceBeforeData


## Синтаксис


PlaceBeforeData: Boolean;


## Описание


Свойство PlaceBeforeData определяет,
 выводить ли [итоги
 перед данными](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm#place_before_data).


## Комментарии


Допустимые значения:


	- True. Итоги будут размещаться
	 перед данными;


	- False. По умолчанию.
	 Итоги будут размещаться после данных.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub USerProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Totals: IPivotEvaluatorTotals;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим коллекцию итогов таблицы

    Totals := Pivot.Evaluator.Totals;

    // Установим тип итогов, рассчитываемых по строкам

    Totals.RowTypes := PivotEvaluatorElementType.Sum;

    // Включим расчет итогов по иерархии

    Totals.HierarchyTotals := True;

    // Отключим расчет итогов по уровням измерения

    Totals.LevelTotals := False;

    // Разместим итоги перед элементами
 измерения

    Totals.PlaceBeforeData := True;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub USerProc;


После выполнения примера в таблице будут расчитаны итоги по строкам.
 Расчет будет произведен по иерархии. Итоги будут отображаться перед ячейками
 с данными.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
