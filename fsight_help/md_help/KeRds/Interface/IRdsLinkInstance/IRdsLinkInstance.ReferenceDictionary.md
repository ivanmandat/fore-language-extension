# IRdsLinkInstance.ReferenceDictionary

IRdsLinkInstance.ReferenceDictionary
-


# IRdsLinkInstance.ReferenceDictionary


## Синтаксис


ReferenceDictionary: [IRdsDictionaryInstance](../IRdsDictionaryInstance/IRdsDictionaryInstance.htm);


## Описание


Свойство ReferenceDictionary
 возвращает данные связанного справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификаторами "Dict_1". В справочнике
 имеется связь с каким-либо другим справочником НСИ. В качестве связываемого
 атрибута выступает атрибут с идентификатором "ATTRIBUTE".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst, RefDictInst: IRdsDictionaryInstance;

	    LinkInst: IRdsLinkInstance;

	    Data: IRdsDictionaryElementData;

	    Attr: IRDsAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    LinkInst := DictInst.Links.Item(0);

	    RefDictInst := LinkInst.ReferenceDictionary;

	    Data := DictInst.CreateElementData;

	    Attr := Dict.Attributes;

	    Data.Attribute(Attr.Name.Key) := "Test";

	    //Связанный атрибут

	    Data.Attribute(Attr.FindById("ATTRIBUTE").Key) := RefDictInst.Elements.Item(4).Key;

	    DictInst.Insert(-2, Data);

	End Sub UserProc;


После выполнения примера в корень справочника НСИ будет добавлен новый
 элемент. В качестве значения атрибута связи будет выбран четвертый элемент
 связанного справочника.


См. также:


[IRdsLinkInstance](IRdsLinkInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
