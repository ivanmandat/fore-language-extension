# IRubricatorDictionaryLookup.CurrentRevision

IRubricatorDictionaryLookup.CurrentRevision
-


# IRubricatorDictionaryLookup.CurrentRevision


## Синтаксис


CurrentRevision: [IRubricatorRevision](../IRubricatorRevision/IRubricatorRevision.htm);


## Описание


Свойство CurrentRevision определяет
 ревизию для редактирования.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен
 присутствовать атрибут показателя с идентификатором COUNTRIES.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Cond: IOrmCondition;

    i: Integer;

    key: Array Of integer;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "COUNTRIES";

    Cond.Value := 512;

    FactsLookup.CurrentRevision := RubrIn.OpenRevision("Новая ревизия");

    FactsLookup.CurrentRevision.Save;

    i := FactsLookup.LookupFactors.Length;

    key := New Integer[i];

    key := FactsLookup.LookupFactors;

End Sub UserProc;


После выполнения примера массив key будет содержать ключи показателей
 соответствующих следующему условию: значение атрибута COUNTRIES у показателя
 равняется 512.


См. также:


[IRubricatorDictionaryLookup](IRubricatorDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
