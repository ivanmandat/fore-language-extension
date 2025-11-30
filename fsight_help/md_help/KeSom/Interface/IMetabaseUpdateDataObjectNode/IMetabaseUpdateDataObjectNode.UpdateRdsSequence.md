# IMetabaseUpdateDataObjectNode.UpdateRdsSequence

IMetabaseUpdateDataObjectNode.UpdateRdsSequence
-


# IMetabaseUpdateDataObjectNode.UpdateRdsSequence


## Синтаксис


UpdateRdsSequence: Boolean;


## Описание


Свойство UpdateRdsSequence определяет признак обновления системной последовательности, которая используется для генерации ключей элементов в справочниках НСИ.


## Комментарии


По умолчанию свойству установлено значение False, при этом во время обновления справочника системная последовательность не обновляется. Если свойству установить значение True, то при копировании справочников НСИ будет обновлено значение системной последовательности. Обновление осуществляется по следующему алгоритму:


-
Определяется максимальное значение ключа элементов справочника НСИ.


-
Определяется максимальное значение версии элементов справочника НСИ.


-
Выбирается максимальное из полученных значений и сравнивается с текущим значением системной последовательности репозитория.


-
Если значение системной последовательности меньше, то оно будет заменено на выбранное максимальное значение.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «NSI_1». В данном репозитории имеется справочник НСИ с идентификатором «Dict_1».


			Sub UserProc;

Var

    Mb: IMetabase;

    MUpdate: IMetabaseUpdate;

    RootFolder: IMetabaseUpdateFolderNode;

    Node: IMetabaseUpdateDataObjectNode;

Begin

    Mb := MetabaseClass.Active;

    MUpdate := Mb.CreateUpdate;

    RootFolder := MUpdate.RootFolder;

    Node := RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    Node.BatchMode := ObjectUpdateDataBatchMode.InsertOnly;

    Node.Object := Mb.ItemByIdNamespace("Dict_1", Mb.ItemById("NSI_1").Key).Bind;

    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

    Node.UpdateRdsSequence := True;

    MUpdate.SaveToFileNF("C:\Dict_1.pefx");

End Sub UserProc;


При выполнении примера будет создано новое обновление. В состав обновления будет включен указанный справочник НСИ. Для справочника будут обновляться данные и метаданные. Обновление будет сохранено в указанный файл. Если созданное обновление где-либо применить, то обновляемый справочник будет дополняться только новыми данными. Также при применении обновления будет обновлена системная последовательность, используемая для генерации ключей элементов в справочниках НСИ.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
