# ICubeMetaUpdateAdditionalObjects.Remove

ICubeMetaUpdateAdditionalObjects.Remove
-


# ICubeMetaUpdateAdditionalObjects.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс объекта в коллекции.


## Описание


Метод Remove удаляет объект
 из коллекции по его индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm).
 Индекс первого объекта в коллекции - «0», последнего - «[ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm)
 - 1». Нумерация индексов - сквозная.


Если удаление объекта прошло успешно, то метод возвращает значение True, значение свойства [ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm)
 уменьшается на единицу; в обратном случае - False.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 репликации с идентификатором CUBE_META_UPD.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	    Sub UserProc;

	    Var

	        Mb: IMetabase;

	        Update: ICubeMetaUpdateEx;

	        AdditionalObjs: ICubeMetaUpdateAdditionalObjects;

	        AddObj: Boolean;

	    Begin

	        Mb := MetabaseClass.Active;

	        Update := Mb.ItemById("CUBE_META_UPD").Edit As ICubeMetaUpdateEx;

	        AdditionalObjs := Update.AdditionalObjects;

	        AddObj := AdditionalObjs.Remove(1);

	        If AddObj Then

	            Debug.WriteLine("Объект удалён");

	        Else

	            Debug.WriteLine("Объект не удалён");

	        End If;

	        (Update As IMetabaseObject).Save;

	    End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат удаления
 объекта с индексом 1 среди объектов, копируемых вместе с базой данных
 временных рядов.


См. также:


[ICubeMetaUpdateAdditionalObjects](ICubeMetaUpdateAdditionalObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
