# IEaxWorkbook.Chart

IEaxWorkbook.Chart
-


# IEaxWorkbook.Chart


## Синтаксис


Chart: [IEaxWorkbookChart](../IEaxWorkbookChart/IEaxWorkbookChart.htm);


## Описание


Свойство Chart возвращает параметры
 диаграммы.


## Комментарии


Для работы с параметрами панели статистики используйте свойство [IEaxWorkbook.Statistics](IEaxWorkbook.Statistics.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей:


	- кнопку с наименованием «Button1»;


	- компоненты LanerBox
	 и LanerResultsBox;


	- компонент UiErAnalayzer
	 с наименованием «UiErAnalayzer1», являющийся источником данных для
	 LanerBox и LanerResultsBox.
	 В «UiErAnalayzer1» должна быть загружена рабочая книга БД временных
	 рядов.


Добавьте ссылки на системные сборки: Collection, Chart.


Пример является обработчиком события OnClick для компонента «Button1».
 Перед нажатием на кнопку выделите вычисляемый ряд.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Ea: IEaxAnalyzer;

	    Wb: IEaxWorkbook;

	    Ch: IEaxWorkbookChart;

	    Cap: IChartCaption;

	    Ind: String;

	Begin

	    Ea := UiErAnalyzer1.ErAnalyzer;

	    Wb := Ea As IEaxWorkbook;

	    Ch := Wb.Chart;

	    If Ch.Type = EaxWorkbookChartType.StatMethod Then

	        If Ch.SerieTypeAvailable(EaxWorkbookChartSerieType.UpperConfidenceLevel) Then

	            Ch.SerieTypeVisible(EaxWorkbookChartSerieType.UpperConfidenceLevel) := True;

	            Ind := Ch.SerieTypeIndex(EaxWorkbookChartSerieType.UpperConfidenceLevel).ToString;

	            Debug.WriteLine("Индекс ряда, соответствующего верхней доверительной границе: " + Ind);

	        End If;

	        If Ch.SerieTypeAvailable(EaxWorkbookChartSerieType.LowerConfidenceLevel) Then

	            Ch.SerieTypeVisible(EaxWorkbookChartSerieType.LowerConfidenceLevel) := True;

	            Ind := Ch.SerieTypeIndex(EaxWorkbookChartSerieType.LowerConfidenceLevel).ToString;

	            Debug.WriteLine("Индекс ряда, соответствующего нижней доверительной границе: " + Ind);

	        End If;

	    End If;

	    Cap := Ch.Chart.Caption;

	    Cap.Text := "Диаграмма";

	    Cap.Visible := True;

	End Sub Button1OnClick;


После выполнения примера для диаграммы рабочей книги будет отображен
 заголовок. Если для выделенного вычисляемого ряда доступны верхняя и нижняя
 доверительные границы, то они будут отображены на диаграмме. Индексы рядов,
 соответствующих доверительным границам, будут выведены в окно консоли.


См. также:


[IEaxWorkbook](IEaxWorkbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
