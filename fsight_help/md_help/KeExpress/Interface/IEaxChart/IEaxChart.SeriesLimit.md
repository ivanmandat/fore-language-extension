# IEaxChart.SeriesLimit

IEaxChart.SeriesLimit
-


# IEaxChart.SeriesLimit


## Синтаксис


SeriesLimit: Integer;


## Описание


Свойство SeriesLimit определяет
 максимальное количество рядов, отображаемых на диаграмме.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    EChart: IEaxChart;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    EChart := Expr.Chart;

	    EChart.SeriesLimit := 150;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для диаграммы экспресс-отчета будет устнановлено
 максимальное количество отображаемых рядов - «150». Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
