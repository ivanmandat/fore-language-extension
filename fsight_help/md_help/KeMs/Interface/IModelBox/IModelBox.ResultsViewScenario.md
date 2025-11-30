# IModelBox.ResultsViewScenario

IModelBox.ResultsViewScenario
-


# IModelBox.ResultsViewScenario


## Синтаксис


		ResultsViewScenario: Integer;


## Описание


Свойство ResultsViewScenario
 определяет ключ сценария, по которому рассчитывается модель.


## Комментарии


Для расчёта по сценарию «Факт»
 установите свойству значение «-1».


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- формы с расположенными на ней:


		- компонентом ModelBox с идентификатором
		 ModelBox1;


		- компонентом UiModel с идентификатором
		 UiModel11, являющимся источником данных для ModelBox1;


	- контейнера моделирования с идентификатором MODEL_SPACE, содержащего
	 задачу моделирования с идентификатором PROBLEM. Задача моделирования
	 должна содержать несколько сценариев и рассчитывать несколько моделей.


Добавьте ссылки на системные сборки: Metabase, Ms, Ui.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    ms: IMsModelSpace;

		    Problem: IMsProblem;

		    MetaModel: IMsMetaModel;

		    CalcChain: IMsCalculationChainEntries;

		    i: Integer;

		    CalcChainEntry: IMsCalculationChainEntry;

		    Scenarios: IMsProblemScenarios;

		    ScenKey: integer;

		    ScenTree: IMsScenarioTreeEntries;

		    ScenEntry: IMsScenarioTreeEntry;

		Begin

		    UiModel1.Active := False;

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MODEL_SPACE");

		    ms := MsObj.Bind As IMsModelSpace;

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("PROBLEM", MsObj.Key).Bind As IMsProblem;

		    // Получаем метамодель, рассчитываемую задачей

		    MetaModel := Problem.MetaModel;

		    // Получаем цепочку расчёта метамодели

		    CalcChain := MetaModel.CalculationChain;

		    // Получаем первую модель в цепочке расчёта

		    For i := 0 To CalcChain.Count - 1 Do

		        CalcChainEntry := CalcChain.Item(i);

		        If CalcChainEntry.Type = MsCalculationChainEntryType.Model Then

		            // Используем модель в качестве источника данных для UiModel1

		            UiModel1.Model := (CalcChainEntry As IMsCalculationChainModel).Model;

		            UiModel1.Active := True;

		            Break;

		        End If;

		    End For;

		    // Получаем сценарии, по которым рассчитывается задача моделирования

		    Scenarios := Problem.Scenarios;

		    // Получаем 2-й сценарий задачи моделирования

		    ScenKey := Scenarios.Item(1).InternalKey;

		    // Получаем ключ 2-го сценария

		    ScenTree := ms.ScenarioTree;

		    ScenEntry := ScenTree.FindByInternalKey(ScenKey);

		    // Указываем, что модель рассчитывается по 2-му сценарию

		    ModelBox1.ResultsViewScenario := ScenEntry.Key;

		    // Рассчитываем модель

		    ModelBox1.Execute;

		    // Сохраняем изменения

		    ModelBox1.SaveObject;

		End Sub UserProc;


В результате выполнения примера в компоненте ModelBox1
 будет отображена первая модель, рассчитываемая задачей моделирования.
 Для расчёта модели будет использоваться второй сценарий задачи моделирования.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
