# IRdsDictionaryElementData.DisplayAttribute

IRdsDictionaryElementData.DisplayAttribute
-


# IRdsDictionaryElementData.DisplayAttribute


## Синтаксис


DisplayAttribute(AttributeKey: Integer): Variant;


## Параметры


AttributeKey - ключ атрибута,
 по которому необходимо получить отображаемое значение.


## Описание


Свойство DisplayAttribute возвращает
 значение, которое будет отображаться по атрибуту с ключом AttributeKey
 для элемента.


## Пример


Для выполнения примера предполагается наличие в репозитория НСИ с идентификатором
 «NSI_1». В данном репозитории создан справочник НСИ с идентификатором
 «Dict_1».


			Sub UserProc;

Var

    MB: IMetabase;

    DictInst: IRdsDictionaryInstance;

    Element: IRdsDictionaryElement;

Begin

    MB := MetabaseClass.Active;

    DictInst := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Open(Null) As IRdsDictionaryInstance;

    Element := DictInst.Elements.Item(1);

    Debug.WriteLine(Element.DisplayAttribute(DictInst.Attributes.FindById("NAME").Key));

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено значение,
 которое будет отображаться для указанного элемента справочника по атрибуту
 наименование.


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
