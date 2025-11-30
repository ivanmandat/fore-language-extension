# IPrxRange.Range

IPrxRange.Range
-


# IPrxRange.Range


## Синтаксис


Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Описание


Свойство Range возвращает объект,
 содержащий ячейку, либо диапазон ячеек.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Range: IPrxRange;

    TabRange: ITabRange;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Bind As IPrxReport;

    Range := Report.ParseCell("Лист2!B4");

    TabRange := Range.Range;

    v := TabRange.Value;

End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 ячейки, полученной в результате разбора абсолютного адреса ячейки - «Лист2!B4».


См. также:


[IPrxRange](IPrxRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
