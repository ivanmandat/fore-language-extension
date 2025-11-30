# IRegistryKey.ReadString

IRegistryKey.ReadString
-


# IRegistryKey.ReadString


## Синтаксис


ReadString(ValueName: String): String;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


## Описание


Метод ReadString осуществляет
 считывание строки из строкового параметра в реестре без проверки параметра
 на наличие.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то генерируется исключительная ситуация.


## Пример


Для выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 предполагается наличие строкового параметра с наименованием Param1, в
 котором хранится значение.


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    s: String;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    If SubKey.ValueExists("Param1") Then

	        s := SubKey.ReadString("Param1");

	    End If;

	End Sub UserProc;


После выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 будет осуществлен поиск параметра Param1. Если параметр существует, то
 в переменную s будет считано строковое значение параметра.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
