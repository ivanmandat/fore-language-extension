# IForeGarbageCollector.RequestPartitialClean

IForeGarbageCollector.RequestPartitialClean
-


# IForeGarbageCollector.RequestPartitialClean


## Синтаксис


RequestPartitialClean;


## Описание


Метод RequestPartitialClean
 запускает одну итерацию сборки мусора.


## Комментарии


Во время одной итерации сборки мусора из памяти будут удалены объекты,
 которые уже непосредственно отмечены как неиспользуемые и не имеют зависимостей
 от других объектов.


## Пример


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Var

	    GC: IForeGarbageCollector;

	Begin

	    GC := New ForeGarbageCollector.Create;

	    GC.RequestPartitialClean;

	End Sub UserProc;


При выполнении примера будет осуществлён запуск одной итерации сборки
 мусора.


См. также:


[IForeGarbageCollector](IForeGarbageCollector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
