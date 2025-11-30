# IRdsNonUniqueKeys.Clear

IRdsNonUniqueKeys.Clear
-


# IRdsNonUniqueKeys.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет удаление
 всех неуникальных ключей справочника НСИ.


## Комментарии


Для добавления нового неуникального ключа справочника НСИ используйте
 метод [IRdsNonUniqueKeys.Add](IRdsNonUniqueKeys.Add.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «DICT_1».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Keys: IRdsNonUniqueKeys;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Keys := Dict.NonUniqueKeys;

    For i := 0 To Keys.Count - 1 do

        Debug.WriteLine(Keys.Item(i).Name + " " + Keys.Item(i).Id);

    End For;

    Keys.Clear;

    MObj.Save;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 и идентификаторы неуникальных ключей, после чего все неуникальные ключи
 справочника НСИ будут удалены из коллекции.


См. также:


[IRdsNonUniqueKeys](IRdsNonUniqueKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
