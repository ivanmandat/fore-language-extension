# IDbDrivers.Count

IDbDrivers.Count
-


# IDbDrivers.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 драйверов СУБД, поддерживаемых в платформе.


## Пример


	Sub UserProc;

	Var

	    MbMan: IMetabaseManager;

	    Drivers: IDbDrivers;

	    Driver: IDbDriver;

	    i: Integer;

	Begin

	    MbMan := MetabaseManagerFactory.Active;

	    Drivers := MbMan.Drivers;

	    For i := 0 To Drivers.Count - 1 Do

	        Driver := Drivers.Item(i);

	        Debug.WriteLine("Наименование: " + Driver.Name + "; Идентификатор: " + Driver.Id + "; Ключ: " + Driver.Key.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 обо всех драйверах СУБД, поддерживаемых в платформе.


См. также:


[IDbDrivers](IDbDrivers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
