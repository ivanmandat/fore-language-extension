# IMDCalculationDataset.Data

IMDCalculationDataset.Data
-


# IMDCalculationDataset.Data


## Синтаксис


Data: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Data определяет реляционный
 источник/приёмник данных, участвующий в многомерном расчёте на сервере
 БД.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. В данной базе данных хранятся таблицы, содержащие
 следующую структуру:


Таблица с идентификатором TABLE_INPUT:


		 Наименование поля
		 Назначение


		 Data
		 Дата занесения значения.


		 CityId
		 Идентификаторы городов, по которым содержится значения.


		 Value
		 Значение показателя по указанному городу.


Таблица с идентификатором TABLE_OUTPUT:


		 Наименование поля
		 Назначение


		 Data
		 Дата занесения значения.


		 CountryId
		 Идентификаторы стран, по которым будут рассчитываться значения.


		 Value
		 Значение показателя по стране, рассчитанное с учётом значений
		 по городам.


Также в базе данных содержится таблица, на которой основано измерение
 «DIM1». Данное измерение используется для составления иерархической зависимости
 между городами и странами. В дальнейшем используется для составления формул
 по выбранным координатам.


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    Destination: IMDCalculationDestination;

    Source: IMDCalculationSource;

    Slice: IMDCalculationSlice;

    DimModel: IDimensionModel;

    Fact: IMDCalculationfact;

    FreeSlice: IMDCalculationSliceFree;

    FixedSlice: IMDCalculationSliceFixed;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаём объект и задаём его параметры

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := MB.GenerateId("MDCALC");

    CrInfo.Name := "Многомерный расчет на сервере";

    CrInfo.Parent := Null;

    MObj := MB.CreateObject(CrInfo).Edit;

    MDCalc := MObj As IMDCalculation;

    //Добавляем базу данных

    MDCalc.Database := MB.ItemById("DB").Bind As IDatabase;

    //Добавляем входную таблицу

    Source := MDcalc.Sources.Add(Mb.ItemById("TABLE_INPUT").Bind As IDatasetModel);

    //Добавляем измерение для поля "CityId" таблицы

    Slice := Source.Slices.Add;

    Slice.Fields := "CITYID";

    Slice.Name := "Города";

    Slice.FixType := MDCalculationSliceFixType.Free;

    FreeSlice := Slice.Free;

    //Связываем данное измерение со справочником Стран/городов

    DimModel := MB.ItemById("DIM1").Bind As IDimensionModel;

    FreeSlice.Dimension := DimModel;

    FreeSlice.Index := DimModel.Blocks.Item(0).Indexes.Item(0);

    //Добавляем измерение для календаря

    Slice := Source.Slices.Add;

    Slice.Name := "Календарь";

    Slice.Fields := "DATA";

    Slice.FixType := MDCalculationSliceFixType.Fixed;

    Slice.IsCalendar := True;

    FixedSlice := Slice.Fixed;

    //Добавляем измерение для показателя

    Fact := Source.Facts.Add;

    Fact.FieldName := "VALUE";

    Fact.Name := "Показатель";

    //Добавляем выходную таблицу

    Destination := MDCalc.Destination;

    Destination.Data := MB.ItemById("TABLE_OUTPUT").Bind As IDatasetModel;

    //Добавляем измерение для поля "CountryId" таблицы

    Slice := Destination.Slices.Add;

    Slice.Fields := "COUNTRYID";

    Slice.Name := "Страны/Города";

    Slice.FixType := MDCalculationSliceFixType.Free;

    FreeSlice := Slice.Free;

    //Связываем данное измерение со справочником Стран/городов

    DimModel := Mb.ItemById("DIM1").Bind As IDimensionModel;

    FreeSlice.Dimension := DimModel;

    FreeSlice.Index := DimModel.Blocks.Item(0).Indexes.Item(0);

    //Добавляем измерение для календаря

    Slice := Destination.Slices.Add;

    Slice.Name := "Календарь";

    Slice.Id := "CALEN";

    Slice.Fields := "DATA";

    Slice.FixType := MDCalculationSliceFixType.Fixed;

    Slice.IsCalendar := True;

    //Добавляем измерение для показателя

    Fact := Destination.Facts.Add;

    Fact.FieldName := "VALUE";

    Fact.Name := "Показатель";

    //Указываем связь между фиксированными
 измерениями

    FixedSlice.Mapping := Destination.Slices.FindById("CALEN");

    //Создаём новую таблицу формул

    FormulasTable := MDcalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект «Многомерный расчёт на сервере
 БД». Расчёт будет осуществляться на основе значений, содержащихся
 в таблице с идентификатором TABLE_INPUT. В качестве назначения будет установлена
 таблица с идентификатором TABLE_OUTPUT. Для полей таблиц будут созданы
 необходимые измерения, также будут созданы показатели, привязанные к полям
 VALUE. Календарные измерения будут зафиксированы. По полю CITYID источника
 будет возможность настраивать в формулах суммирование по дочерним элементам.


См. также:


[IMDCalculationDataset](IMDCalculationDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
