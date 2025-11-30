# IPrxSheet.Index

IPrxSheet.Index
-


# IPrxSheet.Index


## Синтаксис


Index: Integer;


## Описание


Свойство Index возвращает индекс
 листа в списке.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxSheet;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REPORT").Bind As IPrxReport;

    Sheet := Report.ActiveSheet;

    i := Sheet.Index;

End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться индекс активного
 листа регламентного отчета. Идентификатор регламентного отчета - «Report».


См. также:


[IPrxSheet](IPrxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
