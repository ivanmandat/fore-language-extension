# ICubeCreator.AdditionalFields

ICubeCreator.AdditionalFields
-


# ICubeCreator.AdditionalFields


## Синтаксис


AdditionalFields: [ICubeCreatorAdditionalFields](../ICubeCreatorAdditionalFields/ICubeCreatorAdditionalFields.htm);


## Описание


Свойство AdditionalFields возвращает
 коллекцию дополнительных полей, которые не будут связаны с измерениями/фактами
 куба.


## Комментарии


Дополнительные поля будут созданы в результирующей таблице куба, но
 не будут связаны с измерениями/фактами в структуре куба.


## Пример


Для выполнения примера предполагается наличие в репозитории следующих
 объектов:


	- Базы данных с идентификатором «DB»;


	- Календарный справочник с идентификатором «CALENDAR»;


	- Папка с идентификатором «F_CUBES», в которой хранятся кубы.


			Sub UserProc;

Var

    MB: IMetabase;

    CCreator: ICubeCreator;

    Facts: ICubeCreatorFacts;

    Dims: ICubeCreatorDimensions;

    Dim: IDimensionModel;

    CreatorDim1, CreatorDim2: ICubeCreatorDimension;

    AdditionalDims: ICubeCreatorAdditionalFields;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    MB := MetabaseClass.Active;

    //Создатель куба

    CCreator := New CubeCreator.Create;

    CCreator.Database := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

    //Коллекция измерений куба

    Dims := CCreator.Dimensions;

    //Новое измерение, для которого будет создан отдельный справочник

    CreatorDim1 := Dims.AddNew("Dim1");

    //Измерение на базе существующего справочника

    Dim := MB.ItemById("CALENDAR").Bind As IDimensionModel;

    CreatorDim2 := Dims.Add(Dim);

    //Индекс блока, по которому осуществляется привязка к полям таблицы

    CreatorDim2.Index := Dim.Blocks.Item("MONTHS").Indexes.PrimaryIndex;

    //Факты куба

    Facts := CCreator.Facts;

    Facts.Add("Fact1");

    Facts.Add("Fact2");

    //Информация о создаваемом объекте репозитория

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Parent := MB.ItemById("F_CUBES");

    CrInfo.Permanent := True;

    //Дополнительные поля

    AdditionalDims := CCreator.AdditionalFields;

    AdditionalDims.Add("TERRID", DbDataType.Integer);

    //Создание куба

    CCreator.CreateCube(CrInfo);

End Sub UserProc;


При выполнении примера будет инициализирован создатель кубов. Для создания
 куба будет сформирована коллекция измерений, в коллекции фактов будет
 создано два факта. Куб будет создан в указанной папке. При выполнении
 метода CreateCube также будет
 сформирована таблица, в которой будут храниться значения фактов. Для данной
 таблицы будут настроены привязки измерений и фактов. Также в таблице будет
 создано поле «TERRID», которое не будет иметь какой-либо привязки в кубе.


См. также:


[ICubeCreator](ICubeCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
