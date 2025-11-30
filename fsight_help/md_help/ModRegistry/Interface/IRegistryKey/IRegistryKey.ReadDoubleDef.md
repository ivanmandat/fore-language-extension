# IRegistryKey.ReadDoubleDef

IRegistryKey.ReadDoubleDef
-


# IRegistryKey.ReadDoubleDef


## Синтаксис


ReadDoubleDef(ValueName: String; DefaultValue: Double):
 Double;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadDoubleDef осуществляет
 считывание вещественного значения из двоичного параметра в реестре.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то метод возвращает значение параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    d: Double;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    d := SubKey.ReadDoubleDef("Param1", Double.MinValue);

	End Sub UserProc;


После выполнения примера из параметра с наименованием Param1, расположенного
 в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params], в
 переменную d будет считано вещественное значение. Если параметр не существует,
 то в переменную будет установлено минимальное для вещественных чисел значение.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
