# ICubeCreator.CreateCube

ICubeCreator.CreateCube
-


# ICubeCreator.CreateCube


## Синтаксис


CreateCube(CreateInfo: [IMetabaseObjectCreateInfo](kesom.chm::/interface/imetabaseobjectcreateinfo/imetabaseobjectcreateinfo.htm)):
 [IStandardCube](../IStandardCube/IStandardCube.htm);


## Параметры


CreateInfo. Описание, в соответствии
 с которым будет создан куб.


## Описание


Метод CreateCube осуществляет
 создание и настройку стандартного куба.


## Комментарии


При выполнении метода производятся следующие действия:


	- В соответствии с информацией, указанной в параметре CreateInfo,
	 будет создан объект репозитория - Стандартный куб;


	- В структуре куба будут созданы факты, добавлены измерения;


	- Если не указано свойство [Table](ICubeCreator.Table.htm),
	 то будет создана таблица для хранения данных куба;


	- Будет настроена привязка фактов и измерений к полям таблицы
	 [Table](ICubeCreator.Table.htm).


Результатом работы метода будет стандартный куб, открытый на редактирование.


## Пример


Для выполнения примера предполагается наличие в репозитории следующих
 объектов:


	- Репозиторий НСИ с идентификатором «RDS»;


	- Календарный справочник с идентификатором «CALENDAR»;


	- Папка с идентификатором «F_CUBES», в которой хранятся кубы.


			Sub UserProc;

Var

    MB: IMetabase;

    Rds: IRdsDatabaseInstance;

    CCreator: ICubeCreator;

    Facts: ICubeCreatorFacts;

    Dims: ICubeCreatorDimensions;

    Dim: IDimensionModel;

    CreatorDim1, CreatorDim2: ICubeCreatorDimension;

    CrInfo: IMetabaseObjectCreateInfo;

    TmpCube: IStandardCube;

Begin

    MB := MetabaseClass.Active;

    Rds := MB.ItemById("RDS").Open(Null) As IRdsDatabaseInstance;

    //Создатель куба

    CCreator := New CubeCreator.Create;

    CCreator.RdsDatabase := Rds;

    CCreator.Database := Rds.DatabaseInstance;

    //Коллекция измерений куба

    Dims := CCreator.Dimensions;

    //Новое измерение, для которого будет создан отдельный справочник

    CreatorDim1 := Dims.AddNew("Dim1");

    //Измерение на базе существующего справочника

    Dim := MB.ItemById("CALENDAR").Bind As IDimensionModel;

    CreatorDim2 := Dims.Add(Dim);

    //Индекс блока, по которому осуществляетс привязка к полям таблицы

    CreatorDim2.Index := Dim.Blocks.Item("MONTHS").Indexes.PrimaryIndex;

    //Факты куба

    Facts := CCreator.Facts;

    Facts.Add("Fact1");

    Facts.Add("Fact2");

    //Информация о создаваемом объекте репозитория

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Parent := MB.ItemById("F_CUBES");

    //Создание куба

    TmpCube := CCreator.CreateCube(CrInfo);

    (TmpCube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет инициализирован создатель кубов. Для создания
 куба будет сформирована коллекция измерений: одно измерение будет новым
 (для него в репозитории НСИ будет создан новый табличный справочник НСИ);
 второе измерение будет создано на базе календарного справочника. В коллекции
 фактов будет создано два факта. Куб будет создан в указанной папке. При
 выполнении метода CreateCube также
 будет сформирована таблица, в которой будут храниться значения фактов.
 Для данной таблицы будут настроены привязки измерений и фактов.


См. также:


[ICubeCreator](ICubeCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
