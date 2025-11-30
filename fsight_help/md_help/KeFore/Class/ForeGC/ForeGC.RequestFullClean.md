# ForeGC.RequestFullClean

ForeGC.RequestFullClean
-


# ForeGC.RequestFullClean


## Синтаксис


RequestFullClean([MaxDuration: Integer = -1]);


## Параметры


MaxDuration. Время выполнения процесса сборки мусора
 в секундах.


## Описание


Метод RequestFullClean запускает
 полный цикл сборки мусора.


## Комментарии


Метод является аналогом метода [IForeGarbageCollector.RequestFullClean](../../Interface/IForeGarbageCollector/IForeGarbageCollector.RequestFullClean.htm)
 и работает по такому же принципу.


## Пример


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Begin

	    ForeGC.RequestFullClean(1);

	End Sub UserProc;


При выполнении примера будет осуществлён запуск полного цикла сборки
 мусора. На сборку мусора будет отведена одна секунда.


См. также:


[ForeGC](ForeGC.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
