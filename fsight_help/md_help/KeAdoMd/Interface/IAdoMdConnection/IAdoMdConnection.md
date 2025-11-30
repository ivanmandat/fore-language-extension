# IAdoMdConnection

IAdoMdConnection
-


# IAdoMdConnection


## Описание


Интерфейс IAdoMdConnection содержит
 свойства и методы для работы с соединением, которое создается при открытии
 каталога ADOMD.


## Комментарии


Параметры соединения могут быть получены в свойстве [IAdoMdCatalogInstance.Connection](../IAdoMdCatalogInstance/IAdoMdCatalogInstance.Connection.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Connection](IAdoMdConnection.Connection.htm)
		 Свойство Connection
		 возвращает параметры соединения, описываемые интерфейсом [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Catalogs](IAdoMdConnection.Catalogs.htm)
		 Метод зарезервирован на будущее.


		 ![](../../Sub_Image.gif)
		 [Cellset](IAdoMdConnection.Cellset.htm)
		 Метод Cellset возвращает
		 аналитические данные, полученные в результате выполнения MDX-запроса
		 к кубам на сервере.


		 ![](../../Sub_Image.gif)
		 [Command](IAdoMdConnection.Command.htm)
		 Метод Command инициализирует
		 объект, позволяющий работать с сервером с помощью MDX-запросов.


		 ![](../../Sub_Image.gif)
		 [CubeDimensions](IAdoMdConnection.CubeDimensions.htm)
		 Метод CubeDimensions
		 возвращает курсор, содержащий системную информацию об указанном
		 измерении указанного куба.


		 ![](../../Sub_Image.gif)
		 [Cubes](IAdoMdConnection.Cubes.htm)
		 Метод Cubes возвращает
		 курсор, содержащий системную информацию о кубе с указанным именем.


		 ![](../../Sub_Image.gif)
		 [Databases](IAdoMdConnection.Databases.htm)
		 Метод Databases извлекает
		 список наименований всех доступных баз данных сервера, на работу
		 с которым настроен каталог ADOMD.


		 ![](../../Sub_Image.gif)
		 [DimensionHierarchies](IAdoMdConnection.DimensionHierarchies.htm)
		 Метод DimensionHierarchies
		 возвращает курсор, содержащий системную информацию об указанной
		 иерархии уровней.


		 ![](../../Sub_Image.gif)
		 [HierarchyLevels](IAdoMdConnection.HierarchyLevels.htm)
		 Метод HierarchyLevels
		 возвращает курсор, содержащий системную информацию об указанном
		 уровне иерархии измерения.


		 ![](../../Sub_Image.gif)
		 [HierarchyMembers](IAdoMdConnection.HierarchyMembers.htm)
		 Метод HierarchyMembers
		 возвращает курсор, содержащий информацию об элементах указанной
		 иерархии измерения.


См. также:


[Интерфейсы сборки AdoMd](../KeAdoMd_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
