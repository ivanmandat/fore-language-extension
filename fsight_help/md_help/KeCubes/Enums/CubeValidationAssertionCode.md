# CubeValidationAssertionCode

CubeValidationAssertionCode
-


# CubeValidationAssertionCode


## Описание


Перечисление CubeValidationAssertionCode содержит
 коды нарушений структуры метаданных куба.


Используется следующими свойствами и методами:


	- [ICubeValidationAssertion.Code](../Interface/ICubeValidationAssertion/ICubeValidationAssertion.Code.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет нарушений.


		 1
		 CalcCubeAltSourceDimsMismatch.
		 Набор измерений куба и его альтернативного источника не совпадают.


		 2
		 CalcCubeSourceDimNoPK.
		 Отсутствует первичный ключ у свободного измерения куба-источника.


		 3
		 CalcCubeDimNoPK. Отсутствует
		 первичный ключ у свободного измерения куба-назначения.


		 4
		 CalcCubeSourceHasFixedDimButCubeNot.
		 Измерение куба-источника зафиксировано, но оно отсутствует в кубе-назначения.
		 Добавьте измерение в куб-назначения.


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
