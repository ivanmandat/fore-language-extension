# IMetabaseUpdateObjectNode.ExtendedParams

IMetabaseUpdateObjectNode.ExtendedParams
-


# IMetabaseUpdateObjectNode.ExtendedParams


## Синтаксис


ExtendedParams: [IMetabaseUpdateObjectExParams](../IMetabaseUpdateObjectExParams/IMetabaseUpdateObjectExParams.htm);


## Описание


Свойство ExtendedParams определяет
 дополнительные параметры обновления объектов.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором Dict_1.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MU: IMetabaseUpdate;

	    Node: IMetabaseUpdateDataObjectNode;

	    MObj: IMetabaseObject;

	    ExParams: IMetabaseUpdateObjectExParams;

	Begin

	    Mb := MetabaseClass.Active;

	    MU := Mb.CreateUpdate;

	    MObj := Mb.ItemById("Dict_1").Bind;

	    Node := MU.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    Node.Method := MetabaseUpdateMethod.All;

	    ExParams := MObj.CreateUpdateExParams;

	    If ExParams Is IRdsDictionaryUpdateExParams Then

	        (ExParams As IRdsDictionaryUpdateExParams).PreserveAccessAttributes := True;

	    End If;

	    Node.ExtendedParams := ExParams;

	    // Обновлять данные и метаданные

	    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

	    // Оставлять элементы, отсутствующие в исходном объекте

	    Node.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

	    Node.Object := MObj;

	    MU.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера будет создан файл обновления. В данное обновление
 будет включен указанный справочник НСИ. Для справочника отключено обновление
 атрибутов, отвечающих за права доступа.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
