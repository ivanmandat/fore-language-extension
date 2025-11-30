# IRegistryKey.ReadStringDef

IRegistryKey.ReadStringDef
-


# IRegistryKey.ReadStringDef


## Синтаксис


ReadStringDef(ValueName: String; DefaultValue: String):
 String;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadStringDef осуществляет
 считывание строки из строкового параметра в реестре.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то метод возвращает значение параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    s: String;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    s := SubKey.ReadStringDef("Param1", "Default");

	End Sub UserProc;


После выполнения примера из параметра с наименованием Param1, расположенного
 в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params], в
 переменную s будет считано строковое значение. Если параметр не существует,
 то в переменную будет установлено значение Default.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
