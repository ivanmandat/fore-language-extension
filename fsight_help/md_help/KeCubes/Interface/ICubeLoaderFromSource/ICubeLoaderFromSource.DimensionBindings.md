# ICubeLoaderFromSource.DimensionBindings

ICubeLoaderFromSource.DimensionBindings
-


# ICubeLoaderFromSource.DimensionBindings


## Синтаксис


DimensionBindings: [ICubeLoaderDimensionBindings](../ICubeLoaderDimensionBindings/ICubeLoaderDimensionBindings.htm);


## Описание


Свойство DimensionBindings возвращает параметры привязки измерений к полям источника данных.


## Комментарии


На основании каждой привязки при выполнении метода [Load](ICubeLoaderFromSource.Load.htm) в структуре куба будет создано отдельное измерение.


## Пример


Для выполнения примера предполагается наличие в репозитории следующих объектов:


-
База данных с идентификатором «BD»;


-
Табличного справочника НСИ с идентификатором «COUNTRY» и календарного справочника «CALENDAR»;


-
Папка с идентификатором «F_CUBES», в которой хранятся кубы.


Также предполагается наличие файла «C:\Data.xls».


			Sub UserProc;

Var

    MB: IMetabase;

    Loader: ICubeLoaderFromSource;

    Provider: IDtExcelProvider;

    DimBindings: ICubeLoaderDimensionBindings;

    DimBinding: ICubeLoaderDimensionBinding;

Begin

    MB := MetabaseClass.Active;

    //Источник данных для куба
    Provider := New DtExcelProvider.Create;

    Provider.DriverVersion := "Excel 8.0";

    Provider.File := "C:\Data.xls";

    Provider.HasHeader := True;

    Provider.Query := "Select * From [Лист1$]";

    //Загрузчик данных в куб
    Loader := New CubeLoaderFromSource.Create;

    Loader.Database := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

    Loader.Parent := MB.ItemById("F_CUBES").Bind;

    //Параметры привязки для измерений и фактов
    DimBindings := Loader.DimensionBindings;

    DimBinding := DimBindings.Add("COUNTRY");

    DimBinding.Dictionary := MB.ItemById("COUNTRY").Bind As IDimensionModel;

    DimBinding := DimBindings.AddCalendar("DATE", DimCalendarLevel.Month);

    DimBinding.Dictionary := MB.ItemById("CALENDAR").Bind As IDimensionModel;

    Loader.FactBindings.Add("VALUE");

    //Создание куба и загрузка данных
    Loader.Load(Provider, Null);

End Sub UserProc;


При выполнении примера будут инициализированы объект импорта из Excel и загрузчик данных в куб. Для создания куба будут подготовлены параметры привязки измерений и фактов. Измерения и факты будут связаны с указанными полями, в качестве измерений будут использоваться существующие справочники репозитория. При выполнении метода Load будут созданы новый стандартный куб и таблица для хранения данных. Данные будут импортированы в созданную таблицу.


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
