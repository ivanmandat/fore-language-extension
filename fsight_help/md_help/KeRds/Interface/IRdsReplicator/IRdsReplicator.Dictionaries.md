# IRdsReplicator.Dictionaries

IRdsReplicator.Dictionaries
-


# IRdsReplicator.Dictionaries


## Синтаксис


Dictionaries: [IRdsDictionarySet](../IRdsDictionarySet/IRdsDictionarySet.htm);


## Описание


Свойство Dictionaries возвращает коллекцию справочников, данные которых необходимо синхронизировать.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «NSI_1». Добавьте ссылки на системные сборки «Metabase», «Rds».


			Function CreateList(Parent: Integer; DictSet: IRdsDictionarySet; MB: IMetabase): IRdsDictionarySet;

Var

    MObj: IMetabaseObjectDescriptor;

    MObjChilds: IMetabaseObjectDescriptors;

    MObjChildDesct: IMetabaseObjectDescriptor;

    MObjChild: IMetabaseObject;

    Dict: IRdsDictionary;

    i: Integer;

Begin

    MObj := MB.Item(Parent);

    MObjChilds := MObj.Children;

    For i := 0 To MObjChilds.Count - 1 Do

        MObjChildDesct := MObjChilds.Item(i);

        // Если справочник либо составной справочник НСИ
        MObjChild := MObjChildDesct.Bind;

        If MObjChild Is IRdsDictionary Then

            Dict := MObjChild As IRdsDictionary;

            If Dict.Distributed Then

                DictSet.Add(Dict);

            End If;

            // Если папка в репозитории НСИ
        Elseif MObjChild Is IFolder Then

            CreateList(MObjChild.Key, DictSet, MB);

        End If;

    End For;

    Return DictSet;

End Function CreateList;


Sub UserPr;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    NSI: IRdsDatabase;

    NSIInst: IRdsDatabaseInstance;

    Replic: IRdsReplicator;

    DictSet: IRdsDictionarySet;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("NSI_1").Bind;

    NSI := MObj As IRdsDatabase;

    NSIInst := NSI.Open(Null);

    Replic := NSIInst.CreateReplicator;

    DictSet := Replic.Dictionaries;

    DictSet := CreateList(MObj.Key, DictSet, MB);

    Replic.SaveToFile("C:\Sinc.rpl");

End Sub UserPr;


После выполнения процедуры UserPr будет осуществлен рекурсивный просмотр всех справочников, содержащихся в репозитории НСИ. Справочники, в которых содержится уникальный идентификатор элементов, будут добавлены в список синхронизации. Данные всех справочников, попавших в список, будут сохранены в файл «C:\Sinc.rpl».


См. также:


[IRdsReplicator](IRdsReplicator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
