# IRdsDictionaryInstance.ClearData

IRdsDictionaryInstance.ClearData
-


# IRdsDictionaryInstance.ClearData


## Синтаксис


ClearData([ForceClearReferences: Boolean = False]);


## Параметры


ForceClearReferences. Необязательный параметр в Fore. Определяет, удалять ли принудительно элементы, на которые существуют ссылки в связанных справочниках.


## Описание


Метод ClearData удаляет все элементы из справочника НСИ.


## Комментарии


Метод выполняется с учетом параметра ForceClearReferences. Допустимые значения параметра:


-
True. Из справочника принудительно удаляются элементы, на которые существуют ссылки в связанных справочниках;


-
False. Из справочника удаляются все несвязанные элементы. Если присутствуют элементы, на которые ссылаются элементы из связанных справочников, то будет сгенерирована исключительная ситуация. В Fore значение False используется по умолчанию.


Примечание. Удаление элементов выполняется без учета параметров, с которыми был открыт справочник. Для открытия справочника с параметром используйте метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория НСИ с идентификатором «MDM», содержащего справочник НСИ с идентификатором «MDM_DICT».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserClearDict;
Var

    MB: IMetabase;

    MDMObj: IMetabaseObjectDescriptor;

    Dict: IRdsDictionary;

    DictInst: IRdsDictionaryInstance;
Begin

    MB := MetabaseClass.Active;

    // Получаем репозиторий НСИ
    MDMObj := MB.ItemById("MDM");

    // Получаем справочник НСИ
    Dict := MB.ItemByIdNamespace("MDM_DICT", MDMObj.Key).Bind As IRdsDictionary;

    // Открываем справочник
    DictInst := Dict.Open(Null);

    // Удаляем все элементы
    DictInst.ClearData(True);
End Sub UserClearDict;


Результат выполнения примера: из справочника «MDM_DICT» удалены все элементы.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
