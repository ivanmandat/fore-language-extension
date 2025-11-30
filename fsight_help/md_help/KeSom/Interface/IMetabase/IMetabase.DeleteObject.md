# IMetabase.DeleteObject

IMetabase.DeleteObject
-


# IMetabase.DeleteObject


## Синтаксис


DeleteObject(Key: Integer);


## Параметры


Key. Ключ
 удаляемого объекта.


## Описание


Метод DeleteObject осуществляет
 удаление объекта, ключ которого передается посредствам входного параметра.


## Комментарии


Метод не генерирует исключительную ситуацию, если объект с указанным
 ключом отсутствует в репозитории.


При удалении [документа](UiNavObj.chm::/UiNavObj_document.htm)
 автоматически очищается его кеш. Для очистки кеша всех документов используйте
 метод [IMetabase.ClearDocumentCacheFiles](IMetabase.ClearDocumentCacheFiles.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TestObj.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.ItemById("TestObj");

	    MB.DeleteObject(Obj.Key);

	End Sub UserProc;


После выполнения примера, если в репозитории существует объект с указанным
 идентификатором TestObj, то он будет удален.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
