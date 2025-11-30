# IMsCalculationState.CurrentPoint

IMsCalculationState.CurrentPoint
-


# IMsCalculationState.CurrentPoint


## Синтаксис


		CurrentPoint: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство CurrentPoint
 возвращает текущую календарную точку шага расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать задача прогнозирования с идентификатором OBJ_PROBLEM.


Добавьте ссылки на системные сборки: Matrix, Metabase, Ms.


					Sub UserProc;


		Var

		    mb: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    _prob: IMsProblem;

		    settings: IMsProblemCalculationSettings;

		    _calc: IMsProblemCalculation;

		    state: IMsCalculationState;

		    slice: IMsFormulaTransformSlice;

		    ds: IMatrixDataSource;

		    mt: IMatrix;

		    iter: IMatrixIterator;

		    TrVar: IMsFormulaTransformVariable;

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

		    Debug.WriteLine("Текущая
		 точка расчета: " + state.CurrentPoint.ToString);

		    Debug.WriteLine("Ключ
		 сценария: " + state.Scenario.ToString);

		    Debug.WriteLine("Модель:" + (state.Model As IMetabaseObject).Name);

		    TrVar := state.Model.Transform.Outputs.Item(0);

		    slice := TrVar.Slices.Item(0);

		    ds := state.Data(slice);

		    mt := ds.Execute(Null);

		    Debug.WriteLine("Текущие
		 значения выходной переменной '" + TrVar.Name+"'");

		    Iter := mt.CreateIterator;

		    Iter.Move(IteratorDirection.First);

		    While Iter.Valid Do

		        Debug.WriteLine("" + Iter.Value);

		        Iter.Move(IteratorDirection.Next);

		    End While;

		    Debug.WriteLine("=== Прерываем расчет ===");

		    _calc.Stop;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о пошаговом расчёте задачи:


	- описание сделанных шагов расчёта;


	- текущая календарная точка;


	- наименование рассчитываемой модели;


	- рассчитанные данные выходной переменной;


	- ключ сценария.


После расчёта первой календарной точки вычисление задачи будет прервано.


Например:


Module execution started


Инициализация расчета


Загрузка данных переменной "Экспорт (всего)"


Загрузка данных переменной "Промежуточные данные"


Загрузка данных переменной "Итоговые данные"


Расчёт задачи на дату 01.01.1981 по сценарию "Базовый"


Текущая точка расчета: 01.01.1981 00:00:00


Ключ сценария: 7063


Модель: Преобразование исходных данных в промежуточные


Текущие значения выходной переменной 'Промежуточные
 данные'


 2


=== Прерываем расчет ===


Module execution finished


См. также:


[IMsCalculationState](IMsCalculationState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
