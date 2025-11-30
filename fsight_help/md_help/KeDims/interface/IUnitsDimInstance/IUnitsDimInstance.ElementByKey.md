# IUnitsDimInstance.ElementByKey

IUnitsDimInstance.ElementByKey
-


# IUnitsDimInstance.ElementByKey


## Синтаксис


ElementByKey(ElementKey: Variant): Integer;


## Параметры


ElementKey. Ключ элемента справочника.


## Описание


Свойство ElementByKey возвращает
 индекс элемента по его ключу.


## Комментарии


Зная индекс элемента можно получить:


	- базовый элемент: [IUnitsDimInstance.BasisByElement](IUnitsDimInstance.BasisByElement.htm);


	- признак того, является ли элемент единицей измерения: [IUnitsDimInstance.IsUnit](IUnitsDimInstance.IsUnit.htm);


	- меру элемента: [IUnitsDimInstance.MeasureByElement](IUnitsDimInstance.MeasureByElement.htm);


	- масштаб элемента: [IUnitsDimInstance.Scale](IUnitsDimInstance.Scale.htm).


## Пример


Использование свойства приведено в примере для [IUnitsDimInstance.BasisByElementKey](IUnitsDimInstance.BasisByElementKey.htm).


См. также:


[IUnitsDimInstance](IUnitsDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
