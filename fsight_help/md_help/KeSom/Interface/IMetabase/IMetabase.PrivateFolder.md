# IMetabase.PrivateFolder

IMetabase.PrivateFolder
-


# IMetabase.PrivateFolder


## Синтаксис


PrivateFolder: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство PrivateFolder возвращает
 [личную
 папку](Admin.chm::/03_Admin/Users/Admin_UserFolder.htm) текущего пользователя.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    Debug.Write(MB.PrivateFolder.Id + " " + MB.PrivateFolderRoot.Id);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены идентификатор
 личной папки текущего пользователя и идентификатор корневой папки для
 личных папок пользователей.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
