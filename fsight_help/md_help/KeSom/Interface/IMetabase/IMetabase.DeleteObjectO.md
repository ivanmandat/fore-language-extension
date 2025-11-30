# IMetabase.DeleteObjectO

IMetabase.DeleteObjectO
-


# IMetabase.DeleteObjectO


## Синтаксис


DeleteObjectO(Options: Integer; Key: Integer);


## Параметры


Options. Способ удаления ссылок
 на объекты репозитория;


Key. Ключ объекта репозитория,
 который требуется удалить.


## Описание


Метод DeleteObjectO удаляет
 объект репозитория с указанием способа удаления ссылок на объекты.


## Комментарии


Метод не генерирует исключительную ситуацию, если объект с указанным
 ключом отсутствует в репозитории.


В качестве параметра Options
 используется значение перечисления [DeleteObjectOptions](../../Enums/DeleteObjectOptions.htm).


## Пример


Для выполнения примера предполагается наличие справочников НСИ с идентификатором
 «DICT».


Добавьте ссылки на системные сборки: Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.ItemById("DICT");

	    MB.DeleteObjectO(0, Obj.Key);

	End Sub UserProc;


В результате выполнения примера для указанного объекта будет выполнена
 проверка ссылок на другие объекты репозитория. Объект будет удален, ссылки
 на объекты репозитория не будут удалены.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
