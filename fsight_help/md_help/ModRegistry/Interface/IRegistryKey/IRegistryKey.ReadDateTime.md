# IRegistryKey.ReadDateTime

IRegistryKey.ReadDateTime
-


# IRegistryKey.ReadDateTime


## Синтаксис


ReadDateTime(ValueName: String): DateTime;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


## Описание


Метод ReadDateTime осуществляет
 считывание даты и времени из двоичного параметра в реестре без проверки
 параметра на наличие.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то генерируется исключительная ситуация.


## Пример


Для выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 предполагается наличие двоичного параметра с наименованием Param1, в котором
 хранится значение даты и времени.


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    d: DateTime;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    If SubKey.ValueExists("Param1") Then

	        d := SubKey.ReadDateTime("Param1");

	    End If;

	End Sub UserProc;


После выполнения примера в указанном подразделе реестра будет осуществлен
 поиск параметра Param1. Если параметр существует, то в переменную d будет
 считано значение даты и времени, содержащееся в данном параметре.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
