# Создание стандартного куба

Создание стандартного куба
-


# Создание стандартного куба


Рассмотрим пример создания стандартного куба с использованием языка
 Fore. Для создания куба необходимо наличие в репозитории следующих объектов:


	- справочник фактов с идентификатором «FACTS».


	- справочник стран с идентификатором «COUNTRY».


	- календарный справочник с идентификатором «CALENDAR».


	- таблица с идентификатором «STD_DATA», имеющая в своей структуре
	 следующие поля:


		- Value. Значение в заданной точке (Тип поля: Вещественный);


		- Country_Key. Ключ страны, для которой задается значение
		 (Тип поля: Целый);


		- V_date. Дата, на которую указывается значение (Тип поля:
		 Дата).


Указанный ниже пример создаёт в корневой папке репозитория новый объект
 - Стандартный куб и производит настройку его параметров:


	- в качестве измерения фактов устанавливается существующий справочник
	 репозитория;


	- добавляется один источник данных, поле Value источника связывается
	 с первым фактом куба;


	- в структуру куба добавляются два измерения: COUNTRY и CALENDAR;


	- для измерения COUNTRY устанавливается связь с полем Country_Key
	 через первичный индекс справочника; для измерения CALENDAR устанавливается
	 связь с полем V_date через первичный индекс блока Годы;


	- для настройки вычисляемого факта в кубе создается отношение.
	 Данное отношение возвращает предыдущую точку относительно той, в которой
	 будет производиться вычисление;


	- на базе созданного отношения для второго факта куба будет задана
	 формула, по которой будет осуществляться вычисление;


	- после этого куб будет сохранен.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Db, Dimensions, Metabase.


## Пример


			Sub CreateStdCube;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    StdCube: IStandardCube;

    StdCubeDest: IStandardCubeDestination;

    StdDims: IStandardCubeDimensions;

    StdDatasets: IStandardCubeDatasets;

    FactDim, CountryDim, CalendarDim: IStandardCubeDimension;

    StdDataset: IStandardCubeDataset;

    FactDimInst: IDimInstance;

    KeyAttribute: IDimAttributeInstance;

    FactBindings: IStandardCubeFactBindings;

    DimBinding: IStandardCubeDimensionBinding;

    DimIndex: IDimIndex;

    Relation: IStandardCubeRelation;

    DataSet_ID: String = "STD_DATA";

Begin

    MB := MetabaseClass.Active;

    //Информация для создания нового объекта репозитория

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_STDCUBE;

    CrInfo.Id := "New_Std_Cube";

    CrInfo.Name := "Новый стандартный куб";

    CrInfo.Parent := MB.Root;

    //Создание куба

    MObj := MB.CreateObject(CrInfo).Edit;

    StdCube := MObj As IStandardCube;

    //Настройка параметров куба

    StdCubeDest := StdCube.Destinations.Item(0);

    StdDims := StdCubeDest.Dimensions;

    StdDatasets := StdCubeDest.Datasets;

    //Задаем в качестве измерения фактов - существующий справочник репозитория

    FactDim := StdDims.Add(MB.ItemById("FACTS").Bind As IDimensionModel);

    StdCube.ExternalFactDimension := True;

    FactDim.FactDimension := True;

    //Добавляем источник данных

    StdDataset := StdDatasets.Add(MB.ItemById(DataSet_ID).Bind As IDatasetModel);

    //Привязка факта куба

    FactDimInst := FactDim.OpenDimension;

    KeyAttribute := FactDimInst.Attributes.FindById("KEY");

    FactBindings := FactDim.FactBindings(StdDataset);

    FactBindings.Binding(KeyAttribute.Value(0)).Formula.AsString := DataSet_ID + ".VALUE";

    //Добавление измерений

    CountryDim := StdDims.Add(MB.ItemById("COUNTRY").Bind As IDimensionModel);

    CalendarDim := StdDims.Add(MB.ItemById("CALENDAR").Bind As IDimensionModel);

    //Привязка измерений

    //"Страны"

    DimIndex := CountryDim.Dimension.Indexes.PrimaryIndex;

    DimBinding := CountryDim.Binding(StdDataset);

    DimBinding.Index := DimIndex;

    DimBinding.Binding(DimIndex.Attributes.Item(0)).AsString := DataSet_ID + ".COUNTRY_KEY";

    //"Календарь"

    DimIndex := CalendarDim.Dimension.Blocks.Item("YEARS").Indexes.FindById("INDEX_BLOCK");

    DimBinding := CalendarDim.Binding(StdDataset);

    DimBinding.Index := DimIndex;

    DimBinding.Binding(DimIndex.Attributes.Item(0)).AsString := DataSet_ID + ".V_DATE";

    //Создание и настройка отношения

    Relation := StdCube.Relations.Add;

    Relation.Name := "Сдвиг на точку";

    Relation.Id := "BEFORE";

    Relation.Relation(CalendarDim).AsString := "T.PREV";

    //Задание формулы для вычисляемого факта

    StdCube.CalcBindings.Binding(KeyAttribute.Value(1)).Formula.AsString := "@[" + KeyAttribute.Value(0) + "]-BEFORE[@[" + KeyAttribute.Value(0) + "]]";

    MObj.Save;

End Sub CreateStdCube;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
