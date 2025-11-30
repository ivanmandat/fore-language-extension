# IRegistryKey.ReadBooleanDef

IRegistryKey.ReadBooleanDef
-


# IRegistryKey.ReadBooleanDef


## Синтаксис


ReadBooleanDef(ValueName: String; DefaultValue:
 Boolean): Boolean;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadBooleanDef осуществляет
 считывание логического значения из параметра типа REG_DWORD в реестре.


## Комментарии


Если параметр ValueName не
 существует, то метод возвращает значение из параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    b: Boolean;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    b := SubKey.ReadBooleanDef("Param1", True);

	End Sub UserProc;


После выполнения примера из параметра с наименованием Param1, расположенного
 в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params], в
 переменную b будет считано логическое значение. Если параметр не существует,
 то в переменную будет установлено значение True.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
