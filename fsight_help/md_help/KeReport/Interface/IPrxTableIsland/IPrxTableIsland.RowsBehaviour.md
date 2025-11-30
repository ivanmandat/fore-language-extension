# IPrxTableIsland.RowsBehaviour

IPrxTableIsland.RowsBehaviour
-


# IPrxTableIsland.RowsBehaviour


## Синтаксис


RowsBehaviour: [PrxDataIslandHeaderBehaviour](../../Enums/PrxDataIslandHeaderBehaviour.htm);


## Описание


Свойство RowsBehaviour определяет
 поведение реляционной области данных при увеличении количества строк области
 данных. Если данное свойство установлено в Insert,
 то необходимо определить свойство [RowsToInsert](IPrxTableIsland.RowsToInsert.htm).


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    TI.RowsBehaviour := PrxDataIslandHeaderBehaviour.Insert;

    TI.RowsToInsert := 100;

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет задано поведение строк: «Вставка N строк
 за раз» - при увеличении количества строк области данных на лист отчета
 будет добавлено необходимое количество строк, за итерацию будет происходить
 вставка 100 строк.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
