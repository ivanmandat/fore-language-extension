# IRdsDictionaryInstance.Delete

IRdsDictionaryInstance.Delete
-


# IRdsDictionaryInstance.Delete


## Синтаксис


Delete(Element: Integer);


## Параметры


Element. Ключ элемента справочника
 НСИ.


## Описание


Метод Delete осуществляет удаление
 элемента справочника НСИ, ключ которого передается посредством параметра
 Element.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Key: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Key := DictInst.Elements.Item(1).Key;

	    DictInst.Delete(Key);

	End Sub UserProc;


После выполнения примера будет удален заданный элемент справочника НСИ.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
