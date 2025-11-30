# IMsCalculationState.Coord

IMsCalculationState.Coord
-


# IMsCalculationState.Coord


## Синтаксис


		Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


## Описание


Свойство Coord
 возвращает параметры координаты в переменной, по которой производится
 расчёт в данном шаге.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать задача прогнозирования с идентификатором OBJ_PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    _prob: IMsProblem;

		    settings: IMsProblemCalculationSettings;

		    _calc: IMsProblemCalculation;

		    state: IMsCalculationState;

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
		 точка расчета: "+state.CurrentPoint.ToString);

		    Debug.WriteLine("Ключ
		 сценария: "+state.Scenario.ToString);

		    Debug.WriteLine("Модель: "+(state.Model
		 As IMetabaseObject).Name);

		    Debug.WriteLine("Количество
		 дополнительных измерений текущей переменной: "+state.Coord.Count.ToString);

		    Debug.WriteLine("=== Прерываем расчет ===");

		    _calc.Stop;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено количество
 дополнительных измерений текущей переменной и прочая информация о состоянии
 расчёта задачи моделирования. Например:


Module execution started


Инициализация расчета


Загрузка данных переменной "Экспорт (всего)"


Загрузка данных переменной "Промежуточные данные"


Загрузка данных переменной "Итоговые данные"


Расчёт задачи на дату 01.01.1981 по сценарию "Базовый"


Текущая точка расчета: 01.01.1981 00:00:00


Ключ сценария: 7063


Модель: Преобразование исходных данных в промежуточные


Количество дополнительных измерений текущей переменной:
 0


=== Прерываем расчет ===


Module execution finished


См. также:


[IMsCalculationState](IMsCalculationState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
