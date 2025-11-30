# IMetabaseObjectInstanceCacheKeeper.PieceSize

IMetabaseObjectInstanceCacheKeeper.PieceSize
-


# IMetabaseObjectInstanceCacheKeeper.PieceSize


## Синтаксис


		PieceSize: Integer;


## Описание


Свойство PieceSize определяет
 размер частей, на которые будут разбиваться большие двоичные данные.


## Комментарии


Свойство актуально, если свойству [IMetabaseObjectInstanceCacheKeeper.SplitBLOB](IMetabaseObjectInstanceCacheKeeper.SplitBLOB.htm)
 установлено значение True. Значение
 свойства указывается в мегабайтах. По умолчанию данные разбиваются на
 части по одному гигабайту (1024 мегабайта).


## Пример


Использования свойства приведено в примере для метода [IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache](IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache.htm).


См. также:


[IMetabaseObjectInstanceCacheKeeper](IMetabaseObjectInstanceCacheKeeper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
