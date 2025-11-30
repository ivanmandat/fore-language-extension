# IMsCalculationChainModel.IsExclusive

IMsCalculationChainModel.IsExclusive
-


# IMsCalculationChainModel.IsExclusive


## Синтаксис


		IsExclusive: Boolean;


## Описание


Свойство IsExclusive
 возвращает признак внутренности модели по отношению к [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Комментарии


Допустимые значения:


	- True. Модель является
	 внутренней;


	- False. Модель является
	 внешней.


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

		    i: Integer;

		Begin

		    mb := MetabaseClass.Active;

		    cm := mb.ItemById("CONT_M");

		    MetaModel := mb.ItemByIdNamespace("META_MODEL",cm.Key).Bind As IMsMetaModel;

		    ChainEntries := MetaModel.CalculationChain;

		    For i := 0 To ChainEntries.Count -1 Do

		        If ChainEntries.Item(i).Type = MsCalculationChainEntryType.Model Then

		            ChainModel := ChainEntries.Item(i) As IMsCalculationChainModel;

		            If ChainModel.IsExclusive Then

		                Debug.WriteLine(ChainModel.Name);

		            End If;

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименования
 внутренних моделей, входящих в цепочку расчёта.


См. также:


[IMsCalculationChainModel](IMsCalculationChainModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
