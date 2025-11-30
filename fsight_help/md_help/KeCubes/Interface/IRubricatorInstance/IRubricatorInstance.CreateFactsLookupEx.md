# IRubricatorInstance.CreateFactsLookupEx

IRubricatorInstance.CreateFactsLookupEx
-


# IRubricatorInstance.CreateFactsLookupEx


## Синтаксис


CreateFactsLookupEx(ExcludeGroup: Boolean): [IRubricatorFactsLookup](../IRubricatorFactsLookup/IRubricatorFactsLookup.htm);


## Параметры


ExcludeGroup. Признак исключения
 из поиска фиктивных показателей.


## Описание


Метод CreateFactsLookupEx создает
 объект, осуществляющий поиск показателей с возможностью исключения фиктивных
 показателей.


## Комментарии


Если параметру ExcludeGroup
 установить значение True, то при
 поиске будут исключены фиктивные показатели (показатели, относящиеся к
 групповым атрибутам). Если параметру ExcludeGroup
 установить значение False, то
 метод CreateFactsLookupEx отработает
 также, как метод [CreateFactsLookup](IRubricatorInstance.CreateFactsLookup.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    Lookup: IRubricatorFactsLookup;

	    Factors: Array Of Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Lookup := RubInst.CreateFactsLookupEx(True);

	    Factors := Lookup.LookupFactors;

	    Debug.WriteLine("Найдено показателей: " + Factors.Length.ToString);

	End Sub UserProc;


При выполнении примера будет произведен поиск с исключением фиктивных
 показателей. Количество найденных показателей будет выведено в консоль
 среды разработки.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
