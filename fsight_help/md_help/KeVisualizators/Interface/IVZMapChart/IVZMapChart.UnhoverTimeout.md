# IVZMapChart.UnhoverTimeout

IVZMapChart.UnhoverTimeout
-


# IVZMapChart.UnhoverTimeout


## Синтаксис


UnhoverTimeout: Double;


## Описание


Свойство UnhoverTimeout определяет
 длительность анимации выделенной области.


## Комментарии


Значение длительности анимации задаётся в секундах.


Отрицательное значение расценивается как нулевое.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Зададим длительность анимации

	    EMap.UnhoverTimeout := 10;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера анимация выделенной области на карте
 будет продолжаться 10 секунд.


См. также:


[IVZMapChart](IVZMapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
