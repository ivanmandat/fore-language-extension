# IMetabaseObjectDescriptors.Remove

IMetabaseObjectDescriptors.Remove
-


# IMetabaseObjectDescriptors.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс
 описания объекта в коллекции.


## Описание


Метод Remove удаляет описание
 объекта из коллекции по его индексу. Метод возвращает значение True,
 если удаление прошло успешно.


## Комментарии


В текущей реализации данный метод доступен для использования при работе
 с [коллекцией
 объектов](KeCubes.chm::/Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ObjectsFilter.htm), которые копируются вместе с базой данных
 временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 репликации с идентификатором CUBE_META_UPD.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Upd: ICubeMetaUpdateEx;

	    ObjectsFilter: IMetabaseObjectDescriptors;

	Begin

	    Mb := MetabaseClass.Active;

	    Upd := Mb.ItemById("CUBE_META_UPD").Edit As ICubeMetaUpdateEx;

	    ObjectsFilter := Upd.ObjectsFilter;

	    If ObjectsFilter.Count > 0 Then

	        ObjectsFilter.Remove(ObjectsFilter.Count - 1);

	    End If;

	End Sub UserProc;


После выполнения примера в объекте репликации из коллекции копируемых
 вложенных объектов базы данных временных рядов будет удален последний
 элемент.


См. также:


[IMetabaseObjectDescriptors](IMetabaseObjectDescriptors.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
