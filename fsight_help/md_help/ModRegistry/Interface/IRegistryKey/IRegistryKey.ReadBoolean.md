# IRegistryKey.ReadBoolean

IRegistryKey.ReadBoolean
-


# IRegistryKey.ReadBoolean


## Синтаксис


ReadBoolean(ValueName: String): Boolean;


## Параметры


ValueName. Наименование параметра,
 значение которого необходимо получить.


## Описание


Метод ReadBoolean осуществляет
 считывание логического значения из параметра типа REG_DWORD в реестре без
 проверки параметра на наличие.


## Комментарии


Если параметр ValueName не
 существует, то генерируется исключительная ситуация.


## Пример


Для выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 предполагается наличие параметра Param1 типа REG_DWORD.


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    b: Boolean;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    If SubKey.ValueExists("Param1") Then

	        b := SubKey.ReadBoolean("Param1")

	    End If;

	End Sub UserProc;


После выполнения примера в указанном подразделе реестра будет осуществлен
 поиск параметра Param1. Если параметр существует, то в переменную b будет
 считано логическое значение, содержащееся в данном параметре.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
