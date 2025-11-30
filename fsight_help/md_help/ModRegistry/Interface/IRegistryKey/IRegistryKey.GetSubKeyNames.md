# IRegistryKey.GetSubKeyNames

IRegistryKey.GetSubKeyNames
-


# IRegistryKey.GetSubKeyNames


## Синтаксис


GetSubKeyNames: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Метод GetSubKeyNames возвращает
 коллекцию наименований подразделов данного раздела реестра.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	    SubKey: IStringList;

	    s: String;

	Begin

	    RegKey := RegistryClass.Users;

	    SubKey := RegKey.GetSubKeyNames;

	    For Each s In SubKey Do

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех подразделов раздела реестра [HKEY_USERS].


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
