# IMsCalculationChainModel.EditModel

IMsCalculationChainModel.EditModel
-


# IMsCalculationChainModel.EditModel


## Синтаксис


		EditModel: [IMsModel](../IMsModel/IMsModel.htm);


## Описание


Метод EditModel
 открывает модель для редактирования.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_M. В контейнере присутствует метамодель
 с идентификатором META_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    cm: IMetabaseObjectDescriptor;

		    MetaModel: IMsMetaModel;

		    ChainEntries: IMsCalculationChainEntries;

		    ChainModel: IMsCalculationChainModel;

		    Model: IMsModel;

		Begin

		    mb := MetabaseClass.Active;

		    cm := mb.ItemById("CONT_M");

		    MetaModel := mb.ItemByIdNamespace("META_MODEL",cm.Key).Edit As IMsMetaModel;

		    ChainEntries := MetaModel.CalculationChain;

		    ChainModel := ChainEntries.AddExclusiveModel;

		    Model := ChainModel.EditModel;

		    (Model As IMetabaseObject).Name := "Внутренняя модель";

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочку расчёта метамодели будет добавлена
 внутренняя модель, которой будет дано наименование «Внутренняя модель».


См. также:


[IMsCalculationChainModel](IMsCalculationChainModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
