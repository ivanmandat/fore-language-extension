# IRdsDictionaryElements.Attribute

IRdsDictionaryElements.Attribute
-


# IRdsDictionaryElements.Attribute


## Синтаксис


Attribute(Element: Integer; AttributeKey: Integer):
 Variant;


## Параметры


Element. Ключ элемента, для
 которого необходимо получить значение атрибута;


AttributeKey. Ключ атрибута,
 значение которого требуется получить.


## Описание


Свойство Attribute возвращает
 значение указанного атрибута для заданного элемента справочника НСИ.


## Комментарии


По умолчанию доступны значения только системных атрибутов. Для получения
 значений системных и пользовательских атрибутов присвойте свойству [IRdsDictionaryInstance.FetchAll](../IRdsDictionaryInstance/IRdsDictionaryInstance.FetchAll.htm)
 значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором EXP_DICT.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Attrs: IRdsAttributes;

    i, El, AttrKey: Integer;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemById("EXP_DICT").Bind As IRdsDictionary;

    Attrs := Dict.Attributes;

    AttrKey := Attrs.Name.Key; // ключ атрибута

    DictInst := Dict.Open(Null);

    Elements := DictInst.Elements;

    For i := 0 To Elements.RootItem.ChildrenCount - 1 Do

        El := Elements.Child(Elements.Root, i);

        Debug.WriteLine(Elements.Attribute(El, AttrKey));

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено значение
 атрибута «Наименование» для всех корневых элементов справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
