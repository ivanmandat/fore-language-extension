# ICubeMetaUpdateAdditionalObjects.FindByKey

ICubeMetaUpdateAdditionalObjects.FindByKey
-


# ICubeMetaUpdateAdditionalObjects.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ICubeMetaUpdateAdditionalObject](../ICubeMetaUpdateAdditionalObject/ICubeMetaUpdateAdditionalObject.htm);


## Параметры


Key. Ключ искомого объекта.


## Описание


Метод FindByKey осуществляет
 поиск объекта в коллекции по его ключу.


## Комментарии


Если объект с указанным ключом не найден, то метод возвращает значение
 Null.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 репликации с идентификатором CUBE_META_UPD.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	    Sub UserProc;

	    Var

	        Mb: IMetabase;

	        Update: ICubeMetaUpdateEx;

	        AdditionalObjs: ICubeMetaUpdateAdditionalObjects;

	        AddObj: ICubeMetaUpdateAdditionalObject;

	    Begin

	        Mb := MetabaseClass.Active;

	        Update := Mb.ItemById("CUBE_META_UPD").Bind As ICubeMetaUpdateEx;

	        AdditionalObjs := Update.AdditionalObjects;

	        AddObj := AdditionalObjs.FindByKey(1);

	        If AddObj <> Null Then

	            Debug.WriteLine("Объект найден");

	        Else

	            Debug.WriteLine("Объект не найден");

	        End If;

	    End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат поиска
 объекта с ключом 1 среди объектов, копируемых вместе с базой данных временных
 рядов.


См. также:


[ICubeMetaUpdateAdditionalObjects](ICubeMetaUpdateAdditionalObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
