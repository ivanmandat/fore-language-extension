# IEaxDataAreaSliceProperties.Slice

IEaxDataAreaSliceProperties.Slice
-


# IEaxDataAreaSliceProperties.Slice


## Синтаксис


Slice: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm);


## Описание


Свойство Slice возвращает
 объект-родитель.


## Комментарии


В качестве источников данных можно использовать:


	- все виды кубов;


	- базы данных временных рядов;


	- реляционные объекты: таблицы, запросы, представления, присоединенные
	 таблицы, источники данных ODBC;


	- экспресс-отчеты;


	- файлы;


	- другие источники: переменные моделирования и файловые кубы
	 (файл *.ppcube).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_REPORT_SLICE. Отчет содержит несколько срезов
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RegRep: IPrxReport;

	    DataArea: IEaxDataArea;

	    DataAreaSlices: IEaxDataAreaSlices;

	    DataAreaSlice: IEaxDataAreaSlice;

	    Properties: IEaxDataAreaSliceProperties;

	    Slice: IEaxDataAreaSlice;

	    id: String;

	    i: integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    RegRep := MB.ItemById("REG_REPORT_SLICE").Bind As IPrxReport;

	    // Получим коллекцию срезов данных

	    DataArea := RegRep.DataArea;

	    DataAreaSlices := DataArea.Slices;

	    // Выведем в окно консоли идентификаторы объектов-родителей срезов

	    For i := 0 To DataAreaSlices.Count - 1 Do

	        DataAreaSlice := DataAreaSlices.Item(i);

	        Properties := DataAreaSlice.Properties;

	        Slice := Properties.Slice;

	        id := Slice.Id;

	        Debug.WriteLine("Идентификатор объекта-родителя среза данных = " + id);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли выведутся идентификаторы объектов-родителей
 срезов данных.


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
