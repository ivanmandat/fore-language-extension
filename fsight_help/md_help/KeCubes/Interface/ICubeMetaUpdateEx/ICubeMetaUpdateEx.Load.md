# ICubeMetaUpdateEx.Load

ICubeMetaUpdateEx.Load
-


# ICubeMetaUpdateEx.Load


## Синтаксис


Load(FileName: String);


## Параметры


FileName.
 Наименование файла, из которого будет загружена база данных временных
 рядов. В качестве значения параметра должен быть указан путь и наименование
 ZIP-файла, содержащего данные базы данных временных рядов.


## Описание


Метод Load загружает базу данных
 временных рядов из файла.


## Комментарии


Если база данных временных рядов копируется из одного репозитория в
 другой, то справочники НСИ в репозитории-приёмнике должны быть клонами
 справочников исходного репозитория.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO» и файла «C:\Replication», содержащего данные базы данных временных
 рядов.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    CrInfo: IMetabaseObjectCreateInfo;

    s: string;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.RdsDatabase := Mb.ItemById("RDS_REPO").Bind As IRdsDatabase;

    RubUpdateEx.Load("C:\Replication.zip");

    RubUpdateEx.Apply(Null);

End Sub UserProc;


После выполнения примера в корневой папке репозитория из файла «C:\Replication»
 будет загружена база данных временных рядов с идентификатором «FC_COPY».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
