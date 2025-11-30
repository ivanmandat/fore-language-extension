# IVZTimeLine.LastIndexAsInitial

IVZTimeLine.LastIndexAsInitial
-


# IVZTimeLine.LastIndexAsInitial


## Синтаксис


LastIndexAsInitial: Boolean;


## Описание


Свойство LastIndexAsInitial
 определяет, будет ли при открытии экспресс-отчета выполняться переход
 на последний шаг временной шкалы при отрицательном значении индекса.


## Комментарии


Отрицательное значение индекса автоматически приравнивается к «-1».


Допустимые значения:


	- True. Значение по умолчанию.
	 При открытии экспресс-отчета будет выполнен переход на последний шаг
	 временной шкалы;


	- False. При открытии
	 экспресс-отчета не будет выполнен переход на последний шаг временной
	 шкалы.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	    TimeLine: IVZTimeLine;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Получим временную шкалу карты

	    TimeLine := EMap.TimeLine;

	    // Установим значение текущего индекса

	    TimeLine.CurrentIndex := -1;

	    // Переход на последний шаг временной шкалы не происходит

	    TimeLine.LastIndexAsInitial := False;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера установлено значение текущего индекса
 «-1», при открытии экспресс-отчёта не будет выполнен переход на последний
 шаг временной шкалы.


См. также:


[IVZTimeLine](IVZTimeLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
