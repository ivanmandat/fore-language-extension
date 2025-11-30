# ISmDerivative.DiffVariables

ISmDerivative.DiffVariables
-


# ISmDerivative.DiffVariables


## Синтаксис


DiffVariables: String;


## Описание


Свойство DiffVariables определяет
 набор переменных дифференцирования.


## Комментарии


Переменные должны быть перечислены через знак «;». Наименование переменной
 должно совпадать с наименованием, указанными в формуле функции.


Допустим, в свойстве [ISmDerivative.Expression](ISmDerivative.Expression.htm)
 указана функция: A1 + A2 * A2 + A3 *
 A3 * A2. Таким образом, переменными дифференцирования могут быть:
 «A1», «A2»,
 «A3». В свойстве DiffVariables
 можно указать значение: A2;A1.


## Пример


Использование свойства приведено в примере для [ISmDerivative.CoefficientsOrder](ISmDerivative.CoefficientsOrder.htm).


См. также:


[ISmDerivative](ISmDerivative.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
