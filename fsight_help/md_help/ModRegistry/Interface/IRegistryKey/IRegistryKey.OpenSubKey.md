# IRegistryKey.OpenSubKey

IRegistryKey.OpenSubKey
-


# IRegistryKey.OpenSubKey


## Синтаксис


OpenSubKey(SubKeyName: String; Writable: Boolean):
 [IRegistryKey](IRegistryKey.htm);


## Параметры


SubKeyName. Наименование подраздела
 реестра.


Writable. Параметр, определяющий
 будет ли подраздел открываться только на чтение.


## Описание


Метод OpenSubKey открывает подраздел
 реестра.


## Комментарии


Для изменения данных подраздела задайте параметру Writable
 значение True.


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
