# IChartSerie.LabelsCount

IChartSerie.LabelsCount
-


# IChartSerie.LabelsCount


## Синтаксис


		LabelsCount: Integer;


## Описание


Свойство LabelsCount возвращает
 количество подписей данных у ряда.


## Пример


Для выполнения примера предполагается
 наличие в репозитории экспресс-отчета с идентификатором EXP_R, содержащего
 диаграмму.


Добавьте ссылки на системные сборки Chart, Express.


					Sub UserProc;

		 Var

		    MB: IMetabase;

		    EaxAnalyzer: IEaxAnalyzer;

		    Chart: IChart;

		    Serie: IChartSerie;

		    Count: Integer;

		 Begin

		    // Получим объект репозитория

		     MB := MetabaseClass.Active;

		    // Получим экспресс-отчёт

		     EaxAnalyzer := MB.ItemById("EXP_R").Bind As IEaxAnalyzer;

		    // Получим диаграмму экспресс-отчета

		     Chart := EaxAnalyzer.Chart.Chart;

		    // Получим ряд диаграммы

		     Serie := Chart.Series.Item(0);

		    // Посчитаем количество возможных подписей данных

		     Count:= Serie.LabelsCount;

		    // Выведем количество рядов

		     Debug.WriteLine("Количество рядов " + Serie.LabelsCount.ToString);

		 End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено количество
 возможных подписей данных.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
