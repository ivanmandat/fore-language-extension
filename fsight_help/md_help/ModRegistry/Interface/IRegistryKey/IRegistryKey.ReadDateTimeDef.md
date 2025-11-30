# IRegistryKey.ReadDateTimeDef

IRegistryKey.ReadDateTimeDef
-


# IRegistryKey.ReadDateTimeDef


## Синтаксис


ReadDateTimeDef(ValueName: String; DefaultValue:
 DateTime): DateTime;


## Параметры


ValueName. Наименование параметра, значение которого
 необходимо получить.


DefaultValue.
 Значение,
 которое будет подставляться, если параметр не существует.


## Описание


Метод ReadDateTimeDef осуществляет
 считывание даты и времени из двоичного параметра в реестре.


## Комментарии


Если параметр с наименованием ValueName
 не существует, то метод возвращает значение из параметра DefaultValue.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    d: DateTime;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", False);

	    d := SubKey.ReadDateTimeDef("Param1", DateTime.Now);

	End Sub UserProc;


После выполнения примера из параметра с наименованием "Param1",
 расположенного в подразделе реестра [HKEY_CURRENT_USER\Software\MyProject\Params],
 в переменную d будет считано значение даты и времени. Если параметр не
 существует, то в переменную будет установлено значение текущей даты и
 времени.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
