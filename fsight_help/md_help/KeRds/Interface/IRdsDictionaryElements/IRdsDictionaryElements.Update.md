# IRdsDictionaryElements.Update

IRdsDictionaryElements.Update
-


# IRdsDictionaryElements.Update


## Синтаксис


Update(Element: Integer; Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm));


## Параметры


Element - ключ элемента, данные
 которого необходимо обновить.


Data - данные, которые необходимо
 обновить у элемента.


## Описание


Метод Update осуществляет обновление
 данных элемента, ключ которого передается посредством параметра Element.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Key: Integer;

	    Data: IRdsDictionaryElementData;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    DictInst := Dict.Open(Null);

	    Elements := DictInst.Elements;

	    Key := Elements.Item(1).Key;

	    Data := Elements.Data(Key);

	    Data.Value(Data.AttributeIndex(Attrs.Name.Key)) := "Новое наименование";

	    Elements.Update(Key, Data);

	End Sub Button1OnClick;


После выполнения примера будут обновлены данные первого элемента справочника
 НСИ.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
