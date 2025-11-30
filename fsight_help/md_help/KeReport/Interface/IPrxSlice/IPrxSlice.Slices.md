# IPrxSlice.Slices

IPrxSlice.Slices
-


# IPrxSlice.Slices


## Синтаксис


Slices: [IPrxSlices](../IPrxSlices/IPrxSlices.htm);


## Описание


Свойство Slices возвращает коллекцию
 срезов источника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT, в котором содержатся хотя бы два среза
 источника данных.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DIs: IPrxDataIslands;

	    DI: IPrxDataIsland;

	    Slices: IPrxSlices;

	    SlicesCount, i: Integer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Bind As IPrxReport;

	    // Получим первую область данных

	    DIs := Report.DataIslands;

	    DI := DIs.Item(0);

	    // Получим коллекцию срезов источника данных

	    Slices := DI.Slice.Slices;

	    // Выведем в консоль количество и наименования срезов источника данных

	    SlicesCount := Slices.Count;

	    Debug.WriteLine("Количество срезов источника: " + SlicesCount.ToString);

	    Debug.WriteLine("Наименования срезов:");

	    For i := 0 To SlicesCount - 1 Do

	        Debug.WriteLine(Slices.Item(i).Name)

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будет выведено количество и наименования
 срезов источника данных.


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
