# IMetabase.AbandonMerge

IMetabase.AbandonMerge
-


# IMetabase.AbandonMerge


## Синтаксис


		AbandonMerge;


## Описание


Метод AbandonMerge откладывает
 решение возникших конфликтов для публикации других изменений объектов.


## Комментарии


Данный метод актуально использовать, если объекты добавлены в [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и возникли конфликты при публикации
 изменений объекта.


Примечание.
 Метод доступен только для используемой системы управления версиями Git.


Для публикации изменений указанных объектов используйте метод [IMetabase.CheckInFiles](IMetabase.CheckInFiles.htm).


Для разрешения конфликта при публикации изменений объекта используйте
 метод [IMetabase.ResolveConflict](IMetabase.ResolveConflict.htm).


## Пример


Для выполнения примера убедитесь, что репозиторий подключен к [системе
 управления версиями Git](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и в нём содержится измененный
 объект с идентификатором OBJECT_VCS, а также возникают конфликты изменений
 других объектов после синхронизаций версий. Публикация измененного объекта
 с идентификатором OBJECT_VCS недоступна при возникших конфликтах. В локальном
 репозитории системы управления содержатся файлы измененного объекта, расположенные
 по пути C:\GIT\GitRepo\OBJECT_VCS\.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Objects: IMetabaseObjectDescriptors;

		    FileNames: Array Of String;

		    ObjKeys: Array Of Integer;

		    ResId: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    // Отложим решение конфликтов
		 при их возникновении

		    MB.AbandonMerge;

		    // Зададим измененный объект

		    ObjKeys := New Integer[1];

		    ObjKeys[0] := Mb.GetObjectKeyById("OBJECT_VCS");

		    Objects := MB.GetItems(ObjKeys);

		    // Зададим измененный файл объекта

		    FileNames := New String[1];

		    FileNames[0] := "C:\GIT\GitRepo\OBJECT_VCS\OBJECT_VCS.text";

		    // Опубликуем изменения объекта

		    MB.CheckInFiles(Objects, FileNames, ResId);

		End Sub UserProc;


В результате выполнения примера будет отложено решение возникших конфликтов
 и доступна публикация другого измененного объекта с идентификатором OBJECT_VCS.
 Публикация объекта и изменений в файле OBJECT_VCS.text локального репозитория
 системы управления будет выполнена, но для слияния всех изменений объектов
 необходимо разрешить все конфликты.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
