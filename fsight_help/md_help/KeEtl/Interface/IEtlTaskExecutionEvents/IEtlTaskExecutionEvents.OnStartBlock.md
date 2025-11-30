# IEtlTaskExecutionEvents.OnStartBlock

IEtlTaskExecutionEvents.OnStartBlock
-


# IEtlTaskExecutionEvents.OnStartBlock


## Синтаксис


OnStartBlock(Task: [IEtlTask](../IEtlTask/IEtlTask.htm);
 Object: [IEtlObject](../IEtlObject/IEtlObject.htm));


## Параметры


Task. Задача ETL;


Object. Объект задачи ETL.


## Описание


Метод OnStartBlock реализует
 событие, наступающее при запуске блока задачи ETL.


## Комментарии


Блок задачи ETL - это совокупность двух объектов и связи между ними
 в задаче ETL. Событие наступает для первого объекта блока, который будет
 доступен в параметре Object.
 После выполнения объекта в соответствии с его назначением записи будут
 перенаправлены во второй объект, с которым первый объект связан в один
 блок.


## Пример


Использование метода приведено в примере для [IEtlTaskExecutionEvents.OnEndBlock](IEtlTaskExecutionEvents.OnEndBlock.htm).


См. также:


[IEtlTaskExecutionEvents](IEtlTaskExecutionEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
