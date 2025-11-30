# IPrxSliceDataCache

IPrxSliceDataCache
-


# IPrxSliceDataCache


Сборка: Report;


## Описание


Интерфейс IPrxSliceDataCache
 содержит свойства и методы для настройки параметров кеширования данных
 среза.


## Иерархия наследования


           [IPrxDataCache](../IPrxDataCache/IPrxDataCache.htm)


           IPrxSliceDataCache


## Комментарии


Интерфейс не содержит собственных свойств и методов.


Для настройки параметров кеширования необходимо объект, имеющий тип
 [IPrxSlice](../IPrxSlice/IPrxSlice.htm),
 привести к данному типу:


	    Var

	        //…

	        Slice: IPrxSlice;

	        SliceCache: IPrxSliceDataCache;

	        //…

	    Begin

	        //…

	        Slice := //Получение параметров среза

	        SliceCache := Slice As IPrxSliceDataCache;

	        //…


## Свойства, унаследованные от [IPrxDataCache](../IPrxDataCache/IPrxDataCache.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UseDataCache](../IPrxDataCache/IPrxDataCache.UseDataCache.htm)
		 Свойство UseDataCache
		 определяет признак использования кеширования данных.


## Методы, унаследованные от [IPrxDataCache](../IPrxDataCache/IPrxDataCache.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FlushDataCache](../IPrxDataCache/IPrxDataCache.FlushDataCache.htm)
		 Метод FlushDataCache
		 очищает содержимое кеша данных.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
