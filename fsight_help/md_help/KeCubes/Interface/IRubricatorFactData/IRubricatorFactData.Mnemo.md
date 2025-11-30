# IRubricatorFactData.Mnemo

IRubricatorFactData.Mnemo
-


# IRubricatorFactData.Mnemo


## Синтаксис


Mnemo: String;


## Описание


Свойство Mnemo определяет мнемонику временного ряда.


## Комментарии


Если в базе данных временных рядов не используются мнемоники, т.е. [IRubricator.HasMnemonics](../IRubricator/IRubricator.HasMnemonics.htm) установлено в False, то при получении Mnemo возвращает пустое значение, при установке - задаваемое значение игнорируется.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «OBJ_FC». Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    Rub: IRubricator;

    RubrIn: IRubricatorInstance;

    Loo: IRubricatorFactsLookup;

    i: Integer;

    Factors: Array Of Integer;

    FactD: IRubricatorFactData;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_FC");

    Rub := RubDesc.Bind As IRubricator;

    If Rub.HasMnemonics Then

        RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

        Loo := RubrIn.CreateFactsLookup;

        Factors := Loo.LookupFactors;

        For i := 0 To Factors.Length - 1 Do

            FactD := RubrIn.GetFactData(Factors[i]);

            Debug.WriteLine(FactD.Mnemo);

        End For;

    Else

        Debug.WriteLine("Мнемоники не используются");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены мнемоники всех показателей в базе.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
