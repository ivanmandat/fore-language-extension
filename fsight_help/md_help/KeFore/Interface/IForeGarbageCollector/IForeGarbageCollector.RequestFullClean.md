# IForeGarbageCollector.RequestFullClean

IForeGarbageCollector.RequestFullClean
-


# IForeGarbageCollector.RequestFullClean


## Синтаксис


RequestFullClean([MaxDuration: Integer = -1]);


## Параметры


MaxDuration. Время выполнения
 процесса сборки мусора в секундах.


## Описание


Метод RequestFullClean запускает
 полный цикл сборки мусора.


## Комментарии


В отличие от метода [RequestPartitialClean](IForeGarbageCollector.RequestPartitialClean.htm),
 который производит только одну итерацию сборки мусора, RequestFullClean
 будет повторять попытки очистки пока из памяти не будут удалены все неиспользуемые
 объекты. Например, есть объект B, который зависит от объекта A. Объект
 A помечен как неиспользуемый. После выполнения метода [RequestPartitialClean](IForeGarbageCollector.RequestPartitialClean.htm)
 объект A будет удален из памяти, а B останется. При выполнении метода
 RequestFullClean после первой итерации будет удален объект A, на второй
 итерации будет удалён объект B и так далее.


По умолчанию параметр MaxDuration
 не задан, при этом сборка мусора выполняется пока в памяти не останутся
 только те объекты, которые отмечены как используемые. Если задать параметр
 MaxDuration и сборщик мусора
 не успеет завершить свою работу за указанное время, то процесс будет остановлен
 и продолжен при повторных вызовах метода или когда наступят условия, необходимые
 для автоматического запуска процесса [сборки
 мусора](KnowledgeBase.chm::/01_Fore/KB000030/KnowledgeBase_KB000030_2.htm).


## Пример


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Var

	    GC: IForeGarbageCollector;

	Begin

	    GC := New ForeGarbageCollector.Create;

	    GC.RequestFullClean(1);

	End Sub UserProc;


При выполнении примера будет осуществлён запуск полного цикла сборки
 мусора. На сборку мусора будет отведена одна секунда.


См. также:


[IForeGarbageCollector](IForeGarbageCollector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
