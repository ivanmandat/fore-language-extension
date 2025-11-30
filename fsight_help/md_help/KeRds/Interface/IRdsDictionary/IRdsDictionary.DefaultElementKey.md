# IRdsDictionary.DefaultElementKey

IRdsDictionary.DefaultElementKey
-


# IRdsDictionary.DefaultElementKey


## Синтаксис


DefaultElementKey: Integer;


## Описание


Свойство DefaultElementKey определяет
 элемент по умолчанию по его ключу.


## Комментарии


Если элемент по умолчанию не задан, то свойство возвращает значение
 -1.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT_OBJ. Ключ одного из элементов равен 11.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj: IMetabaseObject;

    Dict: IRdsDictionary;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    Obj := MB.ItemById("RDS_DICT_OBJ").Edit;

    Dict := Obj As IRdsDictionary;

    // Установим ключ элемента по умолчанию

    Dict.DefaultElementKey := 11;

    // Сохраняем справочник

    Obj.Save;

End Sub UserProc;


В результате выполнения примера в справочнике в качестве элемента по
 умолчанию будет задан элемент с ключом 11.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
