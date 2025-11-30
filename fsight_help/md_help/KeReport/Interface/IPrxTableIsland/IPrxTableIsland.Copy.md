# IPrxTableIsland.Copy

IPrxTableIsland.Copy
-


# IPrxTableIsland.Copy


## Синтаксис


Copy([Sheet: [IPrxSheet](../IPrxSheet/IPrxSheet.htm)
 = Null;] [Range: [IPrxRange](../IPrxRange/IPrxRange.htm)]):
 [IPrxTableIsland](IPrxTableIsland.htm);


## Параметры


Sheet - лист регламентного
 отчета, на который будет скопирована реляционная область данных;


Range - область листа (ячейка
 или диапазон ячеек), на которой будет размещена скопированная реляционная
 область данных.


## Описание


Метод Copy копирует реляционную
 область данных. В случае если не указываются параметры метода (Sheet/Range),
 то значения данных параметров для копии будут совпадать с параметрами
 исходной реляционной области.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Sheet: IPrxSheet;

    Range: ITabRange;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    Sheet := Report.Sheets.Item(0);

    Range := (Sheet As IPrxTable).TabSheet.Cell(20, 5);

    TI.Copy(Sheet, Range);

    MObj.Save;

End Sub UserProc;


После выполнения примера будет создана копия реляционной области данных.
 «Report» - идентификатор регламентного отчета.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
