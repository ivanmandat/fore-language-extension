# IMetabaseUpdate.UseLocalVcsFiles

IMetabaseUpdate.UseLocalVcsFiles
-


# IMetabaseUpdate.UseLocalVcsFiles


## Синтаксис


		UseLocalVcsFiles: Boolean;


## Описание


Свойство UseLocalVcsFiles определяет
 признак использования в обновлении локальных версий объектов, добавленных
 в систему управления версиями.


## Комментарии


Данное свойство актуально, если в обновлении используются объекты, добавленные
 в систему управления версиями.


Допустимые значения:


	- True. По умолчанию.
	 В обновление попадает та версия объекта, которая содержится в локальных
	 файлах (версии объекта в репозитории и в локальных файлах могут не
	 совпадать);


	- False. В обновление
	 попадет та версия объекта, которая содержится в текущий момент в файлах
	 на сервере системы управления версиями (соответствующая версия объекта
	 также сохранена в базе репозитория).


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 идентификатором FORM_1. Данная форма добавлена в систему управления версиями.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		    FormObj: IMetabaseUpdateObjectNode;

		Begin

		    MB := MetabaseClass.Active;

		    Update := MB.CreateUpdate;

		    Update.UseLocalVcsFiles := False;

		    Root := Update.RootFolder;

		    FormObj := Root.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    FormObj.Object := MB.ItemById("Form_1");

		    FormObj.Label := FormObj.Object.Name;

		    Update.SaveToFileNF("c:\Form_1.pefx");

		End Sub UserProc;


В результате выполнения примера будет создано новое обновление. В обновление
 будет добавлена та версия формы, которая на текущий момент сохранена в
 файлах системы управления версиями.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
