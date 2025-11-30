# IMetabaseUpdate.EventsNode

IMetabaseUpdate.EventsNode
-


# IMetabaseUpdate.EventsNode


## Синтаксис


		EventsNode:
		 [IMetabaseUpdateObjectNode](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.htm);


## Описание


Свойство EventsNode определяет
 модуль обновления.


## Пример


Для выполнения примера в репозитории предполагается наличие модуля с
 идентификатором MODULE, а также репозитория НСИ NSI, содержащего справочник
 НСИ DICT. Структура модуля соответствует структуре модуля обновления.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MUpdate: IMetabaseUpdate;

		    RootFolder: IMetabaseUpdateFolderNode;

		    Node: IMetabaseUpdateObjectNode;

		    DNode: IMetabaseUpdateDataObjectNode;

		Begin

		    Mb := MetabaseClass.Active;

		    MUpdate := Mb.CreateUpdate;

		    RootFolder := MUpdate.RootFolder;

		    //Модуль обновления

		    Node := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Node.Object := Mb.ItemById("MODULE");

		    MUpdate.EventsNode := Node;

		    //Справочник НСИ

		    DNode := RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    DNode.Method := MetabaseUpdateMethod.All;

		    DNode.Object := MB.ItemByIdNamespace("DICT",MB.ItemById("NSI").Key);

		    DNode.ReferenceConstraintsHandling:= UpdateDataConstraintsHandlingType.Ask;

		    DNode.UpdatePart := MetabaseObjectUpdatePart.DataMetadataSD;

		    MUpdate.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будет создано новое обновление. В обновление
 будут включены модуль и справочник НСИ. Модуль будет объявлен как модуль
 обновления.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)
 | [Модуль
 обновления](UpdManager.chm::/CreateUpdate/Features/Admin_CreateUpdate_Features_Module.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
