# ISmExpressionProvider.Metabase

ISmExpressionProvider.Metabase
-


# ISmExpressionProvider.Metabase


## Синтаксис


Metabase: Object;


## Описание


Свойство Metabase определяет
 репозиторий, в котором будет происходить поиск пользовательского модуля,
 используемого в выражении.


## Комментарии


Данное свойство актуально для статистических методов, в которых можно
 задавать выражения:


	- [SmBoxConstrainedOptimization](../../Class/SmBoxConstrainedOptimization/SmBoxConstrainedOptimization.htm);


	- [SmNonLinearEquations](../../Class/SmNonLinearEquations/SmNonLinearEquations.htm);


	- [SmNonLinearLeastSquare](../../Class/SmNonLinearLeastSquare/SmNonLinearLeastSquare.htm);


	- [SmNonLinearOptimization](../../Class/SmNonLinearOptimization/SmNonLinearOptimization.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие модуля с идентификатором
 STAT_FUNC, содержащего пользовательскую функцию test.


Добавьте ссылки на системные сборки: Metabase, Stat.


	Sub UserProc;

	Var

	    sm: SmNonLinearEquations;

	    functions: array[2] Of string;

	    initvalues: array[2] Of double;

	    status: integer;

	    provider: ISmExpressionProvider;

	Begin

	    sm := New SmNonLinearEquations.Create;

	    provider := sm As ISmExpressionProvider;

	    // Получаем текущий репозиторий для поиска пользовательского модуля

	    provider.Metabase := MetabaseClass.Active;

	    // Задаем выражения уравнений

	    functions[0] := "y1+12.34-0.21*134";

	    // Передаем в выражение уравнения пользовательскую функцию

	    functions[1] := "STAT_FUNC.test(y1,y2)";

	    sm.Functions := functions;

	    initvalues[0] := 1;

	    initvalues[1] := 1;

	    // Определяем начальные приближения

	    sm.InitApproximation := initvalues;

	    // Определяем порядок коэффициентов

	    sm.CoefficientsOrder := "y1;y2";

	    // Проверяем на наличие ошибок

	    status := sm.Execute;

	    debug.WriteLine(status);

	    debug.WriteLine(sm.Errors);

	    If (status = 0) Then

	        debug.WriteLine(sm.Solution[0].tostring);

	        debug.WriteLine(sm.Solution[1].tostring);

	        debug.WriteLine(sm.FunctionValues[0].tostring);

	        debug.WriteLine(sm.FunctionValues[1].tostring);

	    End If;

	End Sub UserProc;


	// Пользовательская функция
	 test, размещенная в отдельном модуле с идентификатором STAT_FUNC

	Public Function test(x1, x2: double): double;

	Begin

	    Return x1 * (x2 - 1);

	End Function test;


После выполнения примера в окно консоли будут выведены результаты расчета.
 В выражениях для метода будет использована пользовательская функция.


См. также:


[ISmExpressionProvider](ISmExpressionProvider.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
