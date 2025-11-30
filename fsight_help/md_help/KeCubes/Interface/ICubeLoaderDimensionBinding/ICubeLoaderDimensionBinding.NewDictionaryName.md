# ICubeLoaderDimensionBinding.NewDictionaryName

ICubeLoaderDimensionBinding.NewDictionaryName
-


# ICubeLoaderDimensionBinding.NewDictionaryName


## Синтаксис


NewDictionaryName: String;


## Описание


Свойство NewDictionaryName определяет
 наименование создаваемого справочника, который будет использован в качестве
 измерения куба.


## Комментарии


Свойство актуально, если не определено свойство [Dictionary](ICubeLoaderDimensionBinding.Dictionary.htm)
 и для измерения куба создается новый справочник. По умолчанию свойство
 NewDictionaryName не определено,
 при этом создаваемый справочник будет иметь такое же наименование, как
 и поле, с которым он связан.


## Пример


Для выполнения примера предполагается наличие базы данных с идентификатором
 «DB» и папки с идентификатором «F_CUBES», в которой хранятся кубы. Также
 предполагается наличие файла «C:\Data.xls».


			Sub UserProc;

Var

    MB: IMetabase;

    Loader: ICubeLoaderFromSource;

    Provider: IDtExcelProvider;

    DimBindings: ICubeLoaderDimensionBindings;

    DimBinding: ICubeLoaderDimensionBinding;

    FactBinding: ICubeLoaderFactBinding;

Begin

    MB := MetabaseClass.Active;

    //Источник данных для куба

    Provider := New DtExcelProvider.Create;

    Provider.DriverVersion := "Excel 8.0";

    Provider.File := "C:\Data.xls";

    Provider.HasHeader := True;

    Provider.Query := "Select * From [Лист1$]";

    Provider.Open;

    //Загрузчик данных в куб

    Loader := New CubeLoaderFromSource.Create;

    Loader.Database := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

    Loader.Parent := MB.ItemById("F_CUBES").Bind;

    //Параметры привязки для измерений и фактов

    DimBindings := Loader.DimensionBindings;

    DimBinding := DimBindings.Add("COUNTRY");

    DimBinding.NewDictionaryName := "Страны мира";

    DimBinding.LoadEmptyValues := True;

    DimBinding.EmptyValueReplacement := "Другие";

    DimBinding := DimBindings.AddCalendar("DATE", DimCalendarLevel.Month);

    DimBinding.NewDictionaryName := "Календарь(месяцы)";

    FactBinding := Loader.FactBindings.Add("VALUE");

    FactBinding.NewElementName := "Index by country";

    //Создание куба и загрузка данных

    Loader.Load(Provider, Null);

End Sub UserProc;


При выполнении примера будут инициализированы объект импорта из Excel
 и загрузчик данных в куб. На основании информации о полях источника данных
 буду настроены привязки измерений и фактов создаваемого куба. Для создаваемых
 измерений будут определены новые наименования. При загрузке в справочник
 стран если в файле наименование страны не указано, то данная запись будет
 сопоставлена с элементом «Другие». При выполнении метода Load
 будут созданы новый стандартный куб, необходимые справочники для измерений
 и таблица для хранения данных. Данные будут импортированы в созданную
 таблицу.


См. также:


[ICubeLoaderDimensionBinding](ICubeLoaderDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
