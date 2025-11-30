# IOrmCondition.JoinAttributeName

IOrmCondition.JoinAttributeName
-


# IOrmCondition.JoinAttributeName


## Синтаксис


JoinAttributeName: String;


## Описание


Свойство JoinAttributeName определяет идентификатор связанного атрибута.


## Комментарии


Свойство актуально, если [IOrmCondition.Operator_](IOrmCondition.Operator_.htm) принимает следующие значения:


-
[OrmComparisonOperator.JoinEqual](../../Enums/OrmComparisonOperator.htm);


-
[OrmComparisonOperator.JoinGreater](../../Enums/OrmComparisonOperator.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных рядов с идентификатором «TSDB». В данной БД должны присутствовать целочисленные атрибуты временных рядов с идентификаторами: «COUNTRY», «PERFORMANCE», «TARGET».


Добавьте ссылки на системные сборки «Cubes», «Metabase», «Orm», «Rds»,


			Sub UserCond;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    DictInst: IMetaDictionaryInstance;

    MetaDLookup: IMetaDictionaryLookup;

    Conditions: IOrmConditions;

    Cond: IOrmCondition;

    Current: IMetaDictionaryData;

Begin

    // Получаем БД временных рядов
    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("TSDB");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    // Получаем справочник временных рядов
    DictInst := RubrIn.Facts;

    // Создаем объект для поиска в справочнике
    MetaDLookup := DictInst.CreateLookup("");

    // Задаем условия поиска
    Conditions := MetaDLookup.Where;

    // Условие 1: значение атрибута COUNTRY=512
    Cond := Conditions.Add;

    Cond.AttributeName := "COUNTRY";

    Cond.Value := 512;

    // Условие 2 (вложенное): значение атрибута PERFORMANCE
    // должно быть больше значения атрибута TARGET
    Cond := Conditions.Add;

    Cond.Operator_ := OrmComparisonOperator.Conditions;

    Conditions := Cond.Nested;

    Cond := Conditions.Add;

    Cond.AttributeName := "PERFORMANCE";

    Cond.Operator_ := OrmComparisonOperator.JoinGreater;

    Cond.JoinAttributeName := "TARGET";

    // Выполняем поиск и выводим результаты в окно консоли
    MetaDLookup.Open(DictionaryCursorOptions.None);

    While Not MetaDLookup.Eof Do

        Current := MetaDLookup.Current;

        Debug.WriteLine(Current.Record.Key.ToString);

        MetaDLookup.Next;

    End While;

    MetaDLookup.Close;

End Sub UserCond;


После выполнения примера в окно консоли будут выведены ключи временных рядов, соответствующих условиям: значение атрибута «COUNTRY» равняется «512», а значение атрибута «PERFORMANCE» больше значения атрибута «TARGET».


См. также:


[IOrmCondition](IOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
