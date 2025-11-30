# IRegistryClass.CurrentUser

IRegistryClass.CurrentUser
-


# IRegistryClass.CurrentUser


## Синтаксис


CurrentUser: [IRegistryKey](../IRegistryKey/IRegistryKey.htm);


## Описание


Свойство CurrentUser возвращает
 раздел, содержащий настройки пользователя, вошедшего в систему в настоящий
 момент.


## Пример


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.CurrentUser;

	    Debug.WriteLine(RegKey.Name);

	End Sub UserProc;


После выполнения примера в консоль будет выведено наименование раздела,
 содержащего настройки пользователя, вошедшего в систему в настоящий момент.


См.также:


[IRegistryClass](IRegistryClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
