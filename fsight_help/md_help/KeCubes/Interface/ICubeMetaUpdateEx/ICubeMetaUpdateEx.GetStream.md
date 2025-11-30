# ICubeMetaUpdateEx.GetStream

ICubeMetaUpdateEx.GetStream
-


# ICubeMetaUpdateEx.GetStream


## Синтаксис


GetStream(Tag: String): Object;


## Параметры


Tag. Наименование потока.


## Описание


Метод GetStream извлекает пользовательский
 поток данных из копируемой базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO и файла C:\Param.zip, содержащего копию базы данных временных
 рядов и пользовательский поток UserStream.


			Sub UserProc;

Var

    RubUpdateEx: ICubeMetaUpdateEx;

    Mb: IMetabase;

    Rds: IRdsDatabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Stream: IMemoryStream;

    s: string;

Begin

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Mb := MetabaseClass.Active;

    RubUpdateEx.Metabase := Mb;

    Rds := Mb.ItemById("RDS_REPO").Bind As IRdsDatabase;

    RubUpdateEx.RdsDatabase := Rds;

    RubUpdateEx.Load("C:\Param.zip");

    Stream := RubUpdateEx.GetStream("UserStream") As IMemoryStream;

    Debug.WriteLine(Stream.ReadByte);

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.Apply(Null);

End Sub UserProc;


После выполнения примера в корневой папке репозитория из файла C:\Param.zip
 будет скопирована база данных временных рядов с идентификатором FC_COPY.
 В окно консоли будет выведен первый байт пользовательского потока UserStream,
 сохраненного в файле.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
