# ICubeMetaUpdateAdditionalObject.DescriptorOnly

ICubeMetaUpdateAdditionalObject.DescriptorOnly
-


# ICubeMetaUpdateAdditionalObject.DescriptorOnly


## Синтаксис


DescriptorOnly: Boolean;


## Описание


Свойство DescriptorOnly определяет
 признак включения в список копируемых объектов только описания объекта.


## Комментарии


Если свойству установлено значение True,
 то в объект копирования включается только описание объекта. В этом случае
 в репозитории, куда осуществляется копирование, предполагается существовании
 объекта такого же класса и с таким же идентификатором, либо должно быть
 задано свойство [Target](ICubeMetaUpdateAdditionalObject.Target.htm).
 Если для объекта указано свойство [Target](ICubeMetaUpdateAdditionalObject.Target.htm),
 то при копировании в копии базы будет осуществлена перенастройка на использование
 указанного в свойстве [Target](ICubeMetaUpdateAdditionalObject.Target.htm)
 объекта. Если объект отсутствует в репозитории, куда осуществляется копирование
 и свойство [Target](ICubeMetaUpdateAdditionalObject.Target.htm)
 не установлено, то при копировании генерируется исключительная ситуация.


Если база данных временных рядов основана на ярлыках, то свойство DescriptorOnly может использоваться
 для справочников, на которые ссылаются ярлыки. В этом случае во время
 копирования ярлык будет перенастроен на справочник, указанный в свойстве
 [Target](ICubeMetaUpdateAdditionalObject.Target.htm). Сам же
 справочник копироваться не будет.


Если свойству установлено значение False,
 то в объект копирования будет включен объект полностью (описание, параметры,
 структура, а также данные объекта в соответствии с настройками свойства
 [DataSettings](ICubeMetaUpdateAdditionalObject.DataSettings.htm)).
 При этом если объект существует в репозитории, куда осуществляется копирование,
 то он будет обновлен, иначе будет создан новый объект.


По умолчанию свойству установлено значение False.


Примечание.
 Недопустима установка свойству DescriptorOnly
 значения True, если для объекта
 указано свойство [TargetParent](ICubeMetaUpdateAdditionalObject.TargetParent.htm).


## Пример


Для выполнения примера предполагается наличие двух репозиториев. Оба
 репозитория расположены на одном сервере. В каждом репозитории созданы
 репозитории НСИ с идентификаторами «RDS». В репозиториях НСИ созданы справочники
 «UNITS» и «MEASURES», необходимые для работы базы данных временных рядов.
 В первом репозитории создана базы данных временных рядов «FC», которая
 будет скопирована во второй репозиторий. В базе создан дополнительный
 атрибут, основанный на ярлыке для справочника НСИ. Ярлык имеет идентификатор
 «SHORTCUT_COUNTRY», справочник НСИ, на который ссылается данный ярлык,
 имеет идентификатор «COUNTRY». В репозитории НСИ второго репозитория создан
 справочник «COUNTRY_1».


			Sub UserProc;

Var

    Mb, Mb2: IMetabase;

    Rds, Rds2: IRdsDatabase;

    Update: ICubeMetaUpdateEx;

    CreateInfo: IMetabaseObjectCreateInfo;

    Rubr: IRubricator;

    Remapings: ICubeMetaUpdateDictionaryRemapings;

    Remap: ICubeMetaUpdateDictionaryRemaping;

    Prerequisite: ICubeMetaUpdateAdditionalObjects;

    PrerequisiteObj: ICubeMetaUpdateAdditionalObject;

Begin

    Mb := MetabaseClass.Active;

    //Создание объекта копирования

    Update := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Update.Metabase := Mb;

    Rubr := Mb.ItemById("FC").Bind As IRubricator;

    //Копируемая база

    Update.Rubricator := Rubr;

    //...

    Mb2 := //Подключение к репозиторию, в который осуществляется копирование

    //...

    CreateInfo := Update.CreateInfo;

    CreateInfo.Parent := Mb2.Root;

    CreateInfo.Id := "FC_Copy";

    CreateInfo.Name := "FC_Copy";

    //Репозиторий НСИ в исходном репозитории

    Rds := Mb.ItemById("RDS").Bind As IRdsDatabase;

    //Репозиторий НСИ в репозитории, куда осуществляется копирование

    Rds2 := Mb2.ItemById("RDS").Bind As IRdsDatabase;

    Update.RdsDatabase := Rds2;

    //Перенастройка справочников

    Remapings := Update.DictionaryRemapings;

    Remap := Remapings.FindById("UNITS");

    Remap.Target := Mb2.ItemByIdNamespace("UNITS", (Rds2 As IMetabaseObject).Key);

    Remap := Remapings.Add;

    Remap.SourceId := "MEASURES";

    Remap.Target := Mb2.ItemByIdNamespace("MEASURES", (Rds2 As IMetabaseObject).Key);

    //Настройка объектов, копируемых перед базой
 данных временных рядов

    Prerequisite := Update.PrerequisiteObjects;

    //Исходный справочник COUNTRY

    PrerequisiteObj := Prerequisite.Add(MB.ItemByIdNamespace("COUNTRY", (Rds As IMetabaseObject).Key));

    //Справочник, который будет использоваться в копии базы
 вместо справочника COUNTRY

    PrerequisiteObj.Target := MB2.ItemByIdNamespace("COUNTRY_1", (Rds2 As IMetabaseObject).Key);

    PrerequisiteObj.DescriptorOnly := True;

    //Ярлык для справочника НСИ, на котором основан
 атрибут базы данных временных рядов

    PrerequisiteObj := Prerequisite.Add(MB.ItemById("SHORTCUT_COUNTRY"));

    PrerequisiteObj.TargetParent := (Rds2 As IMetabaseObject);

    //Копирование базы данных
 временных рядов

    Update.Apply(Null);

End Sub UserProc;


После выполнения примера будет осуществлено копирование базы данных
 временных рядов из текущего репозитория в репозиторий, к которому будет
 осуществлено подключение и контекст которого должен быть передан в переменную
 «Mb2». Перед копированием базы также будет скопирован ярлык, на котором
 основан атрибут базы. Данный ярлык будет перенастроен на справочник НСИ
 с идентификатором «COUNTRY_1». Исходный справочник «COUNTRY» в процессе
 копирования не участвует, его описание включено в коллекцию «Prerequisite»
 именно для перенастройки соответствующего ярлыка.


См. также:


[ICubeMetaUpdateAdditionalObject](ICubeMetaUpdateAdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
