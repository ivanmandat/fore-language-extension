# IPivotEvaluatorTotals.EvaluateForSingleElement

IPivotEvaluatorTotals.EvaluateForSingleElement
-


# IPivotEvaluatorTotals.EvaluateForSingleElement


## Синтаксис


EvaluateForSingleElement: Boolean;


## Описание


Свойство EvaluateForSingleElement
 определяет, рассчитывать ли итоги, если на уровне один элемент.


## Комментарии


Допустимые значения:


	- True. Итоги по уровню
	 с одним элементом будут рассчитаны;


	- False. Итоги по уровню
	 с одним элементом не будут рассчитаны. Значение по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS. Отчёт содержит таблицу, в которой выведены
 элементы разных уровней. На одном из уровней должен быть выведен только
 один элемент.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


					Sub UserProc;

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

		    // Установим тип итогов, рассчитываемых для строк

		    Totals.RowTypes := PivotEvaluatorElementType.Sum;

		    // Разместим итоги перед элементами измерения

		    Totals.PlaceBeforeData := True;

		    // Выключим расчёт итогов по иерархии

		    Totals.HierarchyTotals := False;

		    // Включим расчёт итогов для одного элемента

		    Totals.EvaluateForSingleElement := True;

		    // Сохраним изменения

		    (Express As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в таблице будут рассчитаны итоги для
 строк. Расчёт будет произведён по уровням и для уровня с единственным
 элементом тоже. Итоги будут отображаться перед ячейками с данными.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
