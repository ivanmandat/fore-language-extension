# IRegistryClass.ClassesRoot

IRegistryClass.ClassesRoot
-


# IRegistryClass.ClassesRoot


## Синтаксис


ClassesRoot: [IRegistryKey](../IRegistryKey/IRegistryKey.htm);


## Описание


Свойство ClassesRoot возвращает
 раздел реестра, содержащий сведения, обеспечивающие открытие необходимой
 программы при открытии файла.


## Пример


	Sub UserProc;

	Var

	    RegKey: IRegistryKey;

	Begin

	    RegKey := RegistryClass.ClassesRoot;

	    Debug.WriteLine(RegKey.Name);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 раздела, содержащего сведения, обеспечивающие открытие необходимой программы
 при открытии файла.


См.также:


[IRegistryClass](IRegistryClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
