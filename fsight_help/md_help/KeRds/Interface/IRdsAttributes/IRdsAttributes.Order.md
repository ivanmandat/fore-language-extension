# IRdsAttributes.Order

IRdsAttributes.Order
-


# IRdsAttributes.Order


## Синтаксис


Order: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Order возвращает системный
 атрибут справочника, назначение которого - Порядок элемента.


## Комментарии


Данный атрибут имеет целый тип, не может содержать пустые и множественные
 значения. По умолчанию является скрытым. Идентификатор атрибута - ORD.


## Пример


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 DICT_1.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Elements: IRdsDictionaryElements;

    Attrs: IRdsAttributes;

    i, key: Integer;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemById("DICT_1").Bind As IRdsDictionary;

    Attrs := Dict.Attributes;

    key := Attrs.Order.Key; // ключ атрибута

    DictInst := Dict.Open(Null);

    Elements := DictInst.Elements;

    For i := 1 To Elements.Count - 1 Do

        Debug.WriteLine(Elements.Item(i).Attribute(key));

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены значения атрибута
 "Порядок" для всех элементов справочника.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
