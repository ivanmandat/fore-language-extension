# IRubricatorDictionaryLookup.WhereRevisionBetween

IRubricatorDictionaryLookup.WhereRevisionBetween
-


# IRubricatorDictionaryLookup.WhereRevisionBetween


## Синтаксис


WhereRevisionBetween(First: Integer; Last: Integer);


## Параметры


First. Ключ первой ревизии;


Last. Ключ последней ревизии.


## Описание


Метод WhereRevisionBetween осуществляет
 поиск показателей, измененных между двумя ревизиями.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    Factors: Array;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    Factor: IRubricatorFactor;

    Record: IRubricatorRecord;

    a: Array;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    FactsLookup.WhereFactorKey := 12195998;

    FactsLookup.WhereRevisionBetween(1, 13);

    Factors := FactsLookup.GetFactors;

    If Factors <> Null Then

        Factor := Factors[0];

        Record := Factor.FactData As IRubricatorRecord;

        a := Record.Record.Value As Array;

        If a <> Null Then

            For i := 0 To a.Length - 1 Do

                Debug.WriteLine(a[i] As String);

            End For;

        End If;

    End If;

End Sub UserProc;


После выполнения примера будет проведен поиск показателя с ключом 12195998,
 измененного между первой и тринадцатой ревизией. Если показатель будет
 найден, то в окно консоли будет выведена запись, содержащая информацию
 о показателе.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
