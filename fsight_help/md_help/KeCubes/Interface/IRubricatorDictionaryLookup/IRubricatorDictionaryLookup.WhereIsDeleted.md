# IRubricatorDictionaryLookup.WhereIsDeleted

IRubricatorDictionaryLookup.WhereIsDeleted
-


# IRubricatorDictionaryLookup.WhereIsDeleted


## Синтаксис


WhereIsDeleted: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsDeleted определяет,
 участвуют ли в поиске удаленные записи.


## Комментарии


Допустимые значения:


	- TriState.OnOption. Поиск производится только среди
	 удаленных записей;


	- TriState.OffOption. Поиск производится только среди
	 не удаленных записей;


	- TriState.Undefined. Поиск производится по всем записям.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    Factors: Array Of Integer;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    FactsLookup.WhereIsDeleted := TriState.OnOption;

    Factors := FactsLookup.LookupFactors;

    For i := 0 To Factors.Length - 1 Do

        Debug.WriteLine(Factors[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены ключи удаленных
 показателей.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
