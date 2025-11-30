# IMetabase.UndoCheckOutFiles

IMetabase.UndoCheckOutFiles
-


# IMetabase.UndoCheckOutFiles


## Синтаксис


		UndoCheckOutFiles(Objects: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm),
		 FileNames: Array, Var ResId: Integer): Boolean;


## Параметры


Objects. Объекты, изменения
 которых необходимо отменить. Измененные объекты можно задать вручную или
 получить с помощью метода [IMetabase.GetPendingChangesVCS](IMetabase.GetPendingChangesVCS.htm);


FileNames. Массив путей до
 измененных файлов объектов. Пути до измененных файлов объектов можно задать
 вручную или получить с помощью свойства [IMetabaseObjectDescriptor.LocalCheckedOutFileNames](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.LocalCheckedOutFileNames.htm);


ResId. Переменная, в которую
 будет помещен код ошибки.


## Описание


Метод UndoCheckOutFiles отменяет
 изменения указанных объектов.


## Комментарии


Данный метод актуально использовать, если объекты добавлены в [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и изменения объектов еще не опубликованы.


После удачной отмены изменений метод возвращает значение True
 и код ошибки принимает значение «0». Если отмена изменений не произошла,
 то метод возвращает значение False
 и параметру ResId присваивается
 код ошибки.


Для публикации изменений указанных объектов используйте метод [IMetabase.CheckInFiles](IMetabase.CheckInFiles.htm).


## Пример


Для выполнения примера убедитесь, что репозиторий подключен к [системе
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и в нём содержится измененный объект
 с идентификатором OBJECT_VCS. В локальном репозитории системы управления
 содержатся файлы измененного объекта, расположенные по пути C:\GIT\GitRepo\OBJECT_VCS\.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Objects: IMetabaseObjectDescriptors;

		    ObjKeys: Array Of Integer;

		    FileNames: Array Of String;

		    ResId: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    // Зададим измененный объект

		    ObjKeys := New Integer[1];

		    ObjKeys[0] := MB.GetObjectKeyById("OBJECT_VCS");

		    Objects := MB.GetItems(ObjKeys);

		    // Зададим измененный файл объекта

		    FileNames := New String[1];

		    FileNames[0] := "С:\GIT\GitRepo\OBJECT_VCS\OBJECT_VCS.text";

		    // Отменим изменения

		    Mb.UndoCheckOutFiles(Objects, FileNames, ResId);

		End Sub UserProc;


В результате выполнения примера будут отменены изменения указанного
 объекта в репозитории и в файле OBJECT_VCS.text локального репозитория
 системы управления.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
