# IMsPooledModelTransform.ARMACoefficients

IMsPooledModelTransform.ARMACoefficients
-


# IMsPooledModelTransform.ARMACoefficients


## Синтаксис


ARMACoefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [ISlARMA](StatLib.chm::/Interface/ISlARMA/ISlARMA.htm);


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство ARMACoefficients
 возвращает оцененные коэффициенты авторегрессии и скользящего среднего.


## Комментарии


Coord не может принимать значение
 Null.


Коэффициенты могут быть оценены, если они использовались в модели. Задать
 параметры авторегрессии и скользящего среднего позволяет свойство [IMsPooledModelTransform.ARMA](IMsPooledModelTransform.ARMA.htm).


## Пример


Использование свойства приведено в примере для [IMsPooledModelTransform.Coefficients](IMsPooledModelTransform.Coefficients.htm).


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
