# IPrxTableIsland.ColumnsBehaviour

IPrxTableIsland.ColumnsBehaviour
-


# IPrxTableIsland.ColumnsBehaviour


## Синтаксис


ColumnsBehaviour: [PrxDataIslandHeaderBehaviour](../../Enums/PrxDataIslandHeaderBehaviour.htm);


## Описание


Свойство ColumnsBehaviour определяет
 поведение реляционной области данных при увеличении количества столбцов
 области данных.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


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

    TI.ColumnsBehaviour := PrxDataIslandHeaderBehaviour.Capture;

    TI.Save;

End Sub UserProc;


После выполнения примера будет задано поведение столбцов: «захват смежных
 столбцов» - при увеличении количества столбцов области данных, информация,
 расположенная в столбцах за областью данных, будет перекрываться данными
 из источника.


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
