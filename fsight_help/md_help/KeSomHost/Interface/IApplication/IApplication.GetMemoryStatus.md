# IApplication.GetMemoryStatus

IApplication.GetMemoryStatus
-


# IApplication.GetMemoryStatus


## Синтаксис


GetMemoryStatus: [IMemoryStatus](../IMemoryStatus/IMemoryStatus.htm);


## Описание


Метод GetMemoryStatus возвращает
 информацию о физической и виртуальной памяти компьютера.


## Пример


Добавьте ссылку на системную сборку Host.


	Sub UserProc;

	Var

	    App: IApplication;

	    MemStat: IMemoryStatus;

	Begin

	    App := Application.Instance;

	    MemStat := App.GetMemoryStatus;

	    Debug.WriteLine("Размер физической памяти: " + (MemStat.TotalPhysicalMemory / 1048576).ToString + " мб");

	    Debug.WriteLine("Размер виртуальной памяти: " + (MemStat.TotalVirtualMemory / 1048576).ToString + " мб");

	    Debug.WriteLine("Максимальный размер файла подкачки: " + (MemStat.TotalPageFile / 1048576).ToString + " мб");

	    Debug.WriteLine("Свободно физической памяти: " + (MemStat.AvailablePhysicalMemory / 1048576).ToString + " мб");

	    Debug.WriteLine("Свободно виртуальной памяти: " + (MemStat.AvailableVirtualMemory / 1048576).ToString + " мб");

	    Debug.WriteLine("Доступный размер файла подкачки: " + (MemStat.AvailablePageFile / 1048576).ToString + " мб");

	    Debug.WriteLine("Процент загрузки памяти: " + MemStat.MemoryLoad.ToString + " %");

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о памяти, доступной в операционной системе.


См. также:


[IApplication](iapplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
