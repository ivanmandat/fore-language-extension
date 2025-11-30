# IRdsDictionaryBatchUpdate.SetData

IRdsDictionaryBatchUpdate.SetData
-


# IRdsDictionaryBatchUpdate.SetData


## Синтаксис


SetData(Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm));


## Параметры


Data. Обновляемые данные.


## Описание


Метод SetData устанавливает
 данные, которые необходимо обновить.


## Комментарии


Для получения данных справочника НСИ используйте метод [IRdsDictionaryElements.CreateData](../IRdsDictionaryElements/IRdsDictionaryElements.CreateData.htm).


## Пример


Для выполнения примера в репозитории требуется наличие табличного справочника
 НСИ с идентификатором DICT.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    RdsDictObj: IMetabaseObject;

    RdsDict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Batch: IRdsDictionaryBatchUpdate;

    Attr: IRdsAttribute;

    data: IRdsDictionaryElementData;

    Filters: IRdsDictionaryFilterConditions;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем справочник

    RdsDictObj := mb.ItemById("DICT_COPY1").Edit;

    DictInst := RdsDictObj.Open(Null) As IRdsDictionaryInstance;

    // Создаем пакет для обновления элементов

    batch := DictInst.CreateBatch(RdsDictionaryBatchType.Update) As IRdsDictionaryBatchUpdate;

    data := DictInst.Elements.CreateData;

    RdsDict := RdsDictObj As IRdsDictionary;

    // Выбираем атрибут справочника

    Attr := RdsDict.Attributes.FindById("NAME");

    // Фильтруем элементы справочника по выбранному атрибуту

    Filters := batch.Filter;

    If Filters.FindByAttribute(Attr) <> Null Then

        Filters.Clear;

    End If;

    // Задаем новое значение элементов по выбранному атрибуту

    data.Value(data.AttributeIndex(Attr.Key)) := "Element " + DateTime.Now.ToString;

    // Обновляем данные

    batch.SetData(data);

    batch.Execute;

End Sub UserProc;


В результате выполнения примера у всех элементов справочника DICT будут
 заменены наименования.


См. также:


[IRdsDictionaryBatchUpdate](IRdsDictionaryBatchUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
