# IPrxRange.Sheet

IPrxRange.Sheet
-


# IPrxRange.Sheet


## Синтаксис


Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm);


## Описание


Свойство Sheet возвращает объект,
 содержащий лист регламентного отчета.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Range: IPrxRange;

    Sheet: IPrxSheet;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Bind As IPrxReport;

    Range := Report.ParseCell("Лист2!B4");

    Sheet := Range.Sheet;

    i := Sheet.Index;

End Sub UserProc;


После выполнения примера в переменной «i»
 будет содержаться индекс листа, полученного в результате разбора абсолютного
 адреса ячейки - «Лист2!B4».


См. также:


[IPrxRange](IPrxRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
