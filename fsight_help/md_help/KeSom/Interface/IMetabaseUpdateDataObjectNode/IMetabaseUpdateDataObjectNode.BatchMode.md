# IMetabaseUpdateDataObjectNode.BatchMode

IMetabaseUpdateDataObjectNode.BatchMode
-


# IMetabaseUpdateDataObjectNode.BatchMode


## Синтаксис


BatchMode: [ObjectUpdateDataBatchMode](../../Enums/ObjectUpdateDataBatchMode.htm);


## Описание


Свойство BatchMode определяет
 способ обновления данных объекта.


## Комментарии


Обновление доступно для таблиц, баз данных временных рядов и справочников
 НСИ.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MBDesc: IMetabaseObjectDescriptor;

    MUpdate: IMetabaseUpdate;

    ObjNode: IMetabaseUpdateDataObjectNode;

Begin

    MB := MetabaseClass.Active;

    MBDesc := MB.ItemById("TSDB");

    MUpdate := MB.CreateUpdate;

    MUpdate.BoundType := MetabaseObjectUpdateBoundType.ById;

    MUpdate.Description := "Обновление базы данных временных рядов";

    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    //Указание обновляемого объекта

    ObjNode.Object := MBDesc;

    //Параметры обновления

    ObjNode.Label := MBDesc.Id;

    ObjNode.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

    ObjNode.BoundType := MetabaseObjectUpdateBoundType.ByKey;

    ObjNode.Method := MetabaseUpdateMethod.All;

    ObjNode.IncludeChildrenDependencies := TriState.OnOption;

    ObjNode.AllowExistingRubricatorUpdate := True;

    ObjNode.BatchMode := ObjectUpdateDataBatchMode.Override;

    //Сохранение обновления

    MUpdate.SaveToFileNF("C:\Update.pefx");

End Sub UserProc;


При выполнении примера будет создан файл обновления. В данное обновление
 будет включена база данных временных рядов «TSDB». Если применить созданное
 обновление, то будут перезаписаны все данные рядов, также для базы данных
 временных рядов будут обновлены наименование, идентификатор, родительская
 папка и структура встроенного календаря.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
