# IMetabaseUpdateDataObjectNode.ReferenceConstraintsHandling

IMetabaseUpdateDataObjectNode.ReferenceConstraintsHandling
-


# IMetabaseUpdateDataObjectNode.ReferenceConstraintsHandling


## Синтаксис


ReferenceConstraintsHandling: [UpdateDataConstraintsHandlingType](../../Enums/UpdateDataConstraintsHandlingType.htm);


## Описание


Свойство ReferenceConstraintsHandling
 определяет способ обработки ограничения целостности элементов обновляемого
 объекта.


## Комментарии


Данное свойство актуально при обновлении справочников НСИ, на элементы
 которых могут иметься ссылки из других справочников.


## Пример


Для выполнения примера предполагается наличие справочник НСИ с идентификатором
 Dict_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MUpdate: IMetabaseUpdate;

	    ObjNode: IMetabaseUpdateDataObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    // Обновляемый справочник

	    MDesc := MB.ItemById("Dict_1");

	    MUpdate := MB.CreateUpdate;

	    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    ObjNode.Label := MDesc.Id;

	    ObjNode.Method := MetabaseUpdateMethod.All;

	    ObjNode.Object := MDesc;

	    ObjNode.ReferenceConstraintsHandling := UpdateDataConstraintsHandlingType.Ask;

	    MUpdate.SaveToFileNF("c:\NSIDictionary.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. В данное обновление
 будет включён справочник НСИ. При обновлении элементов справочника, если
 на элементы справочника-приёмника, отсутствующие в обновлении, есть ссылки
 из других справочников, то будет выдаваться диалог выбора дальнейших действий.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
