# ICallbackNLOptimization

ICallbackNLOptimization
-


# ICallbackNLOptimization


Сборка: Stat;


## Описание


Интерфейс ICallbackNLOptimization
 предназначен для работы с пользовательским классом, используемым для расчёта
 значений переменных, целевой функции и нелинейных ограничений.


## Иерархия наследования


           ICallbackNLOptimization


## Комментарии


Для работы с параметрами оптимизации функции произвольного вида при
 нелинейных ограничениях используйте свойства интерфейса [ISmNonLinearOptimization](../ISmNonLinearOptimization/ISmNonLinearOptimization.htm).


Для работы с параметрами оптимизации функции произвольного вида используйте
 свойства интерфейса [ISmBoxConstrainedOptimization](../ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Options](ICallbackNLOptimization.Options.htm)


		 Свойство Options определяет
		 параметры заданного пользовательского класса.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [GetConstraintPartialDeriv](ICallbackNLOptimization.GetConstraintPartialDeriv.htm)
		 Метод GetConstraintPartialDeriv
		 рассчитывает и возвращает в метод оптимизации значение частной
		 производной по j-ой
		 переменной от i-го
		 ограничения.


		 ![](../../Sub.gif)
		 [GetConstraintValue](ICallbackNLOptimization.GetConstraintValue.htm)
		 Метод GetConstraintValue
		 рассчитывает и возвращает значение i-го
		 нелинейного ограничения.


		 ![](../../Sub.gif)
		 [GetObjFunPartialDeriv](ICallbackNLOptimization.GetObjFunPartialDeriv.htm)
		 Метод GetObjFunPartialDeriv
		 рассчитывает и возвращает в метод оптимизации значение
		 частной производной целевой функции по j-ой
		 переменной.


		 ![](../../Sub.gif)
		 [GetObjFunValue](ICallbackNLOptimization.GetObjFunValue.htm)
		 Метод GetObjFunValue
		 рассчитывает и возвращает значение целевой функции.


		 ![](../../Sub.gif)
		 [SetArgValues](ICallbackNLOptimization.SetArgValues.htm)
		 Метод SetArgValues
		 возвращает значения переменных, для которых требуется рассчитать
		 значение целевой функции и нелинейных ограничений.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
