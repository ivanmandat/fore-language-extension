# IChart.GetNegativeBackground

IChart.GetNegativeBackground
-


# IChart.GetNegativeBackground


## Синтаксис


GetNegativeBackground: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Метод GetNegativeBackground
 возвращает цвет заливки отрицательных столбцов диаграммы.


## Пример


Для выполнения примера предполагается наличие компонента Button с идентификатором
 «Button1», компонента Panel с идентификатором «Panel1» и наличие экспресс-отчета
 с идентификатором «EXPRESS_REPORT».


Подключите системные сборки: Chart, Express и Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    MB: IMetabase;

    Eax: IEaxAnalyzer;

    a, r, g, b: integer;

Begin

    //Подключаемся к репозиторию

    MB := MetabaseClass.Active;

    //Получаем экспресс-отчет

    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

    //Получаем диаграмму

    Chart := Eax.Chart As IChart;

    //Получаем заливку отрицательных столбцов

    a := Chart.GetNegativeBackground.Color.A;

    r := Chart.GetNegativeBackground.Color.R;

    g := Chart.GetNegativeBackground.Color.G;

    b := Chart.GetNegativeBackground.Color.B;

    Panel1.Color := New GxColor.CreateARGB(A, R, G, B);

End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки для компонента
 Panel будет установлен цвет отрицательных столбцов диаграммы экспресс-отчета
 «EXPRESS_REPORT».


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
