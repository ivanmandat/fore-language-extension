# IMsCalculationChainEntry.Excluded

IMsCalculationChainEntry.Excluded
-


# IMsCalculationChainEntry.Excluded


## Синтаксис


		Excluded: Boolean;


## Описание


Свойство Excluded определяет
 признак неиспользования элемента [цепочки](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
 в расчёте метамодели.


## Комментарии


Допустимые значения:


	- True. Элемент не участвует
	 в расчёте;


	- False. По умолчанию.
	 Элемент участвует в расчёте.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_CONT. В данном контейнере должна содержаться
 метамодель с идентификатором OBJ_META.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ContKey: Integer;

		    MModel: IMsMetaModel;

		    Parent: IMsCalculationChainEntries;

		    ChainEntry: IMsCalculationChainEntry;

		Begin

		    Mb := MetabaseClass.Active;

		    ContKey := Mb.GetObjectKeyById("OBJ_CONT");

		    MModel := Mb.ItemByIdNamespace("OBJ_META",ContKey).Edit As IMsMetaModel;

		    Parent := MModel.CalculationChain;

		    ChainEntry := Parent.Item(0);

		    ChainEntry.Excluded := True;

		    (MModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера первый элемент в цепочке метамодели
 будет исключён из расчёта.


См. также:


[IMsCalculationChainEntry](IMsCalculationChainEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
