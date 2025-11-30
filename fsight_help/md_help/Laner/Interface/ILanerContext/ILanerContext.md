# ILanerContext

ILanerContext
-


# ILanerContext


Сборка: Laner;


## Описание


Интерфейс ILanerContext содержит
 свойства и методы для работы с контекстом, в рамках которого осуществляется
 синхронизация данных между рабочими книгами базы данных временных рядов.


## Иерархия наследования


           ILanerContext


## Комментарии


Рабочие книги, зарегистрированные в одном контексте, должны иметь в
 качестве источника данных одну и ту же базу данных временных рядов. Каждая
 рабочая книга может быть добавлена в контекст только в одном экземпляре.


Если рабочие книги базы данных временных рядов зарегистрированы в одном
 контексте, то между ними будет производиться синхронизация данных. При
 изменении значений ряда одной рабочей книги соответствующие данные будут
 обновлены во всех рядах с теми же значениями обязательных атрибутов. При
 изменении значения группового атрибута значение данного атрибута будет
 обновлено во всех рядах, входящих в группу.


Механизм синхронизации рядов с установленным [форматом
 отображения](../ILanerSerieDisplayParams/ILanerSerieDisplayParams.htm) (преобразованием) и рядов с исходными данными:


	- при изменении значений ряда с преобразованием исходный ряд пересчитывается
	 в соответствии со сделанными изменениями. Таким образом, выполняется
	 обратное преобразование;


	- при изменении исходных значений ряда производится сравнение
	 ряда с преобразованием на неизмененных данных с рядом на измененных
	 данных. Значения ряда с преобразованием подсвечиваются только если
	 они изменились;


	- в БД всегда сохраняются исходные данные, т.е. данные без
	 преобразования.


Примечание.
 Для преобразований «Стандартизация»
 и «Нормализация» данный механизм
 не работает.


Для составления формул доступны все ряды из всех рабочих книг, зарегистрированных
 в контексте.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowExternalStubs](ILanerContext.AllowExternalStubs.htm)


		 Свойство AllowExternalStubs
		 определяет, разрешено ли использовать в расчетах ряды из различных
		 рабочих книг.


		 ![](../../Property_Image.gif)
		 [AllowSmartHighlighting](ILanerContext.AllowSmartHighlighting.htm)


		 Свойство AllowSmartHighlighting
		 определяет, разрешена ли «умная» подсветка.


		 ![](../../Property_Image.gif)
		 [AllowSynchronization](ILanerContext.AllowSynchronization.htm)


		 Свойство AllowSynchronization
		 определяет, разрешена ли синхронизация одинаковых рядов.


		 ![](../../Property_Image.gif)
		 [DataLoadEndDate](ILanerContext.DataLoadEndDate.htm)


		 Свойство DataLoadEndDate
		 определяет дату окончания загрузки данных для всех рабочих книг,
		 содержащихся в контексте.


		 ![](../../Property_Image.gif)
		 [DataLoadStartDate](ILanerContext.DataLoadStartDate.htm)


		 Свойство DataLoadStartDate
		 определяет дату начала загрузки данных для всех рабочих книг,
		 содержащихся в контексте.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginLoad](ILanerContext.BeginLoad.htm)


		 Метод BeginLoad
		 начинает загрузку рабочих книг в контекст.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](ILanerContext.CreateCopy.htm)


		 Метод CreateCopy
		 создает копию указанной рабочей книги.


		 ![](../../Sub_Image.gif)
		 [EndLoad](ILanerContext.EndLoad.htm)


		 Метод EndLoad
		 завершает загрузку рабочих книг в контекст.


		 ![](../../Sub_Image.gif)
		 [FindSerieByStubKey](ILanerContext.FindSerieByStubKey.htm)


		 Метод FindSerieByStubKey
		 выполняет поиск ряда в контексте по ключу источника данных.


		 ![](../../Sub_Image.gif)
		 [IsRegistered](ILanerContext.IsRegistered.htm)


		 Метод IsRegistered
		 возвращает признак того, зарегистрирована ли рабочая книга в контексте.


		 ![](../../Sub_Image.gif)
		 [LoadFromStream](ILanerContext.LoadFromStream.htm)


		 Метод LoadFromStream
		 загружает контекст из указанного потока.


		 ![](../../Sub_Image.gif)
		 [RefreshData](ILanerContext.RefreshData.htm)


		 Метод RefreshData обновляет
		 данные рабочих книг, зарегистрированных в контексте.


		 ![](../../Sub_Image.gif)
		 [Register](ILanerContext.Register.htm)


		 Метод Register регистрирует
		 рабочую книгу в контексте.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](ILanerContext.SaveToStream.htm)


		 Метод SaveToStream
		 выгружает контекст в указанный поток.


		 ![](../../Sub_Image.gif)
		 [Unregister](ILanerContext.Unregister.htm)


		 Метод Unregister отключает
		 рабочую книгу от контекста.


См. также:


[Интерфейсы
 сборки Laner](../Laner_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
