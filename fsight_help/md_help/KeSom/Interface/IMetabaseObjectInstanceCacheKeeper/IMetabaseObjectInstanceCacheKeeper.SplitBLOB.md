# IMetabaseObjectInstanceCacheKeeper.SplitBLOB

IMetabaseObjectInstanceCacheKeeper.SplitBLOB
-


# IMetabaseObjectInstanceCacheKeeper.SplitBLOB


## Синтаксис


		SplitBLOB: Boolean;


## Описание


Свойство SplitBLOB определяет
 признак разбиения данных, хранящихся в полях, имеющих [двоичный
 тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm).


## Комментарии


Если полю установлено значение True,
 то двоичные данные, имеющие большой объем, будут разбиваться на части
 и храниться в нескольких записях в таблице СУБД. Размер каждой записи
 определяет свойство [IMetabaseObjectInstanceCacheKeeper.PieceSize](IMetabaseObjectInstanceCacheKeeper.PieceSize.htm).


## Пример


Использования свойства приведено в примере для метода [IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache](IMetabaseObjectInstanceCacheKeeper.SaveDimensionCache.htm).


См. также:


[IMetabaseObjectInstanceCacheKeeper](IMetabaseObjectInstanceCacheKeeper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
