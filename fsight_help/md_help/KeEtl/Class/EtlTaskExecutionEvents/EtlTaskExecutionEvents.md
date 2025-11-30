# EtlTaskExecutionEvents

EtlTaskExecutionEvents
-


# EtlTaskExecutionEvents


Сборка: Etl;


## Описание


Класс EtlTaskExecutionEvents
 используется для реализации обработчика событий выполнения задачи ETL.


## Комментарии


Обработчик событий для задачи ETL задаётся с помощью свойств [IEtlTask.EventsAssembly](../../Interface/IEtlTask/IEtlTask.EventsAssembly.htm)
 и [IEtlTask.EventsClass](../../Interface/IEtlTask/IEtlTask.EventsClass.htm).


Методы должны быть переопределены в пользовательском классе.


## Методы класса, унаследованные от [IEtlTaskExecutionEvents](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnEndBlock](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnEndBlock.htm)
		 Метод OnEndBlock реализует
		 событие, наступающее при завершении блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnEndTask](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnEndTask.htm)
		 Метод OnEndTask реализует
		 событие, наступающее при завершении задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnError](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnError.htm)
		 Метод OnError реализует
		 событие, наступающее при возникновении ошибки блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnProgress](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnProgress.htm)
		 Метод OnProgress реализует
		 событие, наступающее в процессе выполнения задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnStartBlock](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnStartBlock.htm)
		 Метод OnStartBlock
		 реализует событие, наступающее при запуске блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnStartTask](../../Interface/IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnStartTask.htm)
		 Метод OnStartTask реализует
		 событие, наступающее при запуске задачи ETL.


См. также:


[Классы
 сборки Etl](../KeEtl_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
