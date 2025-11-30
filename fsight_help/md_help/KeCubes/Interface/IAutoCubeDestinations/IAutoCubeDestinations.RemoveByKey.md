# IAutoCubeDestinations.RemoveByKey

IAutoCubeDestinations.RemoveByKey
-


# IAutoCubeDestinations.RemoveByKey


## Синтаксис


RemoveByKey(Key: Integer): Boolean;


## Параметры


Key. Ключ варианта отображения,
 который необходимо удалить.


## Описание


Метод RemoveByKey осуществляет
 удаление варианта отображения автоматического куба, ключ которого передается
 посредством параметра Key.


## Пример


Для выполнения примера в репозитории предполагается наличие автоматического
 куба с идентификатором AUTOCUBE.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    AutoCub: IAutoCube;

    Dests: IAutoCubeDestinations;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("AUTOCUBE").Edit;

    AutoCub := MObj As IAutoCube;

    Dests := AutoCub.Destinations;

    Dests.RemoveByKey(Dests.Item(Dests.Count - 1).Key);

    MObj.Save;

End Sub UserProc;


После выполнения примера из автоматического куба будет удален последний
 вариант отображения.


См. также:


[IAutoCubeDestinations](IAutoCubeDestinations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
