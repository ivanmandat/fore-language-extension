# IRdsDictionaryFilterConditions.Assign

IRdsDictionaryFilterConditions.Assign
-


# IRdsDictionaryFilterConditions.Assign


## Синтаксис


Assign(Value: [IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm));


## Параметры


Value. Коллекция фильтров,
 параметры которой будут скопированы.


## Описание


Метод Assign выполняет копирование
 параметров коллекции фильтров.


## Комментарии


Если параметр Value принимает
 значение Null, то все параметры
 коллекции фильтров будут сброшены.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащим неверсионный
 справочник НСИ с идентификатором «DICT».
 Также предполагается наличие объекта «FilterCopy» типа [IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm).


Необходимо добавить ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    mb: IMetabase;

    RdrRepoDescr: IMetabaseObjectDescriptor;

    RdsDictObj: IMetabaseObject;

    DictInst: IRdsDictionaryInstance;

    DictBatch: IRdsDictionaryBatch;

    DelBatch: IRdsDictionaryBatchDelete;

    BatchFilters: IRdsDictionaryFilterConditions;

    FilterCopy: IRdsDictionaryFilterConditions;

Begin

    mb := MetabaseClass.Active;

    RdrRepoDescr := mb.ItemById("RDS_REPO");

    RdsDictObj := mb.ItemByIdNamespace("DICT", RdrRepoDescr.Key).Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    DictBatch := DictInst.CreateBatch(RdsDictionaryBatchType.Delete);

    DelBatch := DictBatch As IRdsDictionaryBatchDelete;

    BatchFilters := DelBatch.Filter;

    BatchFilters.Assign(FilterCopy);

    DelBatch.Execute;

    RdsDictObj.Save;

End Sub UserProc;


После выполнения примера будет создан пакет для удаления элементов,
 параметры фильтрации которого будут скопированы из объекта «FilterCopy».
 Затем пакет будет выполнен.


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
