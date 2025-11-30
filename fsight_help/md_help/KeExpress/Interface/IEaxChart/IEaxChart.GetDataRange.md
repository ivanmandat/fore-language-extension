# IEaxChart.GetDataRange

IEaxChart.GetDataRange
-


# IEaxChart.GetDataRange


## Синтаксис


GetDataRange: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Описание


Свойство GetDataRange возвращает
 диапазон ячеек, по которому строится диаграмма.


## Комментарии


Для определения диапазона выделенной области таблицы, по которому строится
 диаграмма, используйте свойство [IEaxChart.Range](IEaxChart.Range.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    EChart: IEaxChart;

	    Range: ITabRange;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    EChart := Expr.Chart;

	    Range := EChart.GetDataRange;

	End Sub UserProc;


После выполнения примера в переменной «Range» будет содержаться диапазон
 ячеек, по которому была построена диаграмма в экспресс-отчете.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
