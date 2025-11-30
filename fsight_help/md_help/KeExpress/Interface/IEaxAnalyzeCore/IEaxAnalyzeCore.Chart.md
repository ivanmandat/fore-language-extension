# IEaxAnalyzeCore.Chart

IEaxAnalyzeCore.Chart
-


# IEaxAnalyzeCore.Chart


## Синтаксис


Chart: [IEaxChart](../IEaxChart/IEaxChart.htm);


## Описание


Свойство Chart возвращает объект,
 содержащий диаграмму экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Chart: IEaxChart;

	Begin

	    MB:=MetabaseClass.Active;

	    Expr:=MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Chart:=Expr.Chart;

	End Sub UserProc;


После выполнения примера в переменной «Chart» будет содержаться диаграмма
 экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
