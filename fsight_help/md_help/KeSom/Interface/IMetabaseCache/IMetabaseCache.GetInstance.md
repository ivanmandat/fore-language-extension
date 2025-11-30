# IMetabaseCache.GetInstance

IMetabaseCache.GetInstance
-


# IMetabaseCache.GetInstance


## Синтаксис


GetInstance(Key: Integer; ParamValues: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm);


## Параметры


Key. Ключ объекта.


ParamValues. Значения параметров,
 которые были использованы для открытия объекта.


## Описание


Метод GetInstance возвращает
 экземпляр объекта из кеша репозитория по ключу и указанному набору параметров.


## Комментарии


Объект помещается в кеш репозитория при первом открытии. Если объект
 открывается с различными параметрами, то кеширование осуществляется для
 каждого набора параметров.


Если в кеше отсутствует указанный объект, либо отсутствует экземпляр
 объекта для указанных значений параметров, то метод возвращает значение
 Null.


См. также:


[IMetabaseCache](IMetabaseCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
