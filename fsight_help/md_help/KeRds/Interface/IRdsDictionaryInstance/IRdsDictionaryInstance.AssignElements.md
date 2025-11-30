# IRdsDictionaryInstance.AssignElements

IRdsDictionaryInstance.AssignElements
-


# IRdsDictionaryInstance.AssignElements


## Синтаксис


AssignElements(Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm));


## Параметры


Dimension. Данные справочника-источника,
 которые будут добавлены в текущий справочник НСИ.


## Описание


Метод AssignElements осуществляет
 заполнение дерева элементов справочника НСИ данными из указанного справочника
 репозитория.


## Комментарии


При заполнении должна соблюдаться уникальность и тип данных ключей элементов.
 Если вставляется элемент, ключ которого совпадает с ключом одного из элементов
 справочника НСИ, то генерируется исключительная ситуация. У вставляемых
 элементов для атрибута с назначением [Порядок](../IRdsAttributes/IRdsAttributes.Order.htm)
 будут сгенерированы новые значения.


## Пример


Для выполнения примера предполагается наличие в репозитории справочник
 НСИ с идентификатором DEST_DICT. Также в репозитории содержится справочник
 любого типа с идентификатором SOURCE_DICT.


			Sub UserProc;

Var

    MB: IMetabase;

    DictInst: IRdsDictionaryInstance;

    DimInst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    // Открываем справочник НСИ, в который будут загружены элементы из другого справочника

    DictInst := MB.ItemById("DEST_DICT").Open(Null) As IRdsDictionaryInstance;

    // Открываем справочник, из которого будут загружены элементы

    DimInst := MB.ItemById("SOURCE_DICT").Open(Null) As IDimInstance;

    // Загрузка элементов из справочника в справочник НСИ

    DictInst.AssignElements(DimInst);

End Sub UserProc;


При выполнении примера в дерево элементов справочника НСИ будут добавлены
 элементы из справочника SOURCE_DICT.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
