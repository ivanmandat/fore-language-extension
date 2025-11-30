# IMsCalculationChainEntry.Description

IMsCalculationChainEntry.Description
-


# IMsCalculationChainEntry.Description


## Синтаксис


		Description: String;


## Описание


Свойство Description определяет
 описание элемента [цепочки
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Комментарии


Для получения наименования элемента используйте свойство [IMsCalculationChainEntry.Name](IMsCalculationChainEntry.Name.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 METAMODEL_CONVERT.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Meta: IMsMetaModel;

		    CalcChain: IMsCalculationChainEntries;

		    i: Integer;

		    Entry: IMsCalculationChainEntry;

		Begin

		    mb := MetabaseClass.Active;

		    MsKey := mb.GetObjectKeyById("MS");

		    Meta := mb.ItemByIdNamespace("METAMODEL_CONVERT", MsKey).Edit As IMsMetaModel;

		    CalcChain := Meta.CalculationChain;

		    For i := 0 To CalcChain.Count - 1 Do

		        Entry := CalcChain.Item(i);

		        Entry.Description := Entry.Name + " (" + Entry.Key.ToString + ")";

		        Debug.WriteLine(Entry.Description);

		    End For;

		    (Meta As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для всех элементов цепочки расчёта метамодели
 будет сформировано описание, состоящее из имени и ключа элемента. Сформированные
 описания будут выведены в окно консоли.


См. также:


[IMsCalculationChainEntry](IMsCalculationChainEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
