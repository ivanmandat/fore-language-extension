# IRegistryKey.DeleteSubKey

IRegistryKey.DeleteSubKey
-


# IRegistryKey.DeleteSubKey


## Синтаксис


DeleteSubKey(SubKeyName: String);


## Параметры


SubKeyName. Наименование подраздела,
 который необходимо удалить.


## Описание


Метод DeleteSubKey осуществляет
 удаление в реестре подраздела, наименование которого передается посредством
 входного параметра.


## Комментарии


Если подраздел не существует, то метод ничего не делает.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    If RegKey.SubKeyExists("Software\MyProject\Params") Then

	        RegKey.DeleteSubKey("Software\MyProject\Params");

	    End If;

	End Sub UserProc;


После выполнения примера в реестре будет осуществлен поиск подраздела
 HKEY_CURRENT_USER\Software\MyProject\Params]. Если подраздел существует,
 то он будет удалён.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
