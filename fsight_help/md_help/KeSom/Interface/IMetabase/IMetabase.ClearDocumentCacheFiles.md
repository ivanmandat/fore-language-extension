# IMetabase.ClearDocumentCacheFiles

IMetabase.ClearDocumentCacheFiles
-


# IMetabase.ClearDocumentCacheFiles


## Синтаксис


ClearDocumentCacheFiles;


## Описание


Метод ClearDocumentCacheFiles
 очищает кеш [документов](UiNavObj.chm::/UiNavObj_document.htm).


## Комментарии


При открытии [документов](UiNavObj.chm::/UiNavObj_document.htm)
 формируется кеш для ускорения работы с внешними файлами. По умолчанию
 кеш располагается в профиле пользователя, в подкаталоге «\AppData\Local\Foresight\Foresight Analytics Platform\AsmCache<n>\Mod\<ID
 репозитория>\<номер сборки>\CachedFiles\Documents».


Очистка кеша документов приводит к освобождению места на диске. При
 выполнении метода ClearDocumentCacheFiles
 очищается кеш всех документов. При удалении конкретного документа в [навигаторе
 объектов](UiNav.chm::/02_Navigator/General_Principles_of_Work.htm#del) или с помощью метода [IMetabase.DeleteObject](IMetabase.DeleteObject.htm)
 кеш данного документа очищается автоматически.


Для получения подробной информации о кешировании объектов репозитория
 обратитесь к разделу «[Кеширование
 объектов репозитория](UiNav.chm::/02_Navigator/object_caching.htm)».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    // Очистим кеш документов

	    MB.ClearDocumentCacheFiles;

	End Sub UserProc;


В результате выполнения примера будет очищен кеш документов.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
