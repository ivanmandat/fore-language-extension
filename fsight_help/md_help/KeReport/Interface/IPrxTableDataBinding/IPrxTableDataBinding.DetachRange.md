# IPrxTableDataBinding.DetachRange

IPrxTableDataBinding.DetachRange
-


# IPrxTableDataBinding.DetachRange


## Синтаксис


DetachRange(TabRange: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)):
 Boolean;


## Параметры


TabRange - диапазон ячеек.


## Описание


Метод DetachRange осуществляет
 отвязку диапазона ячеек от данных среза. Метод возвращает True
 при успешном завершении, False
 - при неудаче.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    SheetT: IPrxTable;

    Range: ITabRange;

    Result: Boolean;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    SheetT := Report.Sheets.Item(0) As IPrxTable;

    Range := SheetT.TabSheet.Cells(0, 0, 3, 2);

    Result := SheetT.DataBinding.DetachRange(Range);

    If Result Then

        WinApplication.InformationBox("Отвязка осуществлена");

    Else

        WinApplication.InformationBox("Отвязка не осуществлена");

    End If;

End Sub UserProc;


После выполнения примера будет выдано сообщение, в зависимости от результата
 метода.


См. также:


[IPrxTableDataBinding](IPrxTableDataBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
