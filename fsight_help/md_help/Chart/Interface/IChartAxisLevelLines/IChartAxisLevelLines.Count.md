# IChartAxisLevelLines.Count

IChartAxisLevelLines.Count
-


# IChartAxisLevelLines.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 линий уровня, расположенных на диаграмме.


## Комментарии


Для добавления линии уровня на диаграмму используйте метод [IChartAxisLevelLines.Add](IChartAxisLevelLines.Add.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 «EXPRESS», содержащего представление данных в виде диаграммы.


Добавьте ссылки на системные сборки Metabase, Express, Chart.


			Sub UserProc;

Var

    MB: IMetabase;

    eax: IEaxAnalyzer;

    Chart: IChart;

Begin

    MB := MetabaseClass.Active;

    eax := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    Chart := eax.Chart.Chart;

    Debug.Write("Количество линий уровня по оси X: ");

    Debug.WriteLine(Chart.AxisX.LevelLines.Count);

    Debug.Write("Количество линий уровня по оси Y: ");

    Debug.WriteLine(Chart.AxisY.LevelLines.Count);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество линий
 уровня по осям X и Y диаграммы.


См. также:


[IChartAxisLevelLines](IChartAxisLevelLines.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
