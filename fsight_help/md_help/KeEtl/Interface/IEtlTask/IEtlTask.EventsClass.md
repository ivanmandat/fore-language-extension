# IEtlTask.EventsClass

IEtlTask.EventsClass
-


# IEtlTask.EventsClass


## Синтаксис


EventsClass: String;


## Описание


Свойство EventsClass определяет
 класс обработчика событий задачи ETL.


## Комментарии


Свойство актуально, если в свойстве [IEtlTask.EventsAssembly](IEtlTask.EventsAssembly.htm)
 определен объект Fore, который будет использоваться для обработки событий.
 Указываемый класс должен быть наследником класса [EtlTaskExecutionEvents](../../Class/EtlTaskExecutionEvents/EtlTaskExecutionEvents.htm)
 или интерфейса [IEtlTaskExecutionEvents](../IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.htm)
 и содержать реализацию имеющихся в них методов.


## Пример


Использование свойства приведено в примере для [IEtlTask.EventsAssembly](IEtlTask.EventsAssembly.htm).


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
