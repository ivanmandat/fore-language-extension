# IRegistryKey.ReadIntegerDef

IRegistryKey.ReadIntegerDef
-


# IRegistryKey.ReadIntegerDef


## Синтаксис


ReadIntegerDef(ValueName: String; DefaultValue:
 Integer): Integer;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadIntegerDef осуществляет
 считывание целочисленного значения из параметра типа REG_DWORD в реестре.


## Комментарии


Если параметр ValueName не
 существует, то метод возвращает значение параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    i: Integer;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    i := SubKey.ReadIntegerDef("Param1", Integer.MinValue);

	End Sub UserProc;


После выполнения примера из параметра с наименованием Param1, расположенного
 в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params], в
 переменную i будет считано целочисленное значение. Если параметр не существует,
 то в переменную будет установлено минимальное для целых чисел значение.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
