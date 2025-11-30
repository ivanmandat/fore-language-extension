# ForeGC.RequestPartitialClean

ForeGC.RequestPartitialClean
-


# ForeGC.RequestPartitialClean


## Синтаксис


RequestPartitialClean;


## Описание


Метод RequestPartitialClean
 запускает одну итерацию сборки мусора.


## Комментарии


Метод является аналогом метода [IForeGarbageCollector.RequestPartitialClean](../../Interface/IForeGarbageCollector/IForeGarbageCollector.RequestPartitialClean.htm)
 и работает по такому же принципу.


## Пример


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Begin

	    ForeGC.RequestPartitialClean;

	End Sub UserProc;


При выполнении примера будет осуществлён запуск одной итерации сборки
 мусора.


См. также:


[ForeGC](ForeGC.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
