# IRdsDictionaryInstance.Insert

IRdsDictionaryInstance.Insert
-


# IRdsDictionaryInstance.Insert


## Синтаксис


Insert(Parent: Integer; Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm)):
 Integer;


## Параметры


Parent. Ключ родительского
 элемента;


Data. Данные добавляемого элемента.


## Описание


Метод Insert вставляет новый
 элемент в справочник в соответствии с указанными параметрами.


## Комментарии


Параметр Parent может
 принимать специальное значение:


	- -2. Новый элемент будет
	 вставлен в корень справочника НСИ после всех элементов.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «MDM_REPOSITORY», содержащего справочник НСИ с идентификатором
 «MDM_DICTIONARY». Данный справочник должен содержать только системные
 атрибуты.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MDMKey: Integer;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;

    Data: IRdsDictionaryElementData;

    Attr: IRDsAttributes;

    Key: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получаем репозиторий НСИ

    MDMKey := MB.ItemById("MDM_REPOSITORY").Key;

    // Получаем справочник НСИ

    Dict := MB.ItemByIdNamespace("MDM_DICTIONARY", MDMKey).Bind As IRdsDictionary;

    DictInst := Dict.Open(Null);

    // Создаём новый элемент справочника

    Data := DictInst.CreateElementData;

    Attr := Dict.Attributes;

    Data.Attribute(Attr.Name.Key) := "Новый элемент";

    // Вставляем элемент в справочник

    Key := DictInst.Insert(-2, Data);

End Sub UserProc;


После выполнения примера в корень справочника НСИ после всех существующих
 элементов будет добавлен новый элемент. В переменной «Key»
 будет храниться значение ключа добавленного элемента.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
