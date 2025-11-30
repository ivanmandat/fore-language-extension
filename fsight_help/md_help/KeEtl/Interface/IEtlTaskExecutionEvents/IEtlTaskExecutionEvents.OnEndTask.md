# IEtlTaskExecutionEvents.OnEndTask

IEtlTaskExecutionEvents.OnEndTask
-


# IEtlTaskExecutionEvents.OnEndTask


## Синтаксис


OnEndTask(Task: [IEtlTask](../IEtlTask/IEtlTask.htm);
 Duration: Integer; TotalRec: Integer; ErrorRec: Integer);


## Параметры


Task. Задача ETL;


Duration. Время выполнения
 задачи в миллисекундах;


TotalRec. Общее количество
 обработанных записей;


ErrorRec. Общее количество
 ошибочных (пропущенных) записей.


## Описание


Метод OnEndTask реализует событие,
 наступающее при завершении задачи ETL.


## Пример


Использование метода приведено в примере для [IEtlTaskExecutionEvents.OnEndBlock](IEtlTaskExecutionEvents.OnEndBlock.htm).


См. также:


[IEtlTaskExecutionEvents](IEtlTaskExecutionEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
