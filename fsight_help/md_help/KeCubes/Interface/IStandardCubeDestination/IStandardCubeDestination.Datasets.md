# IStandardCubeDestination.Datasets

IStandardCubeDestination.Datasets
-


# IStandardCubeDestination.Datasets


## Синтаксис


Datasets: [IStandardCubeDatasets](../IStandardCubeDatasets/IStandardCubeDatasets.htm);


## Описание


Свойство Datasets возвращает
 коллекцию источников данных для варианта отображения куба.


## Комментарии


В качестве источника данных могут выступать [таблицы](UiNavObj.chm::/Table/UiDb_relational_table.htm),
 [присоединённые
 таблицы](UiNavObj.chm::/Attach_table/UiDb_relational_AttachTable.htm), [представления](UiNavObj.chm::/conception/UiDb_relational_conception.htm),
 [запросы](UiNavObj.chm::/Query/Query.htm),
 [источники
 данных ODBC](UiNavObj.chm::/ODBC/UiDb_relational_ODBC.htm), [справочники
 НСИ](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Master_RDS.htm) и [составные
 справочники НСИ](UiNavObj.chm::/reference_book/Master_Composite_Table_reference_book/Master_CompositeTable.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «T_DATA», в таблице созданы поля с идентификаторами
 «ID», «DATE» и «VALUE». Также в репозитории должны быть созданы следующие
 справочники:


	- FACTS. Справочник фактов, в своей структуре должен иметь атрибут
	 с идентификатором «KEY»;


	- INDICATORS. Справочник по каким-либо показателям.


	- CALENDAR. Календарный справочник, в структуре справочника включен
	 уровень «Годы».


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions. Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Cube: IStandardCube;

    CubeDest: IStandardCubeDestination;

    Dims: IStandardCubeDimensions;

    Datasets: IStandardCubeDatasets;

    Dataset: IStandardCubeDataset;

    FactDim, Dim, CalendarDim: IStandardCubeDimension;

    FactDimInst: IDimInstance;

    KeyAttribute: IDimAttributeInstance;

    FactBindings: IStandardCubeFactBindings;

    DimBinding: IStandardCubeDimensionBinding;

    DimIndex: IDimIndex;

    DataSet_ID: String = "T_DATA";

Begin

    Mb := MetabaseClass.Active;

    //Информация для создания нового объекта репозитория

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_STDCUBE;

    CrInfo.Id := "NEW_STD_CUBE";

    CrInfo.Name := "Новый стандартный куб";

    CrInfo.Parent := Mb.Root;

    //Создание куба

    MObj := Mb.CreateObject(CrInfo).Edit;

    Cube := MObj As IStandardCube;

    CubeDest := Cube.Destinations.Item(0);

    Dims := CubeDest.Dimensions;

    Datasets := CubeDest.Datasets;

    //Задаем в качестве измерения фактов - существующий справочник репозитория

    FactDim := Dims.Add(MB.ItemById("FACTS").Bind As IDimensionModel);

    Cube.ExternalFactDimension := True;

    FactDim.FactDimension := True;

    //Добавляем источник данных

    Dataset := Datasets.Add(MB.ItemById(DataSet_ID).Bind As IDatasetModel);

    //Привязка факта куба

    FactDimInst := FactDim.OpenDimension;

    KeyAttribute := FactDimInst.Attributes.FindById("KEY");

    FactBindings := FactDim.FactBindings(Dataset);

    FactBindings.Binding(KeyAttribute.Value(0)).Formula.AsString := DataSet_ID + ".VALUE";

    //Добавление измерений

    Dim := Dims.Add(MB.ItemById("INDICATORS").Bind As IDimensionModel);

    CalendarDim := Dims.Add(MB.ItemById("CALENDAR").Bind As IDimensionModel);

    //Привязка измерений

    //"Справочник"

    DimIndex := Dim.Dimension.Indexes.PrimaryIndex;

    DimBinding := Dim.Binding(Dataset);

    DimBinding.Index := DimIndex;

    DimBinding.Binding(DimIndex.Attributes.Item(0)).AsString := DataSet_ID + ".ID";

    //"Календарь"

    DimIndex := CalendarDim.Dimension.Blocks.Item("YEARS").Indexes.FindById("INDEX_BLOCK");

    DimBinding := CalendarDim.Binding(Dataset);

    DimBinding.Index := DimIndex;

    DimBinding.Binding(DimIndex.Attributes.Item(0)).AsString := DataSet_ID + ".DATE";

    MObj.Save;

End Sub UserProc;


При выполнении примера в корневом каталоге репозитория будет создан
 новый куб. В куб будет добавлен один источник, задано измерение фактов
 и добавлены два дополнительных измерения. Для первого факта в измерении
 фактов и дополнительных измерений будут настроены привязки к полям источника
 данных.


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
