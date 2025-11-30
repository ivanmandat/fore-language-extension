# IMetabaseUpdate.CreateMetabase

IMetabaseUpdate.CreateMetabase
-


# IMetabaseUpdate.CreateMetabase


## Синтаксис


CreateMetabase: String;


## Описание


Свойство CreateMetabase возвращает
 наименование репозитория, в котором было создано обновление.


## Комментарии


Значение данного свойства хранится и может быть изменено в коллекции
 [CustomProperties](IMetabaseUpdate.CustomProperties.htm). Актуально
 только при работе с *.pefx файлами.


## Пример


Для выполнения примера предполагается наличие файла обновления «D:\Work\update.pefx».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    Props: ICustomProperties;

	    Prop: ICustomProperty;

	Begin

	    Mb := MetabaseClass.Active;

	    // Загрузка обновления из файла

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("D:\Work\update.pefx");

	    // Информация об обновлении

	    Debug.WriteLine("---Информация об обновлении---");

	    Debug.WriteLine("CreateMetabase: " + Update.CreateMetabase);

	    Debug.WriteLine("CreatePlatformVersion: " + Update.CreatePlatformVersion);

	    Debug.WriteLine("CreateTimestamp: " + Update.CreateTimestamp.ToString);

	    Debug.WriteLine("CreateUserName: " + Update.CreateUserName);

	    Debug.WriteLine("CreateUserSID: " + Update.CreateUserSID);

	    Debug.WriteLine("CreateWorkstation: " + Update.CreateWorkstation);

	    Debug.WriteLine("---Информация об обновлении из CustomProperties---");

	    Props := Update.CustomProperties;

	    For Each Prop In Props Do

	        Debug.WriteLine(Prop.Id + ": " + Prop.Value);

	    End For;

	End Sub UserProc;


При выполнении примера будет загружено обновление из файла. Информация
 о создании обновления будет выведена в консоль среды разработки. Информация
 будет получена из отдельных специализированных свойств, а также из коллекции
 CustomProperties.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
