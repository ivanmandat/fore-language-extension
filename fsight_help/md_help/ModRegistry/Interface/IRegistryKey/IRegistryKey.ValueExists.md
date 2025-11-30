# IRegistryKey.ValueExists

IRegistryKey.ValueExists
-


# IRegistryKey.ValueExists


## Синтаксис


ValueExists(ValueName: String): Boolean;


## Параметры


ValueName. Наименование параметра, наличие которого
 необходимо проверить.


## Описание


Метод ValueExists осуществляет
 проверку наличия параметра в подразделе реестра.


## Комментарии


Метод возвращает значение True,
 если параметр существует и False,
 если не существует.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", True);

	    If SubKey.ValueExists("Param1") Then

	        SubKey.DeleteValue("Param1")

	    End If;

	End Sub UserProc;


После выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 будет осуществлен поиск параметра Param1. Если параметр существует, то
 он будет удалён.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
