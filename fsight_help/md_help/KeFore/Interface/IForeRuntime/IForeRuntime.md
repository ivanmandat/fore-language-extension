# IForeRuntime

IForeRuntime
-


# IForeRuntime


Сборка: Fore;


## Описание


Интерфейс IForeRuntime предназначен
 для работы со средой выполнения Fore-кода.


## Иерархия наследования


IForeRuntime


## Комментарии


Контекст среды выполнения Fore-кода можно получить, используя метод
 [IForeServices.GetRuntime](../IForeServices/IForeServices.GetRuntime.htm).


Среда выполнения позволяет:


	- получать метаданные объектов среды разработки (модулей, форм,
	 сборок);


	- получать информацию о конструкциях, которые реализованы в сборках
	 (количество и наименования интерфейсов, классов, перечислений, а также
	 список методов, реализованных в интерфейсах и классах);


	- выполнять методы и получать результаты их выполнения;


	- отслеживать объекты в памяти для выявления утечек.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ExternReferenceLogger](IForeRuntime.ExternReferenceLogger.htm)
		 Свойство ExternReferenceLogger
		 возвращает настройки логирования изменений счётчика внешних ссылок.


		 ![](../../Property_Image.gif)
		 [ForeObjectsGraph](IForeRuntime.ForeObjectsGraph.htm)
		 Свойство ForeObjectsGraph
		 возвращает доступ к графу объектов в памяти.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BindToAssembly](IForeRuntime.BindToAssembly.htm)
		 Метод BindToAssembly
		 предоставляет доступ к конструкциям сборки.


		 ![](../../Sub_Image.gif)
		 [BindToObject](IForeRuntime.BindToObject.htm)
		 Метод BindToObject
		 предоставляет доступ к экземпляру пользовательского класса.


		 ![](../../Sub_Image.gif)
		 [ResolveAssembly](IForeRuntime.ResolveAssembly.htm)
		 Метод ResolveAssembly
		 проверяет наличие указанной сборки в репозитории.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
