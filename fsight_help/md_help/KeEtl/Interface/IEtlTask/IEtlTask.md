# IEtlTask

IEtlTask
-


# IEtlTask


Сборка: Etl;


## Описание


Интерфейс IEtlTask содержит
 свойства и методы объектов задачи ETL.


## Иерархия наследования


           IEtlTask


## Комментарии


Для работы с объектами рабочего пространства ETL, оперирующих плоскими
 данными, используйте свойства и методы интерфейса [IEtlObject](../IEtlObject/IEtlObject.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveChain](IEtlTask.ActiveChain.htm)
		 Свойство ActiveChain
		 определяет состояние цепочки объектов.


		 ![](../../Property_Image.gif)
		 [Count](IEtlTask.Count.htm)
		 Свойство Count возвращает
		 количество объектов в задаче ETL.


		 ![](../../Property_Image.gif)
		 [CustomData](IEtlTask.CustomData.htm)
		 Свойство CustomData
		 определяет представление задачи ETL в формате JSON.


		 ![](../../Property_Image.gif)
		 [EventsAssembly](IEtlTask.EventsAssembly.htm)
		 Свойство EventsAssembly
		 определяет объект репозитория, который будет использоваться для
		 обработки событий.


		 ![](../../Property_Image.gif)
		 [DefaultBlockSize](IEtlTask.DefaultBlockSize.htm)
		 Свойство DefaultBlockSize
		 определяет количество записей, обрабатываемых в рамках одного
		 пакета.


		 ![](../../Property_Image.gif)
		 [EventsClass](IEtlTask.EventsClass.htm)
		 Свойство EventsClass
		 определяет класс обработчика событий задачи ETL.


		 ![](../../Property_Image.gif)
		 [Item](IEtlTask.Item.htm)
		 Свойство Item возвращает
		 объект задачи ETL.


		 ![](../../Property_Image.gif)
		 [Links](IEtlTask.Links.htm)
		 Свойство Links возвращает
		 объект, содержащий все связи между объектами задачи ETL.


		 ![](../../Property_Image.gif)
		 [Log](IEtlTask.Log.htm)
		 Свойство Log определяет
		 журнал выполнения задачи ETL.


		 ![](../../Property_Image.gif)
		 [Modified](IEtlTask.Modified.htm)
		 Свойство Modified возвращает
		 True, если в задаче ETL
		 присутствуют изменения.


		 ![](../../Property_Image.gif)
		 [ParamValues](IEtlTask.ParamValues.htm)
		 Свойство ParamValues
		 возвращает коллекцию значений параметров задачи ETL.


		 ![](../../Property_Image.gif)
		 [PartialFetch](IEtlTask.PartialFetch.htm)
		 Свойство PartialFetch
		 определяет,будет ли задача ETL использовать пакетную обработку
		 данных.


		 ![](../../Property_Image.gif)
		 [ShowInfoBox](IEtlTask.ShowInfoBox.htm)
		 Свойство ShowInfoBox
		 определяет, будет ли выводиться информационное окно с результатом
		 выполнения задачи ETL.


		 ![](../../Property_Image.gif)
		 [Workspace](IEtlTask.Workspace.htm)
		 Свойство Workspace
		 возвращает объект, содержащий в себе рабочее пространство задачи
		 ETL.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ActivateObject](IEtlTask.ActivateObject.htm)
		 Метод ActivateObject
		 используется для включения/исключения объекта из расчета цепочки.


		 ![](../../Sub_Image.gif)
		 [CanDeactivateObject](IEtlTask.CanDeactivateObject.htm)
		 Метод CanDeactivateObject
		 используется для определения, исключен ли объект из расчета цепочки.


		 ![](../../Sub_Image.gif)
		 [Create](IEtlTask.Create.htm)
		 Метод Create создает
		 объект задачи ETL.


		 ![](../../Sub_Image.gif)
		 [CreatePlainLink](IEtlTask.CreatePlainLink.htm)
		 Метод CreatePlainLink
		 создает связь объектов задачи ETL, оперирующих плоскими данными.


		 ![](../../Sub_Image.gif)
		 [Execute](IEtlTask.Execute.htm)
		 Метод Execute осуществляет
		 выполнение задачи ETL.


		 ![](../../Sub_Image.gif)
		 [FindById](IEtlTask.FindById.htm)
		 Метод FindById осуществляет
		 поиск и возвращает объект задачи ETL.


		 ![](../../Sub_Image.gif)
		 [FindETLPlainLink](IEtlTask.FindETLPlainLink.htm)
		 Метод FindETLPlainLink
		 осуществляет поиск и возвращает объект содержащий связь между
		 объектами задачи ETL.


		 ![](../../Sub_Image.gif)
		 [FindWxLink](IEtlTask.FindWxLink.htm)
		 Метод FindWxLink осуществляет
		 поиск и возвращает объект содержащий визуальную связь между объектами
		 задачи ETL.


		 ![](../../Sub_Image.gif)
		 [StopExecute](IEtlTask.StopExecute.htm)
		 Метод StopExecute останавливает
		 выполнение задачи ETL.


См. также:


[Интерфейсы сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
