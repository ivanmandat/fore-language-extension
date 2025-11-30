# IMsDimIterateByDataOptions.Active

IMsDimIterateByDataOptions.Active
-


# IMsDimIterateByDataOptions.Active


## Синтаксис


		Active: Boolean;


## Описание


Свойство Active определяет
 признак использования итерации по данным.


## Комментарии


Допустимые значения:


	- True. Применяется итерация
	 по данным;


	- False. Итерация по данным
	 не применяется.


Использование итерации по данным влияет только на скорость расчёта.
 Если матрица с данными разреженная (мало данных), то скорость расчёта
 будет выше, если свойству установить значение True.
 Если матрица полная (много данных), то скорость расчёта будет выше, если
 свойству установить значение False.


Матрица входных данных задаётся свойством [IMsDimIterateByDataOptions.Stubs](IMsDimIterateByDataOptions.Stubs.htm).


## Пример


Использование свойства приведено в примере для [IMsCalculationChainMultiDimIterator.IterateByData](../IMsCalculationChainMultiDimIterator/IMsCalculationChainMultiDimIterator.IterateByData.htm).


См. также:


[IMsDimIterateByDataOptions](IMsDimIterateByDataOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
