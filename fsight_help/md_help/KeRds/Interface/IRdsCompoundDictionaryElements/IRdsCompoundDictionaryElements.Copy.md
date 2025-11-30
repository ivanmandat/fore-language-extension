# IRdsCompoundDictionaryElements.Copy

IRdsCompoundDictionaryElements.Copy
-


# IRdsCompoundDictionaryElements.Copy


## Синтаксис


Copy(SourceInstance: [IRdsDictionaryInstance](../IRdsDictionaryInstance/IRdsDictionaryInstance.htm);
 SourceElement: Integer; DestinationParent: Integer): Integer;


## Параметры


SourceInstance - данные справочника,
 из которого осуществляется копирование.


SourceElement - ключ копируемого
 элемента.


DestinationParent - ключ элемента
 в составном справочнике, для которого копируемый элемент будет являться
 дочерним.


## Описание


Метод Copy осуществляет копирование
 элемента из справочника-источника в составной справочник НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего составной справочник НСИ с идентификатором "CompDict_1".
 У данного справочника имеется справочник-источник.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CompDict: IRdsCompoundDictionary;

	    CompSource: IRdsCompoundDictionarySource;

	    DictInst, DictInst1: IRdsDictionaryInstance;

	    CompElements: IRdsCompoundDictionaryElements;

	    Elements: IRdsDictionaryElements;

	Begin

	    MB := MetabaseClass.Active;

	    CompDict := MB.ItemByIdNamespace("CompDict_1", MB.ItemById("NSI_1").Key).Bind As IRdsCompoundDictionary;

	    CompSource := CompDict.Sources.Item(0);

	    DictInst := CompDict.Open(Null) As IRdsDictionaryInstance;

	    DictInst1 := CompSource.Source.Open(Null) As IRdsDictionaryInstance;

	    CompElements := DictInst.Elements As IRdsCompoundDictionaryElements;

	    Elements := DictInst1.Elements;

	    CompElements.Copy(DictInst1, Elements.Item(1).Key, -2);

	End Sub UserProc;


После выполнения примера в составной справочник будет скопирован первый
 элемент справочника-источника. Элемент будет скопирован в корень дерева
 элементов.


См. также:


[IRdsCompoundDictionaryElements](IRdsCompoundDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
