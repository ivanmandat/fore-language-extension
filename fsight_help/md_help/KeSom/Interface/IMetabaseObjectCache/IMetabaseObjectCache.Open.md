# IMetabaseObjectCache.Open

IMetabaseObjectCache.Open
-


# IMetabaseObjectCache.Open


## Синтаксис


Open(Params: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)): [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm);


## Параметры


Params - параметры объекта, в соответствии с которыми необходимо получить экземпляр объекта из кеша.


## Описание


Метод Open осуществляет открытие экземпляра объекта из кеша.


## Комментарии


Если в кеше объекта отсутствует запись, созданная при открытии объекта с указанными параметрами, то метод возвращает значение Null.


См. также:


[IMetabaseObjectCache](IMetabaseObjectCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
