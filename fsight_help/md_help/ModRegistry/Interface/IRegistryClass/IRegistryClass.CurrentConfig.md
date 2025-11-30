# IRegistryClass.CurrentConfig

IRegistryClass.CurrentConfig
-


# IRegistryClass.CurrentConfig


## Синтаксис


CurrentConfig: [IRegistryKey](../IRegistryKey/IRegistryKey.htm);


## Описание


Свойство CurrentConfig возвращает
 раздел, содержащий сведения о профиле оборудования, используемые локальным
 компьютером при запуске системы.


## Пример


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.CurrentConfig;

	    Debug.WriteLine(RegKey.Name);

	End Sub UserProc;


После выполнения примера в консоль будет выведено наименование раздела,
 содержащего сведения о профиле оборудования, используемые локальным компьютером
 при запуске системы.


См.также:


[IRegistryClass](IRegistryClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
