# ICubeCreatorFact.Table

ICubeCreatorFact.Table
-


# ICubeCreatorFact.Table


## Синтаксис


Table: [ITable](kedb.chm::/interface/itable/itable.htm);


## Описание


Свойство Table определяет таблицу
 репозитория, к которой необходимо привязать факт.


## Комментарии


Свойство Table используется,
 если необходимо значения фактов хранить в разных таблицах.


После установки свойства Table
 необходимо вызвать метод [InitDimensions](ICubeCreatorFact.InitDimensions.htm).
 Это позволит подготовить измерения для привязки к полям указанной таблица.
 После вызова метода [InitDimensions](ICubeCreatorFact.InitDimensions.htm)
 в свойстве [Dimensions](ICubeCreatorFact.Dimensions.htm) можно
 получить коллекцию измерений и, используя у каждого из них свойство [Fields](../ICubeCreatorDimension/ICubeCreatorDimension.Fields.htm),
 настроить привязку к полям таблицы. Привязка к полям двоичного типа не
 поддерживается.


Если свойство Table не задано,
 то доступ к измерениям и их настройка производится в свойстве [ICubeCreator.Dimensions](../ICubeCreator/ICubeCreator.Dimensions.htm).


Примечание.
 Если задано свойство ICubeCreatorFact.Table,
 то указание свойства [ICubeCreator.Table](../ICubeCreator/ICubeCreator.Table.htm)
 недопустимо.


## Пример


Для выполнения примера предполагается наличие в репозитории следующих
 объектов:


	- Календарный справочник с идентификатором «CALENDAR»;


	- Папка с идентификатором «F_CUBES», в которой хранятся кубы;


	- Две таблицы с идентификаторами «Table_1» и «Table_2».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CCreator: ICubeCreator;

	    Facts: ICubeCreatorFacts;

	    Dims: ICubeCreatorDimensions;

	    Dim: IDimensionModel;

	    CreatorDim: ICubeCreatorDimension;

	    CreatorFact1, CreatorFact2: ICubeCreatorFact;

	    CrInfo: IMetabaseObjectCreateInfo;

	    TmpCube: IStandardCube;

	Begin

	    MB := MetabaseClass.Active;

	    //Создатель куба

	    CCreator := New CubeCreator.Create;

	    //Коллекция измерений куба

	    Dims := CCreator.Dimensions;

	    //Измерение на базе существующего справочника

	    Dim := MB.ItemById("CALENDAR").Bind As IDimensionModel;

	    Dims.Add(Dim);

	    //Факты куба

	    Facts := CCreator.Facts;

	    CreatorFact1 := Facts.Add("Fact1");

	    CreatorFact1.Table := MB.ItemById("Table_1").Bind As ITable;

	    CreatorFact1.Field := "F_FACT";

	    CreatorFact1.AggregationType := CubeFactBindingAggregationType.Sum;

	    CreatorFact2 := Facts.Add("Fact2");

	    CreatorFact2.Table := MB.ItemById("Table_2").Bind As ITable;

	    CreatorFact2.Field := "F_FACT";

	    CreatorFact2.AggregationType := CubeFactBindingAggregationType.Sum;

	    CreatorFact1.InitDimensions;

	    CreatorFact2.InitDimensions;

	    //Настройка измерения по разным источникам данных, к которым привязаны факты

	    //Привязка к таблице первого факта

	    CreatorDim := CreatorFact1.Dimensions.Item(0);

	    CreatorDim.Fields.Add("F_CALENDAR");

	    CreatorDim.Index := Dim.Blocks.Item("MONTHS").Indexes.PrimaryIndex;

	    //Привязка к таблице второго факта

	    CreatorDim := CreatorFact2.Dimensions.Item(0);

	    CreatorDim.Fields.Add("F_CALENDAR");

	    CreatorDim.Index := Dim.Blocks.Item("YEARS").Indexes.PrimaryIndex;

	    //Информация о создаваемом объекте репозитория

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.Parent := MB.ItemById("F_CUBES");

	    CrInfo.Permanent := True;

	    //Создание куба

	    TmpCube := CCreator.CreateCube(CrInfo);

	    (TmpCube As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет инициализирован создатель кубов. В коллекции
 фактов будет создано два факта. Каждый факт будет связан с отдельной таблицей,
 будет настроена агрегация. В коллекции измерений будет создано измерение
 на базе календарного справочника. Для измерения будет настроена привязка
 к каждой таблице. Куб будет создан в указанной папке.


См. также:


[ICubeCreatorFact](ICubeCreatorFact.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
