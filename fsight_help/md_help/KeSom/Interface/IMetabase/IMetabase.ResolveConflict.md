# IMetabase.ResolveConflict

IMetabase.ResolveConflict
-


# IMetabase.ResolveConflict


## Синтаксис


		ResolveConflict(Object: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
		 File: String): Boolean;


## Параметры


Object. Объект, при публикации
 изменений которого возник конфликт;


File. Путь до файла с изменениями
 объекта.


## Описание


Метод ResolveConflict открывает
 приложение WinMerge для разрешения возникшего конфликта при публикации
 изменений объекта.


## Комментарии


Данный метод актуально использовать, если объект добавлен в [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и возник конфликт при публикации
 изменений объекта. Для разрешения конфликта открывается приложение WinMerge.


Примечание.
 Метод доступен только для используемой системы управления версиями Git.


Для публикации изменений указанных объектов используйте метод [IMetabase.CheckInFiles](IMetabase.CheckInFiles.htm).


## Пример


Для выполнения примера убедитесь, что репозиторий подключен к [системе
 управления версиями Git](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и в нём содержится измененный
 объект с идентификатором OBJECT_VCS, а также возникает конфликт изменений
 объекта после публикации изменений и синхронизации версий. В локальном
 репозитории системы управления содержатся файлы измененного объекта, расположенные
 по пути C:\GIT\GitRepo\OBJECT_VCS\.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Objects: IMetabaseObjectDescriptors;

		    Object: IMetabaseObjectDescriptor;

		    FileNames: Array Of String;

		    ObjKeys: Array Of Integer;

		    ResId: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    // Зададим измененный объект

		    ObjKeys := New Integer[1];

		    ObjKeys[0] := MB.GetObjectKeyById("OBJECT_VCS");

		    Objects := MB.GetItems(ObjKeys);

		    Object := Objects.Item(0);

		    // Зададим измененный файл объекта

		    FileNames := New String[1];

		    FileNames[0] := "C:\GIT\GitRepo\OBJECT_VCS\OBJECT_VCS.text";

		    // Опубликуем полученные изменения

		    MB.CheckInFiles(Objects, FileNames, ResId);

		    // Синхронизируем версии

		    MB.PullPush;

		    // Разрешим конфликт

		    MB.ResolveConflict(Object, FileNames[0]);

		End Sub UserProc;


В результате выполнения примера будет опубликован измененный файл OBJECT_VCS.text
 указанного объекта, выполнена синхронизация полученной версии с сервера
 с текущей версией и открыто приложение WinMerge для разрешения конфликта.
 После разрешения конфликта изменения будут сохранены в файле OBJECT_VCS.text.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
