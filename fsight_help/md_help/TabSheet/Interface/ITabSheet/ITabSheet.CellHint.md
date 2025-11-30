# ITabSheet.CellHint

ITabSheet.CellHint
-


# ITabSheet.CellHint


## Синтаксис


CellHint(Row: Integer; Column: Integer): String;


## Параметры


Row. Номер строки ячейки. Допустимое
 значение параметра находится в диапазоне [0, [RowsCount](ITabSheet.RowsCount.htm)).


Column. Номер столбца ячейки.
 Допустимое значение параметра находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Описание


Свойство CellHint определяет
 всплывающую подсказку для указанной ячейки.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REP_TABSHEET».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("REP_TABSHEET").Edit As IPrxReport;

	    SheetT := Rep.Sheets.Item(0) As IPrxTable;

	    Tab := SheetT.TabSheet;

	    Tab.CellHint(0, 0) := "Подсказка";

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчете для ячейки «A0» ,будет
 задана всплывающая подсказка.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
