# IRegistryKey.SubKeyExists

IRegistryKey.SubKeyExists
-


# IRegistryKey.SubKeyExists


## Синтаксис


SubKeyExists(SubKeyName: String): Boolean;


## Параметры


SubKeyName. Наименование подраздела,
 наличие которого необходимо проверить.


## Описание


Метод SubKeyExists осуществляет
 проверку наличия подраздела в реестре.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	    SubKey: String = "Software\MyProject\Params";

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    If RegKey.SubKeyExists(SubKey) Then

	        RegKey.DeleteSubKey(SubKey);

	    End If;

	End Sub UserProc;


После выполнения примера в реестре будет осуществлен поиск указанного
 подраздела. Если подраздел существует, то он будет удалён.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
