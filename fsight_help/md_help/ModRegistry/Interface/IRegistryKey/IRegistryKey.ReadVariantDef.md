# IRegistryKey.ReadVariantDef

IRegistryKey.ReadVariantDef
-


# IRegistryKey.ReadVariantDef


## Синтаксис


ReadVariantDef(ValueName: String; DefaultValue:
 Variant): Variant;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadVariantDef осуществляет
 считывание значения в формате Variant из строкового параметра в реестре.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то метод возвращает значение параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub Main;

	Var

	    RegKey, SubKey: IRegistryKey;

	    v: Variant;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    v := SubKey.ReadVariantDef("Param1", "Not found");

	End Sub Main;


После выполнения примера из параметра с наименованием Param1, расположенного
 в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params], в
 переменную v будет считано значение. Если параметр не существует, то в
 переменную будет установлено значение «Not found».


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
