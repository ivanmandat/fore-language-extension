# IPivotInsteadOwnerTotalsSettings.OverallTotal

IPivotInsteadOwnerTotalsSettings.OverallTotal
-


# IPivotInsteadOwnerTotalsSettings.OverallTotal


## Синтаксис


OverallTotal: Boolean;


## Описание


Свойство OverallTotal определяет,
 будут ли выводиться значения общих итогов в строку родительского элемента.


## Комментарии


Допустимые значения:


	- False. Значения общих
	 итогов не будут выводиться в строку родительского элемента. Значение
	 по умолчанию;


	- True. Значения общих
	 итогов будут выводиться в строку родительского элемента.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс
 отчёта с идентификатором EXPRESS. Измерения шапки и боковика имеют несколько
 уровней.


Добавьте ссылки на системные сборки: Express, Pivot.


					Sub USerProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    Totals: IPivotEvaluatorTotals;

		    HeaderS: IPivotInsteadOwnerTotalsSettings;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим экспресс-отчет

		    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

		    // Получим настройки отображения таблицы данных отчета

		    Pivot := Express.Pivot;

		    // Получим коллекцию итогов таблицы

		    Totals := Pivot.Evaluator.Totals;

		    // Очистим коллекцию итогов

		    Totals.Clear;

		    // Установим тип итогов, рассчитываемых по строкам

		    Totals.RowTypes := PivotEvaluatorElementType.Sum;

		    // Установим тип итогов, рассчитываемых по столбцам

		    Totals.ColumnTypes := PivotEvaluatorElementType.Max;

		    // Включим расчет итогов по иерархии

		    Totals.HierarchyTotals := True;

		    // Настроим вывод итогов в строку родительского элемента боковика

		    HeaderS := totals.LeftHeaderSettings;

		    // Установим вывод в строку общего итога

		    HeaderS.OverallTotal := True;

		    // Установим вывод в строку итога по иерархии

		    HeaderS.HierarchyTotal := True;

		    // Установим тип итогов, выводящихся в строку

		    HeaderS.TotalType := PivotEvaluatorElementType.Sum;

		    // Установим тип наименования элемента

		    HeaderS.NamingMode := PivotTotalParentNamingMode.Combined;

		    // Установим тип разделителя

		    HeaderS.NameSeparator := "//";

		    // Настроим вывод итогов в строку родительского элемента шапки

		    HeaderS := totals.TopHeaderSettings;

		    // Установим вывод в строку общего итога

		    HeaderS.OverallTotal := True;

		    // Установим тип итогов, выводящихся в строку

		    HeaderS.TotalType := PivotEvaluatorElementType.Max;

		    // Установим тип наименования элемента

		    HeaderS.NamingMode := PivotTotalParentNamingMode.TotalMethod;

		    // Сохраним изменения

		    (Express As IMetabaseObject).Save;

		End Sub USerProc;


В результате выполнения примера в таблице экспресс-отчёта:


	- будут рассчитываться итоги по строкам и столбцам;


	- у боковика общий итог и итоги по иерархии будут выведены в строку
	 родительского элемента,тип итога - сумма, наименование элемента -
	 составное с разделителем «//»;


	- у шапки общий итог будет выведен в строку родительского элемента,
	 тип итога - максимум, наименование элемента - метод итога.


См. также:


[IPivotInsteadOwnerTotalsSettings](IPivotInsteadOwnerTotalsSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
