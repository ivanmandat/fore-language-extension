# MDCalculationFormulaFunctionCall

MDCalculationFormulaFunctionCall
-


# MDCalculationFormulaFunctionCall


## Описание


Перечисление MDCalculationFormulaFunctionCall
 содержит виды функции, которые могут использоваться в формуле в качестве
 операнда. Более подробное описание функций представлено в разделе «[Специальные
 функции](UiNavObj.chm::/Cube/Work_Cube/UiMd_CubeWork_MultivariateAccount_Functions.htm)».


Используется следующими свойствами и методами:


	- [IMDCalculationFormulaFunctionCall.FunctionCall](../Interface/IMDCalculationFormulaFunctionCall/IMDCalculationFormulaFunctionCall.FunctionCall.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None.
		 Функция не задана.


		 17
		 Iif. Условный
		 оператор «Iif».


		 20
		 Nz. Функция
		 «Nz».


		 21
		 Power.
		 Функция «Power».


		 53
		 Min. Функция
		 «Min».


		 54
		 Max. Функция
		 «Max».


		 72
		 Shift.
		 Функция «Shift».


		 78
		 Abs. Функция
		 «Abs».


		 80
		 Trunc.
		 Функция «Trunc».


		 81
		 Round.
		 Функция «Round».


		 88
		 Check.
		 Функция «Check».


		 89
		 MMin.
		 Функция «MMin».


		 90
		 MMax.
		 Функция «MMax».


		 91
		 Exp. Функция
		 «Exp».


		 92
		 Ln. Функция
		 «Ln».


		 93
		 NoData.
		 Функция «NoData».


		 94
		 MAvg.
		 Функция «MAvg».


		 95
		 IsNull.
		 Функция «IsNull».


		 96
		 Dmin. Функция «Dmin».


		 97
		 Dmax. Функция
		 «Dmax».


		 98
		 Dmedian. Функция «Dmedian».


		 99
		 DSum. Функция «DSum».


		 100
		 DCnt. Функция «DCnt».


		 101
		 DCntD. Функция «DCntD».


		 102
		 DAvg. Функция «DAvg».


## Комментарии


Ограничения по использованию функций:


	- работа со множествами поддерживается для СУБД Microsoft SQL
	 Server и Oracle;


	- если координаты куба источника, используемые в качестве параметров
	 в функциях по работе со множествами, являются вычислимыми, т.е. для
	 них заданы формулы в многомерном расчете, в котором используется флажок
	 «Учитывать зависимость формул друг
	 от друга», то результатом функции со множеством будет «0».


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)
 | [Специальные
 функции](UiNavObj.chm::/Cube/Work_Cube/UiMd_CubeWork_MultivariateAccount_Functions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
