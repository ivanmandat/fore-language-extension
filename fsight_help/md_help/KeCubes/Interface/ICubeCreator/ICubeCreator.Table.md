# ICubeCreator.Table

ICubeCreator.Table
-


# ICubeCreator.Table


## Синтаксис


Table: [ITable](kedb.chm::/interface/itable/itable.htm);


## Описание


Свойство Table определяет таблицу,
 в которой будут храниться данные создаваемого куба.


## Комментарии


По умолчанию таблица не установлена, при этом она будет создана автоматически.
 Структура таблицы будет сформирована на основании коллекции [измерений](ICubeCreator.Dimensions.htm)
 и [показателей](ICubeCreator.Facts.htm) куба. Таблица репозитория
 будет создана там же, где будет сохранен стандартный куб. Физическая таблица
 будет создана в базе данных, которая указана в свойстве [Database](ICubeCreator.Database.htm).


Если свойство Table задано,
 то для настройки привязки для каждого измерения необходимо определить
 свойство [ICubeCreatorDimension.Fields](../ICubeCreatorDimension/ICubeCreatorDimension.Fields.htm),
 а для каждого факта - свойство [ICubeCreatorFact.Field](../ICubeCreatorFact/ICubeCreatorFact.Field.htm).


Примечание.
 Если задано свойство ICubeCreator.Table,
 то указание свойства [ICubeCreatorFact.Table](../ICubeCreatorFact/ICubeCreatorFact.Table.htm)
 недопустимо.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- Папки с идентификатором «FOLDER_CUBES».


	- Таблицы с идентификатором «TABLE_CUBE». Таблица должна содержать
	 числовое поле «VALUE», хранящее значения, и строковое поле «NAME»,
	 хранящее наименования.


	- Табличного справочника с идентификатором «DIM_CUBE». Справочник
	 должен быть основан на таблице «TABLE_CUBE». Идентификаторы атрибутов
	 справочника должны совпадать с идентификаторами полей исходной таблицы.
	 Также справочник должен содержать индекс с идентификатором «INDEX_NAME»,
	 основанный на атрибуте «NAME».


	- Базы данных с идентификатором «DB_MSSQL».


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CCreator: ICubeCreator;

    Folder: IMetabaseObjectDescriptor;

    Facts: ICubeCreatorFacts;

    Dims: ICubeCreatorDimensions;

    Dim: IDimensionModel;

    CreatorDim: ICubeCreatorDimension;

    Fields: ICubeCreatorFields;

    CreatorFact: ICubeCreatorFact;

    CrInfo: IMetabaseObjectCreateInfo;

    TmpCube: IStandardCube;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем объект, который будет выполнять создание куба

    CCreator := New CubeCreator.Create;

    // Указываем папку, которая будет использоваться для создания куба

    Folder := MB.ItemById("FOLDER_CUBES");

    CCreator.DictionaryParent := Folder.Bind;

    // Указываем БД, которая будет использоваться для создания куба

    CCreator.Database := MB.ItemById("DB_MSSQL").Open(Null) As IDatabaseInstance;

    // Указываем таблицу, в которой будут храниться данные

    CCreator.Table := MB.ItemById("TABLE_CUBE").Bind As ITable;

    // Получаем коллекцию измерений куба

    Dims := CCreator.Dimensions;

    // Получаем справочник

    Dim := MB.ItemById("DIM_CUBE").Bind As IDimensionModel;

    // Добавляем в куб измерение, основанное на полученном справочнике

    CreatorDim := Dims.Add(Dim);

    // Получаем поля, используемые для привязки измерения

    Fields := CreatorDim.Fields;

    // Добавляем поле с идентификатором «NAME»

    Fields.Add("NAME");

    // Получаем индекс справочника, основанный на атрибуте «NAME»

    CreatorDim.Index := Dim.Indexes.FindById("INDEX_NAME");

    // Указываем, что будет использоваться атрибут «NAME»

    CCreator.UseNameAttribute := True;

    // Добавляем измерение фактов

    Facts := CCreator.Facts;

    // Добавляем факт

    CreatorFact := Facts.Add("VALUE");

    // Указываем, что факты в кубе будут локальные

    Facts.CreateExternalDimension := False;

    // Указываем поле таблицы, используемое для значения фактов

    CreatorFact.Field := "VALUE";

    // Указываем базовую информацию о создаваемом кубе

    CrInfo := MB.CreateCreateInfo;

    // Указываем папку, в которой будет создан куб

    CrInfo.Parent := Folder;

    // Создаем куб

    TmpCube := CCreator.CreateCube(CrInfo);

    // Сохраняем созданный куб в репозитории

    (TmpCube As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет инициализирован объект для создания
 кубов. Будет сформировано измерение на базе табличного справочника. Будет
 сформировано измерение фактов куба, состоящее из одного факта. Для него
 будет указано соответствующее поле таблицы. Куб будет создан и сохранен
 в папке «FOLDER_CUBES».


См. также:


[ICubeCreator](ICubeCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
