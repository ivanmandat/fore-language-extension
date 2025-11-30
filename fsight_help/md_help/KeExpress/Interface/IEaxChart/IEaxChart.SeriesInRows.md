# IEaxChart.SeriesInRows

IEaxChart.SeriesInRows
-


# IEaxChart.SeriesInRows


## Синтаксис


SeriesInRows: Boolean;


## Описание


Свойство SeriesInRows определяет,
 каким образом будут браться ряды с данными.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом ряды с данными будут браться по строкам. Если свойству установить
 значение False, то ряды с данными
 будут браться по столбцам.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


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

	    EChart := Expr.Chart As IEaxChart;

	    EChart.SeriesInRows := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера при построении диаграммы экспресс-отчета ряды
 данных будут извлекаться по столбцам.


См. также:


[IEaxChart](IEaxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
