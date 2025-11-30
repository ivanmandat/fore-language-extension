# IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer

IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer
-


# IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer


## Синтаксис


OnAfterExecuteAnalyzer(Args: [IEaxAfterExecuteEventArgs](../IEaxAfterExecuteEventArgs/IEaxAfterExecuteEventArgs.htm));


## Параметры


Args. Аргументы события.


## Описание


Метод OnAfterExecuteAnalyzer
 реализует событие, наступающее после вычисления таблицы.


## Комментарии


Событие возникает не только после вычисления таблицы экспресс-отчета,
 но и после вычисления рабочей книги.


Для реализации события, наступающего перед вычислением таблицы, используйте
 [IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer](IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer.htm).


## Пример


В примере описывается класс, который может быть использован в качестве
 обработчика событий экспресс-отчета.


Добавьте ссылки на системные сборки: Dimensions, Export, Express, Metabase,
 Ui.


	Class ExpressRep_Events: ExpressEvents


	// Реализует событие, наступающее перед вычислением таблицы

	Public Sub OnBeforeExecuteAnalyzer(Args: IEaxBeforeExecuteEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Name, NameDes: String;

	    DataSources: IReportDataSourcesData;

	    DataSource: IReportDataSourceData;

	    Descriptor: IMetabaseObjectDescriptor;

	    i, DataSourcesCount: integer;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Выведем название листа

	    Name := SheetData.Name;

	    // Получим коллекцию источников данных

	    DataSources := SheetData.DataSources;

	    For i := 0 To DataSources.Count - 1 Do

	        DataSource := DataSources.Item(i);

	        // Получим описание источника

	        Descriptor := DataSource.Descriptor;

	        // Получим наименование источника

	        NameDes := Descriptor.Name;

	        // Получим количество источников данных

	        DataSourcesCount := DataSource.DataSources.Count;

	    End For;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	    ("Произошло событие OnBeforeExecute" + #13 + #10 +

	        "Название листа - " + Name + #13 + #10 +

	        "Название источника данных - " + NameDes + #13 + #10 +

	        "Количество источников данных = " + DataSourcesCount.ToString);

	End Sub OnBeforeExecuteAnalyzer;


	// Реализует событие, наступающее после вычисления таблицы

	Public Sub OnAfterExecuteAnalyzer(Args: IEaxAfterExecuteEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Descriptor: IMetabaseObjectDescriptor;

	    Name, NameDes, NameDSDes, Id: String;

	    ParamValues: IMetabaseObjectParamValues;

	    ParamValuesCount, DataSourcesCount, OwnParamValuesCount, SelCount: Integer;

	    DataSources: IReportDataSourcesData;

	    DSDescriptor: IMetabaseObjectDescriptor;

	    OwnParamValues: IMetabaseObjectParamValues;

	    Selection: IDimSelectionSet;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Получим параметры значений источника данных

	    ParamValues := SheetData.DataSourceParamValues;

	    // Получим количество параметров значений источника данных

	    ParamValuesCount := ParamValues.Count;

	    // Получим источник данных

	    DataSources := SheetData.DataSources;

	    // Получим количество источников данных

	    DataSourcesCount := DataSources.Count;

	    // Получим описание листа

	    DSDescriptor := SheetData.Descriptor;

	    // Получим наименование описания

	    NameDSDes := DSDescriptor.Name;

	    // Получим идентификатор листа

	    Id := SheetData.Id;

	    // Получим название листа

	    Name := SheetData.Name;

	    // Получим параметры собственных значений

	    OwnParamValues := SheetData.OwnParamValues;

	    // Получим количество параметров собственных значений

	    OwnParamValuesCount := OwnParamValues.Count;

	    // Получим отметку измерения

	    Selection := SheetData.Selection;

	    // Получим количество элементов в отметке

	    SelCount := Selection.Count;

	    // Получим описание данных отчета

	    Descriptor := AnalyzerData.Descriptor;

	    // Получим наименование описания данных отчета

	    NameDes := Descriptor.Name;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	    ("Произошло событие OnAfterExecute" + #13 + #10 +

	        "Название листа - " + Name + #13 + #10 +

	        "Название описания - " + NameDes + +#13 + #10 +

	        "Количество параметров значений источника данных = " + ParamValuesCount.ToString +

	        #13 + #10 +

	        "Количество источников данных = " + DataSourcesCount.ToString + +#13 + #10 +

	        "Наименование дескриптора - " + NameDSDes + #13 + #10 +

	        "Идентификатор листа - " + Id + #13 + #10 +

	        "Количество параметров собственных значений = " + OwnParamValuesCount.ToString +

	        #13 + #10 +

	        "Количество элементов в отметке = " + SelCount.ToString);

	End Sub OnAfterExecuteAnalyzer;


	// Реализует событие, наступающее перед печатью отчета

	Public Sub OnBeforePrintAnalyzer(Args: IEaxBeforePrintEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Name: String;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Получим название листа

	    Name := SheetData.Name;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	        ("Произошло событие OnBeforePrint" + #13 + #10 +

	            "Название листа = " + Name);

	End Sub OnBeforePrintAnalyzer;


	// Реализует событие, наступающее после печати отчета

	Public Sub OnAfterPrintAnalyzer(Args: IEaxAfterPrintEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Name: String;

	    PageCount: Integer;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Получим название листа

	    Name := SheetData.Name;

	    // Получим количество страниц

	    PageCount := Args.PageCount;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	    ("Произошло событие OnAfterPrint" + #13 + #10 +

	        "Название листа - " + Name + #13 + #10 +

	        "Количество страниц = " + PageCount.ToString);

	End Sub OnAfterPrintAnalyzer;


	// Реализует событие, наступающее перед экспортом отчета

	Public Sub OnBeforeExportAnalyzer(Args: IEaxBeforeExportEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Name: String;

	    Description: String;

	    Format: IExportFormat;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Получим название листа

	    Name := SheetData.Name;

	    // Получим формат экспорта

	    Format := Args.Format;

	    // Получим описание формата, в котором производится экспорт

	    Description := Format.Description;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	    ("Произошло событие OnBeforeExport" + #13 + #10 +

	        "Название листа - " + Name + #13 + #10 +

	        "Описание формата - " + Description);

	End Sub OnBeforeExportAnalyzer;


	// Реализует событие, наступающее после экспорта отчета

	Public Sub OnAfterExportAnalyzer(Args: IEaxAfterExportEventArgs);

	Var

	    AnalyzerData: IReportData;

	    SheetData: IReportSheetData;

	    Name: String;

	    PageCount: Integer;

	Begin

	    // Получим данные отчета

	    AnalyzerData := Args.AnalyzerData;

	    // Получим параметры листа

	    SheetData := AnalyzerData.SheetData;

	    // Получим название листа

	    Name := SheetData.Name;

	    // Получим количество страниц

	    PageCount := Args.PageCount;

	    // Выведем информацию в информационное окно

	    Winapplication.InformationBox

	    ("Произошло событие OnAfterExport" + +#13 + #10 +

	        "Название листа - " + Name + #13 + #10 +

	        "Кол-во страниц = " + PageCount.ToString);

	End Sub OnAfterExportAnalyzer;

	End Class ExpressRep_Events;


См. также:


[IEaxAnalyzerUserEvents](IEaxAnalyzerUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
