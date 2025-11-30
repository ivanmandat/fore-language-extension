# IRegistryKey.ReadVariant

IRegistryKey.ReadVariant
-


# IRegistryKey.ReadVariant


## Синтаксис


ReadVariant(ValueName: String): Variant;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


## Описание


Метод ReadVariant осуществляет
 считывание значения в формате Variant из строкового параметра в реестре
 без проверки параметра на наличие.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то генерируется исключительная ситуация.


## Пример


Для выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 предполагается наличие строкового параметра с наименованием Param1, в
 котором хранится значение в формате Variant.


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    v: Variant;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    If SubKey.ValueExists("Param1") Then

	        v := SubKey.ReadVariant("Param1");

	    End If;

	End Sub UserProc;


После выполнения примера в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params]
 будет осуществлен поиск параметра Param1. Если параметр существует, то
 в переменную v будет считано значение, содержащееся в данном параметре.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
