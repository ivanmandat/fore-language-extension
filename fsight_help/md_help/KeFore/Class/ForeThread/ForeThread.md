# ForeThread

ForeThread
-


# ForeThread


Сборка: Fore;


## Описание


Класс ForeThread реализует поток,
 предназначенный для параллельного выполнения пользовательских методов.


## Комментарии


При создании новый поток связывается с [пользовательским
 методом](../../Interface/IForeMethod/IForeMethod.htm), который указывается в конструкторе [Create](ForeThread.Create.htm).
 При запуске потока запускается на выполнение пользовательский метод. Все
 потоки выполняются параллельно друг другу и основному приложению, в которых
 потоки созданы.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ForeThread.Create.htm)
		 Конструктор Create
		 создаёт поток, связанный с указанным пользовательским методом.


## Свойства объекта класса, унаследованные от [IForeThread](../../Interface/IForeThread/IForeThread.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IForeThread/IForeThread.Name.htm)
		 Свойство Name определяет
		 наименование потока.


		 ![](../../Property_Image.gif)
		 [State](../../Interface/IForeThread/IForeThread.State.htm)
		 Свойство State возвращает
		 текущее состояние потока.


## Методы объекта класса, унаследованные от [IForeThread](../../Interface/IForeThread/IForeThread.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Abort](../../Interface/IForeThread/IForeThread.Abort.htm)
		 Метод Abort завершает
		 выполнение потока.


		 ![](../../Sub_Image.gif)
		 [Join](../../Interface/IForeThread/IForeThread.Join.htm)
		 Метод Join останавливает
		 выполнение кода до завершения потока.


		 ![](../../Sub_Image.gif)
		 [Sleep](../../Interface/IForeThread/IForeThread.Sleep.htm)
		 Метод Sleep приостанавливает
		 выполнение потока на заданное количество миллисекунд.


		 ![](../../Sub_Image.gif)
		 [Start](../../Interface/IForeThread/IForeThread.Start.htm)
		 Метод Start запускает
		 поток на выполнение.


См. также:


[Классы
 сборки Fore](../KeFore_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
