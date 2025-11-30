# IRdsDictionary.UpdateElementDependencies

IRdsDictionary.UpdateElementDependencies
-


# IRdsDictionary.UpdateElementDependencies


## Синтаксис


UpdateElementDependencies(Element: Integer);


## Параметры


Element. Ключ элемента.


## Описание


Метод UpdateElementDependencies
 обновляет ссылку на элемент «Связь» по ключу.


## Комментарии


Для обновления всех ссылок на элемент «Связь» используйте метод [IRdsDictionary.UpdateElementsDependencies](IRdsDictionary.UpdateElementsDependencies.htm).


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

    Dict.UpdateElementDependencies(1);

End Sub UserProc;


В результате выполнения примера будет обновлена ссылка на элемент «Связь»
 с ключом «1».


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
