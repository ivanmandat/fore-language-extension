# IMsPooledModelTransform.IsCoefficientsSaved

IMsPooledModelTransform.IsCoefficientsSaved
-


# IMsPooledModelTransform.IsCoefficientsSaved


## Синтаксис


IsCoefficientsSaved(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Boolean;


## Параметры


Coord. Срез моделируемой переменной,
 для которого возвращается признак того, сохранены ли коэффициенты модели.


## Описание


Свойство IsCoefficientsSaved возвращает
 признак того, сохранены ли коэффициенты модели.


## Комментарии


Coord не может принимать значение
 Null.


Допустимые значения:


	- True. Коэффициенты сохранены;


	- False. Коэффициенты
	 не сохранены. Значение по умолчанию.


Для их сохранения используйте свойство [IMsPooledModelTransform.Coefficients](IMsPooledModelTransform.Coefficients.htm).


## Пример


Использование свойства приведено в примере для [IMsPooledModelTransform.Coefficients](IMsPooledModelTransform.Coefficients.htm).


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
