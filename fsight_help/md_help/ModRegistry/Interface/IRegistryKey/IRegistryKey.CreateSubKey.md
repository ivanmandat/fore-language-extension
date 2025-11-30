# IRegistryKey.CreateSubKey

IRegistryKey.CreateSubKey
-


# IRegistryKey.CreateSubKey


## Синтаксис


CreateSubKey(SubKeyName: String): [IRegistryKey](IRegistryKey.htm);


## Параметры


SubKeyName. Наименование подраздела,
 который необходимо создать.


## Описание


Метод CreateSubKey осуществляет
 создание в реестре подраздела, наименование которого передается посредством
 входного параметра.


## Комментарии


Если создаваемый подраздел уже существует, то метод возвращает доступ
 к содержащимся в нем объектам.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    SubKey := RegKey.CreateSubKey("Software\MyProject");

	    SubKey.CreateSubKey("Params");

	    SubKey.CreateSubKey("Fonts");

	End Sub UserProc;


После выполнения примера в ветке реестра [HKEY_CURRENT_USER\Software]
 будет создан подраздел MyProject и в нём еще два подраздела - Params и
 Fonts.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
