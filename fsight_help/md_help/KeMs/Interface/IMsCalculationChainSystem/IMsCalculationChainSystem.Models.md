# IMsCalculationChainSystem.Models

IMsCalculationChainSystem.Models
-


# IMsCalculationChainSystem.Models


## Синтаксис


		Models: [IMsCalculationChainEntries](../IMsCalculationChainEntries/IMsCalculationChainEntries.htm);


## Описание


Свойство Models возвращает
 модели, входящие в систему уравнений.


## Комментарии


Для добавления модели в систему используйте метод [IMsCalculationChainSystem.AddModel](IMsCalculationChainSystem.AddModel.htm),
 для удаления модели из системы - метод [IMsCalculationChainSystem.RemoveModel](IMsCalculationChainSystem.RemoveModel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего задачу моделирования
 с идентификатором PROBLEM и метамодель с идентификатором METAMODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub ArrangeModels;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Problem: IMsProblem;

		    Meta: IMsMetaModel;

		    CalcChain, Models: IMsCalculationChainEntries;

		    ChainEntry, Model: IMsCalculationChainEntry;

		    i, j: Integer;

		    CalcSystem: IMsCalculationChainSystem;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MODEL_SPACE");

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("PROBLEM", MsObj.Key).Edit As IMsProblem;

		    // Получаем метамодель

		    //Meta := Problem.MetaModel;

		    Meta := mb.ItemByIdNamespace("METAMODEL", MsObj.Key).Edit As IMsMetaModel;

		    CalcChain := Meta.CalculationChain;

		    // Выполняем автоматическое построение цепочки расчёта

		    CalcChain.ArrangeModels(MsArrangeMode.CreateSystems, Problem);

		    // Если в результате автоматического построения была создана

		    // система уравнений, то выводим в окно консоли наименование моделей,

		    // включенных в систему уравнений

		    For i := 0 To CalcChain.Count - 1 Do

		        ChainEntry := CalcChain.Item(i);

		        If ChainEntry.Type = MsCalculationChainEntryType.System Then

		            CalcSystem := ChainEntry As IMsCalculationChainSystem;

		            Models := CalcSystem.Models;

		            For j := 0 To Models.Count - 1 Do

		                Model := Models.Item(j);

		                Debug.WriteLine(Model.Name);

		            End For;

		        End If;

		    End For;

		    // Сохраняем изменения

		    (Meta As IMetabaseObject).Save;

		    (Problem As IMetabaseObject).Save;

		End Sub ArrangeModels;


В результате выполнения примера для метамодели METAMODEL будет выполнено
 автоматическое построение цепочки расчёта. Если в результате была создана
 система уравнений, то в окно консоли будут выведены наименования моделей,
 входящих в систему. Периоды расчёта системы будут взяты из задачи PROBLEM.


См. также:


[IMsCalculation](IMsCalculationChainSystem.htm)[ChainSystem](IMsCalculationChainSystem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
