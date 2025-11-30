# IRegistryKey.DeleteValue

IRegistryKey.DeleteValue
-


# IRegistryKey.DeleteValue


## Синтаксис


DeleteValue(ValueName: String);


## Параметры


ValueName. Наименование параметра,
 который необходимо удалить.


## Описание


Метод DeleteValue осуществляет
 удаление параметра в подразделе реестра.


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


После выполнения примера в подразделе реестре [HKEY_CURRENT_USER\Software\MyProject\Params]
 будет осуществлен поиск параметра Param1. Если параметр существует, то
 он будет удалён.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
