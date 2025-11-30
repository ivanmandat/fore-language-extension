# IPrxReport.ParseRange

IPrxReport.ParseRange
-


# IPrxReport.ParseRange


## Синтаксис


ParseRange(Address: String): [IPrxRange](../IPrxRange/IPrxRange.htm);


## Параметры


Address - полный адрес диапазона.


## Описание


Метод ParseRange возвращает
 объект, содержащий разобранный адрес диапазона ячеек.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PrxRange: IPrxRange;

	    Sheet: IPrxSheet;

	    Range: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    PrxRange := Report.ParseRange("Лист1!B1:C10");

	    Sheet := PrxRange.Sheet;

	    Range := PrxRange.Range;

	    Style := Range.Style;

	End Sub UserProc;


После выполнения примера в переменной «Sheet» будет содержаться лист
 с наименованием «Лист1», а в переменной «Style» будет содержаться стиль
 диапазона ячеек B1:C10, находящихся на этом листе. Идентификатор регламентного
 отчета - Report.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
