# IEtlTaskExecutionEvents.OnError

IEtlTaskExecutionEvents.OnError
-


# IEtlTaskExecutionEvents.OnError


## Синтаксис


OnError(Task: [IEtlTask](../IEtlTask/IEtlTask.htm);
 Object: [IEtlObject](../IEtlObject/IEtlObject.htm); Exception:
 [IException](ForeSys.chm::/Interface/IException/IException.htm));


## Параметры


Task. Задача ETL;


Object. Объект задачи ETL;


Exception. Исключительная ситуация,
 которая может возникнуть во время работы в платформе.


## Описание


Метод OnError реализует событие,
 наступающее при возникновении ошибки блока задачи ETL.


## Комментарии


Блок задачи ETL - это совокупность двух объектов и связи между ними
 в задаче ETL.


## Пример


Использование метода приведено в примере для [IEtlTaskExecutionEvents.OnEndBlock](IEtlTaskExecutionEvents.OnEndBlock.htm).


См. также:


[IEtlTaskExecutionEvents](IEtlTaskExecutionEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
