# IMsCalculationChainEntry.MoveToParent

IMsCalculationChainEntry.MoveToParent
-


# IMsCalculationChainEntry.MoveToParent


## Синтаксис


		MoveToParent(Parent: [IMsCalculationChainEntries](../IMsCalculationChainEntries/IMsCalculationChainEntries.htm);
		 Index: Integer);


## Параметры


Parent. Родительская коллекция
 элементов, в которой необходимо переместить элемент;


Index. Позиция, в которую необходимо
 переместить элемент.


## Описание


Метод MoveToParent
 перемещает элемент [цепочки
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


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

		    ChainEntry := Parent.Item(Parent.Count- 1);

		    ChainEntry.MoveToParent(Parent,0);

		    (MModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера последний элемент в цепочке расчёта
 метамодели будет перемещен в начальную позицию.


См. также:


[IMsCalculationChainEntry](IMsCalculationChainEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
