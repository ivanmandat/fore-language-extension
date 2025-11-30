# IRubricatorDictionaryLookup.LookupFactorsC

IRubricatorDictionaryLookup.LookupFactorsC
-


# IRubricatorDictionaryLookup.LookupFactorsC


## Синтаксис


LookupFactorsC: Array;


## Описание


Метод LookupFactors возвращает
 массив составных ключей найденных временных рядов.


## Комментарии


Составной ключ искомого временного ряда определяет свойство [IRubricatorDictionaryLookup.WhereCompoundFactorKey](IRubricatorDictionaryLookup.WhereCompoundFactorKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «RUBRICATOR_CUBE». Добавьте ссылки на
 системные сборки: Metabase, Cubes.


			Sub UserProc;

Var

    mb: IMetabase;

    RubI: IRubricatorInstance;

    pFactsLookup: IRubricatorFactsLookup;

    CompKey: Array[2];

    Key, arr: Array Of Variant;

    i, idx: Integer;

    s: String;

Begin

    mb := MetabaseClass.Active;

    RubI := mb.ItemById("RUBRICATOR_CUBE").Open(Null) As IRubricatorInstance;

    pFactsLookup := RubI.CreateFactsLookup;

    CompKey[0] := 512; CompKey[1] := 1009;

    pFactsLookup.WhereCompoundFactorKey := CompKey;

    If pFactsLookup.LookupFactorsC <> Null Then

        i := pFactsLookup.LookupFactorsC.Length;

    Debug.WriteLine("Найдено: " + i.ToString);

        Key := New Variant[i];

        Key := pFactsLookup.LookupFactorsC;

        For i := 0 To Key.Length - 1 Do

            arr := Key[i] As Array Of Variant;

            s := "";

            For idx := 0 To arr.Length - 1 Do

                s := s + (arr[idx] As string) + "; ";

            End For;

            Debug.WriteLine(s);

        End For;

    End If;

End Sub UserProc;


Результат выполнения примера: в базе данных временных рядов выполнен
 поиск по значениям составного ключа, результаты поиска выведены в окно
 консоли.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
