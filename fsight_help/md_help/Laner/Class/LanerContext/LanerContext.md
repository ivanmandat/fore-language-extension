# LanerContext

LanerContext
-


# LanerContext


## Описание


Класс LanerContext реализует контекст, в рамках которого осуществляется синхронизация данных между рабочими книгами базы данных временных рядов.


## Комментарии


Если рабочие книги базы данных временных рядов зарегистрированы в контексте, то между ними будет производиться синхронизация данных. При изменении значений ряда одной рабочей книги соответствующие данные будут обновлены во всех рядах с теми же значениями обязательных атрибутов.


## Свойства, унаследованные от [ILanerContext](../../Interface/ILanerContext/ILanerContext.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowExternalStubs](../../Interface/ILanerContext/ILanerContext.AllowExternalStubs.htm)


		 Свойство AllowExternalStubs
		 определяет, разрешено ли использовать в расчетах ряды из различных
		 рабочих книг.


		 ![](../../Property_Image.gif)
		 [AllowSmartHighlighting](../../Interface/ILanerContext/ILanerContext.AllowSmartHighlighting.htm)


		 Свойство AllowSmartHighlighting
		 определяет, разрешена ли «умная» подсветка.


		 ![](../../Property_Image.gif)
		 [AllowSynchronization](../../Interface/ILanerContext/ILanerContext.AllowSynchronization.htm)


		 Свойство AllowSynchronization
		 определяет, разрешена ли синхронизация одинаковых рядов.


		 ![](../../Property_Image.gif)
		 [DataLoadEndDate](../../Interface/ILanerContext/ILanerContext.DataLoadEndDate.htm)


		 Свойство DataLoadEndDate
		 определяет дату окончания загрузки данных для всех рабочих книг,
		 содержащихся в контексте.


		 ![](../../Property_Image.gif)
		 [DataLoadStartDate](../../Interface/ILanerContext/ILanerContext.DataLoadStartDate.htm)


		 Свойство DataLoadStartDate
		 определяет дату начала загрузки данных для всех рабочих книг,
		 содержащихся в контексте.


## Методы, унаследованные от [ILanerContext](../../Interface/ILanerContext/ILanerContext.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginLoad](../../Interface/ILanerContext/ILanerContext.BeginLoad.htm)


		 Метод BeginLoad
		 начинает загрузку рабочих книг в контекст.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](../../Interface/ILanerContext/ILanerContext.CreateCopy.htm)


		 Метод CreateCopy
		 создает копию указанной рабочей книги.


		 ![](../../Sub_Image.gif)
		 [EndLoad](../../Interface/ILanerContext/ILanerContext.EndLoad.htm)


		 Метод EndLoad
		 завершает загрузку рабочих книг в контекст.


		 ![](../../Sub_Image.gif)
		 [FindSerieByStubKey](../../Interface/ILanerContext/ILanerContext.FindSerieByStubKey.htm)


		 Метод FindSerieByStubKey
		 выполняет поиск ряда в контексте по ключу источника данных.


		 ![](../../Sub_Image.gif)
		 [IsRegistered](../../Interface/ILanerContext/ILanerContext.IsRegistered.htm)


		 Метод IsRegistered
		 возвращает признак того, зарегистрирована ли рабочая книга в контексте.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream](../../Interface/ILanerContext/ILanerContext.LoadFromStream.htm)


		 Метод LoadFromStream
		 загружает контекст из указанного потока.


		 ![](../../Sub_Image.gif)
		 [RefreshData](../../Interface/ILanerContext/ILanerContext.RefreshData.htm)


		 Метод RefreshData обновляет
		 данные рабочих книг, зарегистрированных в контексте.


		 ![](../../Sub_Image.gif)
		 [Register](../../Interface/ILanerContext/ILanerContext.Register.htm)


		 Метод Register регистрирует
		 рабочую книгу в контексте.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](../../Interface/ILanerContext/ILanerContext.SaveToStream.htm)


		 Метод SaveToStream
		 выгружает контекст в указанный поток.


		 ![](../../Sub_Image.gif)
		 [Unregister](../../Interface/ILanerContext/ILanerContext.Unregister.htm)


		 Метод Unregister отключает
		 рабочую книгу от контекста.


См. также:


[Классы сборки Laner](../Laner_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
