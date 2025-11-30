# ICubeMetaUpdateEx.SourceDictionary

ICubeMetaUpdateEx.SourceDictionary
-


# ICubeMetaUpdateEx.SourceDictionary


## Синтаксис


SourceDictionary(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm)):
 [IMetaDictionary](kerds.chm::/interface/imetadictionary/imetadictionary.htm);


## Параметры


Dictionary. Справочник, метаданные
 которого необходимо получить.


## Описание


Свойство SourceDictionary возвращает
 указанные метаданные копируемой базы, при использовании метода [Load](ICubeMetaUpdateEx.Load.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO и файла C:\Replication.zip, содержащего копию базы данных временных
 рядов.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    CrInfo: IMetabaseObjectCreateInfo;

    s: string;

    Facts: IMetaDictionary;

    i: Integer;

    MetaAttr: IMetaAttribute;

Begin

    Mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := Mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.RdsDatabase := Mb.ItemById("RDS_REPO").Bind As IRdsDatabase;

    RubUpdateEx.Load("C:\Replication.zip");

    Facts := RubUpdateEx.SourceDictionary(RubricatorDictionary.Facts);

    For i := 0 To Facts.Attributes.Count - 1 Do

        MetaAttr := Facts.Attributes.Item(i);

        Debug.WriteLine(MetaAttr.Name);

    End For;

    RubUpdateEx.Apply(Null);

End Sub UserProc;


После выполнения примера в корневой папке репозитория из файла будет
 создана копия базы данных временных рядов. Идентификатор копии - FC_COPY.
 В окно консоли будут выведены наименования атрибутов показателей копируемой
 базы.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
