# IRdsDictionaryInstance.CreateElementData

IRdsDictionaryInstance.CreateElementData
-


# IRdsDictionaryInstance.CreateElementData


## Синтаксис


CreateElementData: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Описание


Метод CreateElementData создает
 объект, содержащий данные атрибутов элемента справочника НСИ.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «MDM_REPO». Данный репозиторий должен содержать
 справочник НСИ с идентификатором «MDM_DICT». В справочнике присутствует
 пользовательский атрибут логического типа с идентификатором «ACTUAL».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    MdmKey: Integer;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Data: IRdsDictionaryElementData;

    Attr: IRDsAttributes;

    Elements: IRdsDictionaryElements;

    Key: Integer;

Begin

    MB := MetabaseClass.Active;

    MdmKey := MB.ItemById("MDM_REPO").Key;

    Dict := MB.ItemByIdNamespace("MDM_DICT", MdmKey).Bind As IRdsDictionary;

    // Открываем справочник НСИ

    DictInst := Dict.Open(Null);

    DictInst.FetchAll := True;

    // Создаем элемент справочника

    Data := DictInst.CreateElementData;

    Attr := Dict.Attributes;

    Data.Attribute(Attr.Name.Key) := "Новый элемент";

    Data.Attribute(Attr.FindById("ACTUAL").Key) := True;

    Elements := DictInst.Elements;

    // Добавляем созданный элемент в справочник

    Key := DictInst.Insert(Elements.Root, Data);

End Sub UserProc;


Результат выполнения примера: в справочник НСИ добавлен новый элемент
 с наименованием «Новый элемент» и значением атрибута «ACTUAL» - True. В переменной Key
 будет содержаться ключ созданного элемента.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
