# IRubricatorDictionaryLookup.GetFactors

IRubricatorDictionaryLookup.GetFactors
-


# IRubricatorDictionaryLookup.GetFactors


## Синтаксис


GetFactors: Array;


## Описание


Метод GetFactors возвращает
 найденные временные ряды.


## Комментарии


Для получения массива ключей найденных временных рядов используйте метод
 [IRubricatorDictionaryLookup.LookupFactors](IRubricatorDictionaryLookup.LookupFactors.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    Factors: Array;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    f: IRubricatorFactor;

    Record: IRubricatorRecord;

    a: Array;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("TSDB");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    FactsLookup.WhereFactorKey := 151515;

    FactsLookup.WhereRevisionKey := -1;

    FactsLookup.Open(DictionaryCursorOptions.None);

    Factors := FactsLookup.GetFactors;

    If Factors <> Null Then

        f := Factors[0];

        Record := f.FactData As IRubricatorRecord;

        a := Record.Record.Value As Array;

        If a <> Null Then

            For i := 0 To a.Length - 1 Do

                Debug.WriteLine(a[i] As String);

            End For;

        End If;

    End If;

End Sub UserProc;


Результат выполнения примера: выполнен поиск временного ряда с ключом
 «151515» по последней ревизии. Если временной ряд найден, то в окно консоли
 выведена запись, содержащая информацию о нём.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
