# IMsCalculationChainMetaModel.ResetMetaModel

IMsCalculationChainMetaModel.ResetMetaModel
-


# IMsCalculationChainMetaModel.ResetMetaModel


## Синтаксис


		ResetMetaModel;


## Описание


Метод ResetMetaModel обновляет
 метамодель в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Комментарии


Используйте метод, если изменились параметры модели в репозитории и
 теперь её необходимо обновить в цепочке расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие в репозитории
 контейнера моделирования с идентификатором MS. Данный контейнер должен
 содержать метамодель с идентификатором CALCULATIONCHAIN, содержащей в
 цепочке расчёта метамодель с идентификатором METAMODEL_CONVERT.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    msKey: Integer;

		    MetaModel: IMsMetaModel;

		    CalculationChain: IMsCalculationChainEntries;

		    ChainMetaModel: IMsCalculationChainMetaModel;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования, содержащего метамодель

		    msKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("CALCULATIONCHAIN", msKey).Edit As IMsMetaModel;

		    // Получаем цепочку расчёта метамодели

		    CalculationChain := MetaModel.CalculationChain;

		    // Находим по идентификатору метамодель в цепочке расчёта

		    ChainMetaModel := CalculationChain.FindById("METAMODEL_CONVERT") As IMsCalculationChainMetaModel;

		    // Обновляем найденную метамодель

		    ChainMetaModel.ResetMetaModel;

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочке расчёта будет обновлена метамодель
 METAMODEL_CONVERT.


См. также:


[IMsCalculationChainMetaModel](IMsCalculationChainMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
