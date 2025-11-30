# IMsCalculationChainMetaModel.MetaModel

IMsCalculationChainMetaModel.MetaModel
-


# IMsCalculationChainMetaModel.MetaModel


## Синтаксис


		MetaModel: [IMsMetaModel](../IMsMetaModel/IMsMetaModel.htm);


## Описание


Свойство MetaModel возвращает
 метамодель, содержащуюся в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должны
 существовать две метамодели с идентификаторами BASE_MMODEL и ADD_MMODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Meta: IMsMetaModel;

		    New_Meta: IMsMetaModel;

		    CalculationChain: IMsCalculationChainMetaModel;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("BASE_MMODEL",MB.ItemById("CONT_MODEL").Key).Edit;

		    Meta := MObj As IMsMetaModel;

		    New_Meta := MB.ItemByIdNamespace("ADD_MMODEL",MB.ItemById("CONT_MODEL").Key).Bind As IMsMetaModel;

		    CalculationChain := Meta.CalculationChain.AddMetaModel(New_Meta);

		    Debug.WriteLine(CalculationChain.Name);

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в цепочку расчёта метамодели BASE_MMODEL
 будет добавлена метамодель ADD_MMODEL, а в окно консоли будет выведено
 её наименование.


См. также:


[IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
