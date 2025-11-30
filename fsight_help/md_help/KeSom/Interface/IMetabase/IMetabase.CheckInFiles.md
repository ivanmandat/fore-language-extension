# IMetabase.CheckInFiles

IMetabase.CheckInFiles
-


# IMetabase.CheckInFiles


## Синтаксис


		CheckInFiles(Objects: [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm),
		 FileNames: Array, Var ResId: Integer): Boolean;


## Параметры


Objects. Объекты, изменения
 которых необходимо опубликовать. Измененные объекты можно задать вручную
 или получить с помощью метода [IMetabase.GetPendingChangesVCS](IMetabase.GetPendingChangesVCS.htm);


FileNames. Массив путей до
 измененных файлов объектов. Пути до измененных файлов объектов можно задать
 вручную или получить с помощью свойства [IMetabaseObjectDescriptor.LocalCheckedOutFileNames](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.LocalCheckedOutFileNames.htm);


ResId. Переменная, в которую
 будет помещен код ошибки.


## Описание


Метод CheckInFiles осуществляет
 публикацию изменений указанных объектов.


## Комментарии


Данный метод актуально использовать, если объекты добавлены в [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm).


При добавлении объектов в систему управления версиями автоматически
 создаются файлы, которые хранят локальные версии объектов. Набор файлов
 зависит от типа объектов.


Для получения подробной информации обратитесь к разделу «[Добавление
 объектов в систему управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Add_Object.htm)».


Выполнение метода зависит от используемой системы управления версиями:


	- Team Foundation Server.
	 После выполнения метода будет открыто окно «[Check
	 In](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_CheckIn_Object.htm)» для публикации объектов;


	- Git. После выполнения
	 метода указанные объекты будут опубликованы.


При удачной публикации метод возвращает значение True
 и код ошибки принимает значение «0». Если публикация изменений не произошла,
 то метод возвращает значение False
 и параметру ResId присваивается
 код ошибки.


## Пример


Для выполнения примера убедитесь, что репозиторий подключен к [системе
 управления версиями Git](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и в нём содержатся измененные
 объекты.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Objects: IMetabaseObjectDescriptors;

		    Object: IMetabaseObjectDescriptor;

		    FileNames: Array Of String;

		    i, ResId: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим измененные объекты и их файлы

		    Objects := MB.GetPendingChangesVCS;

		    For i := 0 To Objects.Count - 1 Do

		        Object := Objects.Item(i);

		        FileNames := Object.LocalCheckedOutFileNames;

		    End For;

		    // Опубликуем полученные изменения

		    MB.CheckInFiles(Objects, FileNames, ResId);

		End Sub UserProc;


В результате выполнения примера будут опубликованы все измененные файлы
 объектов.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
