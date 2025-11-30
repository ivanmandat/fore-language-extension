# IMetabaseManager.Drivers

IMetabaseManager.Drivers
-


# IMetabaseManager.Drivers


## Синтаксис


Drivers: [IDbDrivers](../IDbDrivers/IDbDrivers.htm);


## Описание


Свойство Drivers возвращает
 коллекцию драйверов СУБД, поддерживаемых в платформе.


## Пример


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Drivers: IDbDrivers;

	    Driver: IDbDriver;

	    i, c: Integer;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Drivers := Man.Drivers;

	    c := Drivers.Count;

	    For i := 0 To c - 1 Do

	        Driver := Drivers.Item(i);

	        Debug.WriteLine("Наименование: " + Driver.Name + "; Идентификатор: " + Driver.Id + "; Ключ: " + Driver.Key.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 обо всех драйверах СУБД, поддерживаемых в платформе.


См. также:


[IMetabaseManager](IMetabaseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
