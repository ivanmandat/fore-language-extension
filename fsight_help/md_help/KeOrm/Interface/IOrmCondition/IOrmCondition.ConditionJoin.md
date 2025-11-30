# IOrmCondition.ConditionJoin

IOrmCondition.ConditionJoin
-


# IOrmCondition.ConditionJoin


## Синтаксис


ConditionJoin: [OrmLogicalOperator](../../Enums/OrmLogicalOperator.htm);


## Описание


Свойство ConditionJoin определяет логический оператор, применяемый для объединения текущего условия с предыдущим.


## Комментарии


По умолчанию используется логическое И, т.е. ConditionJoin = OrmLogicalOperator.And_.


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных рядов с идентификатором «TSDB», содержащей целочисленный атрибут временных рядов с идентификаторами «COUNTRY». Для идентификации рядов в БД должны использоваться мнемоники.


Добавьте ссылки на системные сборки «Cubes», «Metabase», «Orm», «Rds».


			Sub UserConditionJoin;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Conds: IOrmConditions;

    Cond_1, Cond_2: IOrmCondition;

    Factors: Array;

    i: Integer;

    Factor: IRubricatorFactor;

    FactData: IRubricatorFactData;

Begin

    MB := MetabaseClass.Active;

    // Получаем экземпляр БД временных рядов
    RubrInst := MB.ItemById("TSDB").Open(Null) As IRubricatorInstance;

    // Создаем объект для поиска показателей
    FactsLookup := RubrInst.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Conds := MetaDLookup.Where;

    // Добавляем 1-е условие
    Cond_1 := Conds.Add;

    Cond_1.AttributeName := "COUNTRY";

    Cond_1.Value := 512;

    // Добавляем 2-е условие
    Cond_2 := Conds.Add;

    Cond_2.ConditionJoin := OrmLogicalOperator.Or_;

    Cond_2.AttributeName := "COUNTRY";

    Cond_2.Value := 914;

    // Выполняем поиск и выводим результаты в окно консоли
    FactsLookup.Open(DictionaryCursorOptions.None);

    Factors := FactsLookup.GetFactors;

    If Factors <> Null Then

        For i := 0 To Factors.Length - 1 Do

            Factor := Factors[i];

            FactData := Factor.FactData;

            Debug.WriteLine((i + 1).ToString + ". " + FactData.Mnemo);

        End For;

    End If;

    FactsLookup.Close;

End Sub UserConditionJoin;


После выполнения примера в окно консоли будут выведены мнемоники временных рядов, соответствующих условиям: значение атрибута «COUNTRY» равняется «512» или «914».


См. также:


[IOrmCondition](IOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
