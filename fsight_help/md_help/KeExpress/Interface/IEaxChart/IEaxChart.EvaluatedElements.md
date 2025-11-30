# IEaxChart.EvaluatedElements

IEaxChart.EvaluatedElements
-


# IEaxChart.EvaluatedElements


## Синтаксис


EvaluatedElements: [EaxChartEvaluatedElements](../../Enums/EaxChartEvaluatedElements.htm);


## Описание


Свойство EvaluatedElements
 определяет тип вычисляемых элементов, отображаемых на диаграмме.


## Комментарии


По умолчанию на диаграмме отображаются только фактические данные диапазона,
 который задан в свойстве [Range](IEaxChart.Range.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


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

	    EChart.EvaluatedElements := EaxChartEvaluatedElements.Totals;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера на диаграмме экспресс-отчета будет включено
 отображение итоговых данных.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
