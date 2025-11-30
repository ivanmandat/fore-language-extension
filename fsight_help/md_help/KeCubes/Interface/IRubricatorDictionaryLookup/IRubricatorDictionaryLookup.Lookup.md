# IRubricatorDictionaryLookup.Lookup

IRubricatorDictionaryLookup.Lookup
-


# IRubricatorDictionaryLookup.Lookup


## Синтаксис


Lookup: [IMetaDictionaryLookup](KeRds.chm::/Interface/IMetaDictionaryLookup/IMetaDictionaryLookup.htm);


## Описание


Свойство Lookup возвращает условие
 поиска.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB». В данной базе должен присутствовать
 атрибут временных рядов с идентификатором «COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Metabase, Orm, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Cond: IOrmCondition;

    Key: Array Of Integer;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("TSDB").Open(Null) As IRubricatorInstance;

    FactsLookup := RubrInst.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRY";

    Cond.Value := 512;

    FactsLookup.Open(DictionaryCursorOptions.None);

    Key := FactsLookup.LookupFactors;

    For Each i In Key Do

        Debug.WriteLine(i);

    End For;

End Sub UserProc;


При выполнении примера будет осуществлен поиск временных рядов по следующему
 условию: значение атрибута «COUNTRY» равняется «512». Ключи найденных
 временных рядов будут выведены в консоль среды разработки.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
