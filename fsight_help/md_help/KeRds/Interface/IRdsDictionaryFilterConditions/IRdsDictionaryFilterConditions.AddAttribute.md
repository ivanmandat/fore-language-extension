# IRdsDictionaryFilterConditions.AddAttribute

IRdsDictionaryFilterConditions.AddAttribute
-


# IRdsDictionaryFilterConditions.AddAttribute


## Синтаксис


AddAttribute(AttributeId: String): [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Параметры


AttributeId. Идентификатор
 атрибута справочника НСИ.


## Описание


Метод AddAttribute добавляет
 фильтр в коллекцию по указанному идентификатору атрибута.


## Комментарии


После выполнения метод возвращает настройки добавленного фильтра. Фильтр
 добавляется в конец коллекции, при этом значение свойства [IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm)
 увеличивается на единицу.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащим неверсионный
 справочник НСИ с идентификатором «DICT».
 Справочник содержит атрибут логического типа с идентификатором «ACTUAL».


Также необходимо добавить ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    mb: IMetabase;

    RdrRepoDescr: IMetabaseObjectDescriptor;

    RdsDictObj: IMetabaseObject;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

    BatchFilters: IRdsDictionaryFilterConditions;

    Filter: IRdsDictionaryFilterCondition;

Begin

    mb := MetabaseClass.Active;

    RdrRepoDescr := mb.ItemById("RDS_REPO");

    RdsDictObj := mb.ItemByIdNamespace("DICT", RdrRepoDescr.Key).Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    BatchFilters := DelBatch.Filter;

    Filter := BatchFilters.AddAttribute("ACTUAL");

    Filter.Value := False;

    DelBatch.Execute;

    RdsDictObj.Save;

End Sub UserProc;


После выполнения примера будет создан пакет, предназначенный для удаления
 элементов. Для пакета будет создан фильтр по значению атрибута «ACTUAL».
 Затем пакет будет выполнен.


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
