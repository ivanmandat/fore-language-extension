# IMsCalculationChainEntries.AddIterator

IMsCalculationChainEntries.AddIterator
-


# IMsCalculationChainEntries.AddIterator


## Синтаксис


		AddIterator(CycleName: String): [IMsCalculationChainIterator](../IMsCalculationChainIterator/IMsCalculationChainIterator.htm);


## Параметры


CycleName. Наименование добавляемого
 цикла.


## Описание


Метод AddIterator
 добавляет цикл в [цепочку
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором TABLE_DICTIONARY и контейнера моделирования
 с идентификатором MODELING_CONTAINER. В контейнере должна содержаться
 метамодель с идентификатором META_MODEL.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    pMetabase: IMetabase;

		    pModelSpace: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    pChain: IMsCalculationChainEntries;

		    pCycle: IMsCalculationChainIterator;

		    pDimInstance: IDimInstance;

		    pSelection: IDimSelection;

		    pParam: IMsModelParam;

		Begin

		    pMetabase := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    pModelSpace := pMetabase.ItemById("MODELING_CONTAINER");

		    // Получаем метамодель

		    pMetaModel := pMetabase.ItemByIdNamespace("META_MODEL", pModelSpace.Key).Edit As IMsMetaModel;

		    // Получаем цепочку расчёта метамодели

		    pChain := pMetaModel.CalculationChain;

		    pMetaModel.Params.Clear;

		    // Создаем параметр метамодели

		    pParam := pMetaModel.Params.Add;

		    pParam.Id := "PARAM_ITERATOP";

		    pParam.Name := "Циклический параметр";

		    // Привязываем параметр к табличному справочнику

		    pParam.LinkedObject := pMetabase.ItemById("TABLE_DICTIONARY");

		    // Создаем цикл в метамодели

		    pCycle := pChain.AddIterator("Цикл");

		    pDimInstance := pMetabase.ItemById("TABLE_DICTIONARY").Open(Null) As IDimInstance;

		    // Задаём отметку для расчёта цикла

		    pSelection := pDimInstance.CreateSelection;

		    pSelection.SelectAll;

		    pCycle.Selection := pSelection;

		    // Задаём параметр, используемый для расчёта цикла

		    pCycle.Parameter := pParam;

		    // Сохраняем изменения

		    (pMetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочку расчёта метамодели будет добавлен
 цикл с параметром. Расчёт цикла будет производиться по всем элементам
 справочника.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
