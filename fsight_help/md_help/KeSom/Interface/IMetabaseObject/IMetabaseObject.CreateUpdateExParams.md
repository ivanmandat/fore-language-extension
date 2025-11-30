# IMetabaseObject.CreateUpdateExParams

IMetabaseObject.CreateUpdateExParams
-


# IMetabaseObject.CreateUpdateExParams


## Синтаксис


CreateUpdateExParams: [IMetabaseUpdateObjectExParams](../IMetabaseUpdateObjectExParams/IMetabaseUpdateObjectExParams.htm);


## Описание


Метод CreateUpdateExParams создает
 параметры обновления объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 НСИ с идентификатором Dict_1.


Добавьте ссылки на системные сборки: Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: imetabase;

	    MU: IMetabaseUpdate;

	    Node: IMetabaseUpdateDataObjectNode;

	    Object: IMetabaseObject;

	    exParams: IMetabaseUpdateObjectExParams;

	Begin

	    Mb := MetabaseClass.Active;

	    MU := Mb.CreateUpdate;

	    Object := Mb.ItemById("Dict_1").Bind;

	    Node := MU.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    Node.Method := MetabaseUpdateMethod.All;

	    exParams := Object.CreateUpdateExParams;

	    If exParams Is IRdsDictionaryUpdateExParams Then

	        (exParams As IRdsDictionaryUpdateExParams).PreserveAccessAttributes := True;

	    End If;

	    Node.ExtendedParams := exParams;

	    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata; // Обновлять данные и метаданные

	    Node.PreserveExistingData := True; // Оставлять элементы, отсутствующие в исходном объекте

	    Node.Object := Object;

	    MU.SaveToFileNF("C:\temp\Up1.pefx");

	End Sub UserProc;


После выполнения примера будет создан файл обновления. В данное обновление
 будет включен указанный справочник НСИ. Для справочника отключено обновление
 атрибутов, отвечающих за права доступа.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
