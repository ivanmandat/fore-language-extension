# IMsProblemCalculationProxy

IMsProblemCalculationProxy
-


# IMsProblemCalculationProxy


Сборка: Ms;


## Описание


Интерфейс IMsProblemCalculationProxy
 предназначен для задания параметров удалённого расчёта задачи моделирования.


## Иерархия наследования


           IMsProblemCalculation


           IMsProblemCalculationProxy


## Комментарии


Рассчитывается ли задача моделирования удаленно определяет свойство
 [IMsProblemCalculationSettings.RemoteCalc](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.RemoteCalc.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Address](IMsProblemCalculationProxy.Address.htm)
		 Свойство Address
		 определяет адрес BI-сервера, на котором выполняется удалённый
		 расчёт задачи моделирования.


## Свойства, унаследованные от [IMsProblemCalculation](../IMsProblemCalculation/IMsProblemCalculation.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregationGroup](../IMsProblemCalculation/IMsProblemCalculation.AggregationGroup.htm)
		 Свойство AggregationGroup
		 определяет группу элементов справочника, являющихся группой агрегации.


		 ![](../../Property_Image.gif)
		 [AggregationGroups](../IMsProblemCalculation/IMsProblemCalculation.AggregationGroups.htm)
		 Свойство AggregationGroups
		 возвращает объект, содержащий коллекцию групп агрегации.


		 ![](../../Property_Image.gif)
		 [Breakpoints](../IMsProblemCalculation/IMsProblemCalculation.Breakpoints.htm)
		 Свойство Breakpoints
		 возвращает коллекцию точек останова для расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [CalculationState](../IMsProblemCalculation/IMsProblemCalculation.CalculationState.htm)
		 Свойство CalculationState
		 возвращает текущее состояние расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [CalculationTree](../IMsProblemCalculation/IMsProblemCalculation.CalculationTree.htm)
		 Свойство CalculationTree возвращает
		 дерево расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [Callback](../IMsProblemCalculation/IMsProblemCalculation.Callback.htm)
		 Свойство Callback определяет
		 объект для обработки событий, происходящих во время расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [CopyFact](../IMsProblemCalculation/IMsProblemCalculation.CopyFact.htm)
		 Свойство CopyFact определяет
		 признак копирования данных идентификационного периода измерения
		 фактов в измерения по сценариям при выгрузке данных.


		 ![](../../Property_Image.gif)
		 [EnableArithmeticErrors](../IMsProblemCalculation/IMsProblemCalculation.EnableArithmeticErrors.htm)
		 Свойство EnableArithmeticErrors
		 определяет признак срабатывания события [OnError](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnError.htm)
		 при возникновении ошибок в арифметических операциях в процессе
		 расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [IsRemoteCalc](../IMsProblemCalculation/IMsProblemCalculation.IsRemoteCalc.htm)
		 Свойство IsRemoteCalc
		 возвращает признак удалённого расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) на BI-сервере.


		 ![](../../Property_Image.gif)
		 [MetaAttributeFilter](../IMsProblemCalculation/IMsProblemCalculation.MetaAttributeFilter.htm)
		 Свойство MetaAttributeFilter
		 возвращает объект, содержащий фильтр, применяемый при расчёте
		 [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [OverwriteSameValues](../IMsProblemCalculation/IMsProblemCalculation.OverwriteSameValues.htm)
		 Свойство OverwriteSameValues
		 определяет выгрузку результата в базу данных при расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [PointCount](../IMsProblemCalculation/IMsProblemCalculation.PointCount.htm)
		 Свойство PointCount
		 возвращает общее количество шагов, которые будут пройдены при
		 расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [PointPassed](../IMsProblemCalculation/IMsProblemCalculation.PointPassed.htm)
		 Свойство PointPassed
		 возвращает количество пройденных шагов при расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [SaveData](../IMsProblemCalculation/IMsProblemCalculation.SaveData.htm)
		 Свойство SaveData определяет
		 признак выгрузки данных в выходные переменные после завершения
		 расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [SaveHistory](../IMsProblemCalculation/IMsProblemCalculation.SaveHistory.htm)
		 Свойство SaveHistory
		 определяет признак сохранения истории расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [SaveHistoryMask](../IMsProblemCalculation/IMsProblemCalculation.SaveHistoryMask.htm)
		 Свойство SaveHistoryMask
		 определяет параметры ведения журнала расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [SaveZeros](../IMsProblemCalculation/IMsProblemCalculation.SaveZeros.htm)
		 Свойство SaveZeros
		 определяет признак выгрузки рассчитанных нулей в базу данных при
		 расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [Stats](../IMsProblemCalculation/IMsProblemCalculation.Stats.htm)
		 Свойство Stats
		 возвращает [статистики
		 расчёта](../IMsCalculationStats/IMsCalculationStats.htm) [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [TreatNullsAsZeros](../IMsProblemCalculation/IMsProblemCalculation.TreatNullsAsZeros.htm)
		 Свойство TreatNullsAsZeros
		 определяет признак замены пустых значений нулями при расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Property_Image.gif)
		 [UserData](../IMsProblemCalculation/IMsProblemCalculation.UserData.htm)
		 Свойство UserData возвращает
		 пользовательские данные, связанные с задачей моделирования.


		 ![](../../Property_Image.gif)
		 [VariableStub](../IMsProblemCalculation/IMsProblemCalculation.VariableStub.htm)
		 Свойство VariableStub
		 возвращает объект, позволяющий получить доступ к данным переменной
		 контейнера моделирования.


		 ![](../../Property_Image.gif)
		 [VariableStubs](../IMsProblemCalculation/IMsProblemCalculation.VariableStubs.htm)
		 Свойство VariableStubs
		 возвращает коллекцию переменных, данные которых используются при
		 расчёте [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Методы, унаследованные от [IMsProblemCalculation](../IMsProblemCalculation/IMsProblemCalculation.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateVariablesReport](../IMsProblemCalculation/IMsProblemCalculation.CreateVariablesReport.htm)
		 Метод CreateVariablesReport
		 создает отчёт по переменным для расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Sub_Image.gif)
		 [DoSaveData](../IMsProblemCalculation/IMsProblemCalculation.DoSaveData.htm)
		 Метод DoSaveData выгружает
		 данные в выходные переменные после завершения расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Sub_Image.gif)
		 [DoSaveHistory](../IMsProblemCalculation/IMsProblemCalculation.DoSaveHistory.htm)
		 Метод DoSaveHistory
		 сохраняет историю расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Sub_Image.gif)
		 [GetCalculatedPointsCount](../IMsProblemCalculation/IMsProblemCalculation.GetCalculatedPointsCount.htm)
		 Метод GetCalculatedPointsCount
		 возвращает [количество
		 ячеек в приёмнике данных](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm#change_points_count), изменённых в результате
		 выполнения формул из указанной метамодели.


		 ![](../../Sub_Image.gif)
		 [GetFormulaInfo](../IMsProblemCalculation/IMsProblemCalculation.GetFormulaInfo.htm)


		 Метод GetFormulaInfo
		 возвращает информацию о формулах, которые применялись для расчёта
		 [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) в заданной точке.


		 ![](../../Sub_Image.gif)
		 [Resume](../IMsProblemCalculation/IMsProblemCalculation.Resume.htm)
		 Метод Resume продолжает
		 выполнение расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) после приостановки процесса.


		 ![](../../Sub_Image.gif)
		 [Run](../IMsProblemCalculation/IMsProblemCalculation.Run.htm)
		 Метод Run запускает
		 расчёт [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


		 ![](../../Sub_Image.gif)
		 [StepDate](../IMsProblemCalculation/IMsProblemCalculation.StepDate.htm)
		 Метод StepDate выполняет
		 пошаговый расчёт [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) по точкам календарной динамики.


		 ![](../../Sub_Image.gif)
		 [StepInto](../IMsProblemCalculation/IMsProblemCalculation.StepInto.htm)
		 Метод StepInto выполняет
		 пошаговый расчёт [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) с заходом в циклы, ветвления
		 и вложенные метамодели.


		 ![](../../Sub_Image.gif)
		 [StepOver](../IMsProblemCalculation/IMsProblemCalculation.StepOver.htm)
		 Метод StepOver выполняет
		 пошаговый расчёт [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) без захода в циклы, ветвления
		 и вложенные метамодели.


		 ![](../../Sub_Image.gif)
		 [Stop](../IMsProblemCalculation/IMsProblemCalculation.Stop.htm)
		 Метод Stop прерывает
		 расчёт [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) в текущей точке.


		 ![](../../Sub_Image.gif)
		 [Suspend](../IMsProblemCalculation/IMsProblemCalculation.Suspend.htm)
		 Метод Suspend приостанавливает
		 процесс расчёта [задачи
		 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
