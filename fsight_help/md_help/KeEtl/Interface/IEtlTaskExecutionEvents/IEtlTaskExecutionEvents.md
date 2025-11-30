# IEtlTaskExecutionEvents

IEtlTaskExecutionEvents
-


# IEtlTaskExecutionEvents


Сборка: Etl;


## Описание


Интерфейс IEtlTaskExecutionEvents
 содержит методы обработчика событий выполнения задачи ETL.


## Иерархия наследования


IEtlTaskExecutionEvents


## Комментарии


Обработчик событий для задачи ETL задаётся с помощью свойств [IEtlTask.EventsAssembly](../IEtlTask/IEtlTask.EventsAssembly.htm)
 и [IEtlTask.EventsClass](../IEtlTask/IEtlTask.EventsClass.htm).


Интерфейс является базовым для класса [EtlTaskExecutionEvents](../../Class/EtlTaskExecutionEvents/EtlTaskExecutionEvents.htm).
 Методы должны быть переопределены в пользовательском классе.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnEndBlock](IEtlTaskExecutionEvents.OnEndBlock.htm)
		 Метод OnEndBlock реализует
		 событие, наступающее при завершении блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnEndTask](IEtlTaskExecutionEvents.OnEndTask.htm)
		 Метод OnEndTask реализует
		 событие, наступающее при завершении задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnError](IEtlTaskExecutionEvents.OnError.htm)
		 Метод OnError реализует
		 событие, наступающее при возникновении ошибки блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnProgress](IEtlTaskExecutionEvents.OnProgress.htm)
		 Метод OnProgress реализует
		 событие, наступающее в процессе выполнения задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnStartBlock](IEtlTaskExecutionEvents.OnStartBlock.htm)
		 Метод OnStartBlock
		 реализует событие, наступающее при запуске блока задачи ETL.


		 ![](../../Sub_Image.gif)
		 [OnStartTask](IEtlTaskExecutionEvents.OnStartTask.htm)
		 Метод OnStartTask реализует
		 событие, наступающее при запуске задачи ETL.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
