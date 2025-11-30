# Создание многомерного расчёта на сервере БД

Создание многомерного расчёта на сервере БД
-


# Создание многомерного расчёта на сервере БД


Рассмотрим пример создания многомерного расчета на сервере БД с использованием
 языка Fore. Для создания необходимо
 наличие в репозитории следующих объектов:


	- Базы данных с идентификатором «DB»;


	- Два стандартных куба с идентификаторами «STD_SOURCE» и «STD_DESTINATION»;


	- Кубы должны содержать в своей структуре календарное измерение
	 с идентификатором «CALENDAR».


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Многомерный расчет на сервере БД и производит настройку его параметров:


	- Указывается база данных;


	- Задаются куб-источник и куб-приёмник;


	- В структурах кубов фиксируются календарные измерения.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Db, Dimensions, Metabase.


## Пример


	Sub CreateMDCalculation;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    MDCalc: IMDCalculation;

	    Cube: ICubeModel;

	    Source: IMDCalculationSource;

	    Destination: IMDCalculationDestination;

	    FormulasTable: IMDCalculationFormulasTable;

	    TableForFormulas: ITable;

	    SourceSlice, DestinationSlice: IMDCalculationSlice;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

	    CrInfo.Id := "New_MDCalculation";

	    CrInfo.Name := "Многомерный расчет на сервере";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    MDCalc := MObj As IMDCalculation;

	    //Указываем БД

	    MDCalc.Database := MB.ItemById("DB").Bind As IDatabase;

	    //Указываем куб-источник

	    Cube := MB.ItemById("STD_SOURCE").Bind As ICubeModel;

	    Source := MDCalc.Sources.AddCube(Cube);

	    SourceSlice := Source.Slices.FindById("CALENDAR");

	    SourceSlice.FixType := MDCalculationSliceFixType.Fixed;

	    //Указываем куб-назначение

	    Destination := MDCalc.Destination;

	    Destination.SetCube(MB.ItemById("STD_DESTINATION").Bind As ICubeModel);

	    //Фиксируем календарные измерения

	    DestinationSlice := Destination.Slices.FindById("CALENDAR");

	    DestinationSlice.FixType := MDCalculationSliceFixType.Fixed;

	    SourceSlice.Fixed.Mapping := DestinationSlice;

	    //Создаем новую таблицу формул

	    FormulasTable := MDCalc.FormulasTable;

	    TableForFormulas := FormulasTable.Create;

	    FormulasTable.Attach(TableForFormulas);

	    MObj.Save;

	End Sub CreateMDCalculation;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
