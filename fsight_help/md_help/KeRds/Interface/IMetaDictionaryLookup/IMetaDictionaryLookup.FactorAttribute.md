# IMetaDictionaryLookup.FactorAttribute

IMetaDictionaryLookup.FactorAttribute
-


# IMetaDictionaryLookup.FactorAttribute


## Синтаксис


FactorAttribute: String;


## Описание


Свойство FactorAttribute определяет
 наименование атрибута, содержащего ключ показателя.


## Комментарии


Данное свойство используется вместе со свойством [WhereFactorKey](IMetaDictionaryLookup.WhereFactorKey.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. В данной базе должны присутствовать
 атрибуты показателя с идентификаторами COUNTRY и UNIT.


Добавьте ссылки на системные сборки: Metabase, Cube, Rds, Orm, Dimensions.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    Conditions: IOrmConditions;

	    Cond: IOrmCondition;

	    i: Integer;

	    Res: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MetaDLookup := DictInst.CreateLookup("");

	    Conditions := MetaDLookup.Where;

	    Cond := Conditions.Add;

	    Cond.AttributeName := "COUNTRY";

	    Cond.Value := 512;

	    MetaDLookup.FactorAttribute := "UNIT";

	    MetaDLookup.WhereFactorKey := 3436;

	    i := MetaDLookup.LookupKeys("FACTOR").Length;

	    Res := New Integer[i];

	    Res := MetaDLookup.LookupKeys("FACTOR");

	    For i := 0 To Res.Length - 1 Do

	        Debug.WriteLine(Res[i].ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены ключи показателей,
 соответствующих следующим условиям: значение атрибута «COUNTRIES» у показателя
 равняется «512», а значение атрибута «UNIT» - «3436».


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
