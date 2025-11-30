# IPrxReport.ParseCell

IPrxReport.ParseCell
-


# IPrxReport.ParseCell


## Синтаксис


ParseCell(Address: String): [IPrxRange](../IPrxRange/IPrxRange.htm);


## Параметры


Address - полный адрес ячейки.


## Описание


Метод ParseCell возвращает объект,
 содержащий разобранный адрес ячейки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PrxRange: IPrxRange;

	    Sheet: IPrxSheet;

	    Range: ITabRange;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Bind As IPrxReport;

	    PrxRange := Report.ParseCell("Лист1!B4");

	    Sheet := PrxRange.Sheet;

	    Range := PrxRange.Range;

	    v := Range.Value;

	End Sub UserProc;


После выполнения примера в переменной «Sheet»
 будет содержаться лист с наименованием «Лист1»,
 а в переменной «v» будет содержаться
 значение ячейки «B4», находящейся
 на этом листе. Идентификатор регламентного отчета - «Report».


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
