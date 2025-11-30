# IRegistryKey.ReadDouble

IRegistryKey.ReadDouble
-


# IRegistryKey.ReadDouble


## Синтаксис


ReadDouble(ValueName: String): Double;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


## Описание


Метод ReadDouble осуществляет
 считывание вещественного значения из двоичного параметра в реестре без
 проверки параметра на наличие.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то генерируется исключительная ситуация.


## Пример


Для выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 предполагается наличие двоичного параметра с наименованием Param1, в котором
 хранится вещественное число.


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    d: Double;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    If SubKey.ValueExists("Param1") Then

	        d := SubKey.ReadDouble("Param1");

	    End If;

	End Sub UserProc;


После выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 будет осуществлен поиск параметра Param1. Если параметр существует, то
 в переменную d будет считано вещественное значение, содержащееся в данном
 параметре.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
