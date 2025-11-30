# IRegistryClass.LocalMachine

IRegistryClass.LocalMachine
-


# IRegistryClass.LocalMachine


## Синтаксис


LocalMachine: [IRegistryKey](../IRegistryKey/IRegistryKey.htm);


## Описание


Свойство LocalMachine возвращает
 раздел, содержащий настройки, относящиеся к данному компьютеру (для всех
 пользователей).


## Пример


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.LocalMachine;

	    Debug.WriteLine(RegKey.Name);

	End Sub UserProc;


После выполнения примера, в консоль будет выведено наименование раздела,
 содержащего настройки, относящиеся к данному компьютеру (для всех пользователей).


См.также:


[IRegistryClass](IRegistryClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
