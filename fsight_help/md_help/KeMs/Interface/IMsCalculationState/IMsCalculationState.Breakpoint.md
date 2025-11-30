# IMsCalculationState.Breakpoint

IMsCalculationState.Breakpoint
-


# IMsCalculationState.Breakpoint


## Синтаксис


		Breakpoint: [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm);


## Описание


Свойство Breakpoint
 возвращает точку останова для задачи трансформации.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать задача трансформации с идентификатором OBJ_PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    _prob: IMsProblem;

		    settings: IMsProblemCalculationSettings;

		    _calc: IMsProblemCalculation;

		    state: IMsCalculationState;

		    Point: IMsBreakpoint;

		Begin

		    mb := MetabaseClass.Active;

		    pModelSpace := mb.ItemById("CONT_MODEL");

		    _prob := mb.ItemByIdNamespace("OBJ_PROBLEM",pModelSpace.Key).Bind As IMsProblem;

		    settings := _prob.CreateCalculationSettings;

		    _calc := _prob.Calculate(settings);

		    Repeat

		        _calc.StepOver;

		        state := _calc.CalculationState;

		        Debug.WriteLine(state.Message);

		    Until state.Model <> Null;

		    Point := state.Breakpoint;

		    If Point <> Null Then

		        Debug.WriteLine("Контрольная точка доступна: "+Point.Enable.ToString);

		        Debug.WriteLine("Ключ контрольной точки: "+Point.Key.ToString);

		        Debug.WriteLine("Наименование контрольной точки: "+Point.Name);

		        Debug.WriteLine("=== Прерываем расчет ===");

		    End If;

		    _calc.Stop;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о точке останова, если она установлена для текущего шага расчёта.


См. также:


[IMsCalculationState](IMsCalculationState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
