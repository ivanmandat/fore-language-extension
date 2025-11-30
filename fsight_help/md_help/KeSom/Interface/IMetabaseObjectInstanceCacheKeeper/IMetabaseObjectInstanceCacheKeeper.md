# IMetabaseObjectInstanceCacheKeeper

IMetabaseObjectInstanceCacheKeeper
-


# IMetabaseObjectInstanceCacheKeeper


Сборка: Metabase;


## Описание


Интерфейс IMetabaseObjectInstanceCacheKeeper
 содержит свойства и методы, используемые для работы с хранилищем закешированных
 объектов репозитория.


## Иерархия наследования


IMetabaseObjectInstanceCacheKeeper


## Комментарии


Список объектов репозитория, для которых доступно кеширование:


	- [Табличный
	 справочник](UiNavObj.chm::/reference_book/Master_Table_reference_book/Master_Table.htm);


	- [Вычисляемый
	 справочник](uinavobj.chm::/reference_book/Master_Calculation_reference_book/Master_Calculation.htm);


	- [Справочник
	 НСИ](uinavobj.chm::/reference_book/Master_RDS_reference_book/Master_RDS.htm);


	- [Составной
	 справочник НСИ](uinavobj.chm::/reference_book/Master_Composite_Table_reference_book/Master_CompositeTable.htm);


	- [Измерение
	 ADOMD](uinavobj.chm::/ADOMD/UiDb_relational_ADOMD.htm);


	- [Кубы
	 ADOMD](uinavobj.chm::/ADOMD/UiDb_relational_ADOMD.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cache](IMetabaseObjectInstanceCacheKeeper.Cache.htm)


		 Свойство Cache возвращает
		 внутреннюю структуру объекта, который представляет кеш объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Database](IMetabaseObjectInstanceCacheKeeper.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет храниться кеш объекта.


		 ![](../../Property_Image.gif)
		 [PieceSize](IMetabaseObjectInstanceCacheKeeper.PieceSize.htm)


		 Свойство PieceSize
		 определяет размер частей, на которые будут разбиваться большие
		 двоичные данные.


		 ![](../../Property_Image.gif)
		 [SplitBLOB](IMetabaseObjectInstanceCacheKeeper.SplitBLOB.htm)


		 Свойство SplitBLOB
		 определяет признак разбиения данных, хранящихся в полях, имеющих
		 [двоичный
		 тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](IMetabaseObjectInstanceCacheKeeper.Clear.htm)


		 Метод Clear осуществляет
		 очистку кеша указанного объекта репозитория.


		 ![](../../Sub_Image.gif)


		 [SaveDimensionCache](IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache.htm)


		 Метод SaveDimensionCache
		 выполняет сохранение кеша для заданного справочника по заданным
		 параметрам.


		 ![](../../Sub_Image.gif)


		 [ZipCache](IMetabaseObjectInstanceCacheKeeper.ZipCache.htm)


		 Метод ZipCache осуществляет
		 сжатие двоичных данных в хранилище закешированных объектов.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
