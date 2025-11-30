# IEaxChart.Chart

IEaxChart.Chart
-


# IEaxChart.Chart


## Синтаксис


Chart: [IChart](Chart.chm::/Interface/IChart/IChart.htm);


## Описание


Свойство Chart возвращает объект,
 содержащий параметры отображения диаграммы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    EChart: IEaxChart;

	    Chart: IChart;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    EChart := Expr.Chart;

	    Chart := EChart.Chart;

	    Chart.Caption.Text := "Диаграмма экспресс-отчета";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для диаграммы экспресс-отчета будет изменен
 текст заголовка. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
