# IRdsNonUniqueKeys.FindById

IRdsNonUniqueKeys.FindById
-


# IRdsNonUniqueKeys.FindById


## Синтаксис


FindById(Id: String): [IRdsNonUniqueKey](../IRdsNonUniqueKey/IRdsNonUniqueKey.htm);


## Параметры


Id. Идентификатор неуникального
 ключа, по которому осуществляется поиск.


## Описание


Метод FindById осуществляет
 поиск неуникального ключа по идентификатору в справочнике НСИ.


## Комментарии


Для удаления неуникального ключа по индексу используйте метод [IRdsNonUniqueKeys.Remove](IRdsNonUniqueKeys.Remove.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «DICT_1». В справочнике
 должны быть добавлены пользовательские атрибуты с неуникальными ключами.
 Первый неуникальный ключ характеризуется индексом «Index_1», второй неуникальный
 ключ -ключом «1».


Добавьте ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Keys: IRdsNonUniqueKeys;

Begin

    MB:= MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Keys := Dict.NonUniqueKeys;

    Keys.FindById("Index_1");

    Keys.FindByKey(1);

    Keys.Remove(0);

    Keys.RemoveByKey(1);

    MObj.Save;

End Sub UserProc;


В результате выполнения примера будут найдены и затем удалены неуникальные
 ключи по заданным индексам и ключам.


См. также:


[IRdsNonUniqueKeys](IRdsNonUniqueKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
