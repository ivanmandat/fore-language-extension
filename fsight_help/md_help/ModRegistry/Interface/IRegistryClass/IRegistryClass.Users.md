# IRegistryClass.Users

IRegistryClass.Users
-


# IRegistryClass.Users


## Синтаксис


Users: [IRegistryKey](../IRegistryKey/IRegistryKey.htm);


## Описание


Свойство Users возвращает раздел,
 содержащий настройки всех профилей пользователей компьютера.


## Пример


	Sub Main;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.Users;

	    Debug.WriteLine(RegKey.Name);

	End Sub Main;


После выполнения примера в консоль будет выведено наименование раздела,
 содержащего настройки всех профилей пользователей компьютера.


См.также:


[IRegistryClass](IRegistryClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
