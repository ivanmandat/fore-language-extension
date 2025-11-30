# ITabSheet.EventMask

ITabSheet.EventMask
-


# ITabSheet.EventMask


## Синтаксис


EventMask: [TabViewEventGroups](../../Enums/TabViewEventGroups.htm);


## Описание


Свойство EventMask определяет,
 какие группы событий будут вызываться для [таблицы](ITabSheet.htm).


## Комментарии


По умолчанию для таблицы выполняются все события, кроме группы [TabViewEventGroups.EditorEvents](../../Enums/TabViewEventGroups.htm).


Использование данного свойства может существенно сэкономить время при
 размещении области данных, источник которой содержит довольно большую
 отметку, а также осуществить быстрое обновление такой области данных при
 смене отметки в измерении источника отчета.


## Пример


Ниже приведено использование данного свойства для экономии времени при
 вычислении области данных регламентного отчета.


Для выполнения следующего примера следует создать модуль (текст приведен
 ниже), затем создать регламентный отчет, для которого созданный ранее
 модуль определить как обработчик событий (указать класс EventsClass),
 на листе отчета необходимо создать область данных.


			Class EventsClass: ReportEvents

    start_ticks, end_ticks, ticks: Integer;


    Public Sub OnBeforeExecuteDataIsland(DataIsland: IPrxDataIsland; Var Cancel: Boolean);

    Var

        TSheet: ITabSheet;

    Begin

        TSheet := (DataIsland.Sheet As IPrxTable).TabSheet;

        TSheet.EventMask := TabViewEventGroups.ClickEvents Or

            TabViewEventGroups.InteractiveEvents Or

            TabViewEventGroups.NotifyEvents Or

            TabViewEventGroups.SelectionEvents;

        start_ticks := DateTime.Ticks;

    End Sub OnBeforeExecuteDataIsland;


    Public Sub OnAfterExecuteDataIsland(DataIsland: IPrxDataIsland);

    Var

        TSheet: ITabSheet;

    Begin

        end_ticks := DateTime.Ticks;

        TSheet := (DataIsland.Sheet As IPrxTable).TabSheet;

        TSheet.EventMask := TabViewEventGroups.AllEvents;

        ticks := end_ticks - start_ticks;

        WinApplication.InformationBox(ticks.ToString);

    End Sub OnAfterExecuteDataIsland;


End Class EventsClass;


До вычисления области данных (при наступлении события OnBeforeExecuteDataIsland)
 будут вызываться только указанные группы событий, остальные будут отключены
 (CellChangeEvents, ResizeEvents, EditEvents). После вычисления области
 данных для таблицы снова будут обрабатываться все события, а также будет
 выдано сообщение с миллисекундами, затраченными на произведение операции.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
