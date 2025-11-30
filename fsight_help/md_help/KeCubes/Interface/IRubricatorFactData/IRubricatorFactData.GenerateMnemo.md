# IRubricatorFactData.GenerateMnemo

IRubricatorFactData.GenerateMnemo
-


# IRubricatorFactData.GenerateMnemo


## Синтаксис


GenerateMnemo: String;


## Описание


Метод GenerateMnemo генерирует
 мнемонику показателя.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_MN.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    Loo: IRubricatorFactsLookup;

    i: Integer;

    Factors: Array Of Integer;

    FactD: IRubricatorFactData;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("FC_MN");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    Loo := RubrIn.CreateFactsLookup;

    Factors := Loo.LookupFactors;

    For i := 0 To Factors.Length - 1 Do

        FactD := RubrIn.GetFactData(Factors[i]);

        Debug.WriteLine(FactD.GenerateMnemo);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены сгенерированные
 мнемоники всех показателей в базе.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
