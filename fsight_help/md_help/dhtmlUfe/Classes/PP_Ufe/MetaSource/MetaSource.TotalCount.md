# MetaSource.TotalCount

MetaSource.TotalCount
-


# MetaSource.TotalCount


## Синтаксис


TotalCount: Array;


## Описание


Свойство TotalCount определяет
 количество элементов для каждого фильтра модели.


## Комментарии


Значение свойства устанавливается с помощью метода setTotalCount,
 а возвращается с помощью метода getTotalCount.
 Из JSON задать значение нельзя.


Параметры метода setTotalCount:


- value: String. Количество
 элементов;


- filter: PP.Mb.ElsFilter.
 Фильтр, которому удовлетворяют элементы.


Параметры метода getTotalCount:


- filter: PP.Mb.ElsFilter.
 Фильтр элементов, количество которых необходимо получить;


## Пример


Пример использования свойства приведен в описании метода [MetaSrv.getChildren](../MetaSrv/MetaSrv.getChildren.htm).


См. также:


[MetaSource](MetaSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
