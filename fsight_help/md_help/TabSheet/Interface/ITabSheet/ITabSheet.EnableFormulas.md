# ITabSheet.EnableFormulas

ITabSheet.EnableFormulas
-


# ITabSheet.EnableFormulas


## Синтаксис


EnableFormulas: Boolean;


## Описание


Свойство EnableFormulas определяет, будут ли вычисляться формулы в ячейках.


## Комментарии


Допустимые значения:


-
True. Формулы в ячейках будут вычисляться;


-
False. Формулы в ячейках не будут вычисляться.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором «Reg_rep».


Добавьте ссылки на системные сборки «Metabase», «Report» и «Tab».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Rep: IPrxReport;

    Tab: ITabSheet;

    Sheet: IPrxTable;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Reg_rep").Edit;

    Rep := MObj As IPrxReport;

    Sheet := Rep.Sheets.Item(0) As IPrxTable;

    Tab := Sheet.TabSheet;

    Tab.Cell(0, 0).Value := 10;

    Tab.Cell(0, 1).Value := 20;

    Tab.Cell(0, 2).Value := 30;

    Tab.EnableFormulas := True;

    Tab.Cell(1, 0).Formula := "=A0+B0";

    Tab.Cell(1, 1).Formula := Tab.AdjustFormula(Tab.Cell(1, 0).Formula, Tab.Cell(1, 0), Tab.Cell(1, 1));

    MObj.Save;

End Sub UserProc;


После выполнения примера для ячейки «А1» будет установлена формула, суммирующая значение ячеек «А0» и «В0». После этого данная формула будет скорректирована для ячейки «В1».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
