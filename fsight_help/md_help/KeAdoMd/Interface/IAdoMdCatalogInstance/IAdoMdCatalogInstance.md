# IAdoMdCatalogInstance

IAdoMdCatalogInstance
-


# IAdoMdCatalogInstance


## Описание


Интерфейс IAdoMdCatalogInstance
 содержит свойства и методы для работы с содержимым экземпляра каталога
 ADOMD.


## Комментарии


Открытый экземпляр каталога ADOMD может быть получен при выполнении
 следующих методов:


	- [IAdoMdCatalog.Open](../IAdoMdCatalog/IAdoMdCatalog.Open.htm);


	- [IAdoMdCatalog.OpenWithCredentials](../IAdoMdCatalog/IAdoMdCatalog.OpenWithCredentials.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Catalog](IAdoMdCatalogInstance.Catalog.htm)
		 Свойство Catalog возвращает
		 параметры каталога ADOMD, для которого был получен текущий экземпляр
		 открытого каталога.


		 ![](../../Property_Image.gif)
		 [Connection](IAdoMdCatalogInstance.Connection.htm)
		 Свойство Connection
		 возвращает параметры подключения к серверу.


		 ![](../../Property_Image.gif)
		 [CubesFail](IAdoMdCatalogInstance.CubesFail.htm)
		 Свойство CubesFail
		 возвращает массив, содержащий список кубов, при обновлении которых
		 возникли какие-либо ошибки.


		 ![](../../Property_Image.gif)
		 [CubesFailExceptions](IAdoMdCatalogInstance.CubesFailExceptions.htm)
		 Свойство CubesFailExceptions
		 возвращает массив, содержащий список ошибок, которые возникли
		 при обновлении кубов каталога ADOMD.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Refresh](IAdoMdCatalogInstance.Refresh.htm)
		 Метод Refresh обновляет
		 содержимое каталога ADOMD.


		 ![](../../Sub_Image.gif)
		 [RefreshBySQL](IAdoMdCatalogInstance.RefreshBySQL.htm)
		 Метод RefreshBySQL
		 обновляет содержимое каталога ADOMD путем выполнения указанного
		 MDX-запроса.


		 ![](../../Sub_Image.gif)
		 [RefreshCube](IAdoMdCatalogInstance.RefreshCube.htm)
		 Метод RefreshCube обновляет
		 структуру указанного куба.


См. также:


[Интерфейсы сборки AdoMd](../KeAdoMd_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
