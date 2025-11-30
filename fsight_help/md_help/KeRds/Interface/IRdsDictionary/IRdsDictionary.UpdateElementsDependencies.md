# IRdsDictionary.UpdateElementsDependencies

IRdsDictionary.UpdateElementsDependencies
-


# IRdsDictionary.UpdateElementsDependencies


## Синтаксис


UpdateElementsDependencies;


## Описание


Метод UpdateElementsDependencies
 обновляет все ссылки на элемент «Связь».


## Комментарии


Для обновления ссылки на элемент «Связь» по ключу используйте метод
 [IRdsDictionary.UpdateElementDependencies](IRdsDictionary.UpdateElementDependencies.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «DIM», содержащего элементы, ссылающиеся на элементы
 из других объектов.


Добавьте ссылки на системные сборки Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("DIM").Bind;

    Dict := MObj As IRdsDictionary;

    Dict.UpdateElementsDependencies;

End Sub UserProc;


В результате выполнения примера будут обновлены все ссылки на элемент
 «Связь».


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
