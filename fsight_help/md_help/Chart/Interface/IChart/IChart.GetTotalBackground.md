# IChart.GetTotalBackground

IChart.GetTotalBackground
-


# IChart.GetTotalBackground


## Синтаксис


GetTotalBackground: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Метод GetTotalBackground возвращает
 цвет заливки итоговых столбцов диаграммы.


## Пример


Для выполнения примера предполагается наличие формы, на которой расположен
 компонента Button с наименованием Button1, компонента Panel с наименованием
 Panel1 и наличие в репозитории экспресс-отчёта с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Chart, Express и Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Chart: IChart;

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    a, r, g, b: Integer;

	Begin

	    //Подключаемся к репозиторию

	    MB := MetabaseClass.Active;

	    //Получаем экспресс-отчет

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    //Получаем диаграмму

	    Chart := Eax.Chart As IChart;

	    //Получаем заливку итоговых
	 столбцов

	    a := Chart.GetTotalBackground.Color.A;

	    r := Chart.GetTotalBackground.Color.R;

	    g := Chart.GetTotalBackground.Color.G;

	    b := Chart.GetTotalBackground.Color.B;

	    Panel1.Color := New GxColor.CreateARGB(A, R, G, B);

	End Sub Button1OnClick;


При нажатии на кнопку для компонента Panel будет установлен цвет итоговых
 столбцов диаграммы указанного экспресс-отчёта.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
