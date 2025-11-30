# IMetaDataRules.Add

IMetaDataRules.Add
-


# IMetaDataRules.Add


## Синтаксис


Add: [IMetaDataRule](../IMetaDataRule/IMetaDataRule.htm);


## Описание


Метод Add осуществляет добавление
 нового правила в коллекцию.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_FC. В данной базе предполагается наличие атрибутов
 «COUNTRY» и «INDICATOR».


Добавьте ссылки на системные сборки Metabase, Cubes, Orm, Rds.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rub: IRubricator;

	    Dict: IMetaDictionary;

	    MetaDataRules: IMetaDataRules;

	    MetaDataRule: IMetaDataRule;

	    Conditions: IOrmConditions;

	    Condition: IOrmCondition;

	    i: Integer;

	    x: array Of Variant;

	Begin

	    Mb := MetabaseClass.Active;

	    Rub := Mb.ItemById("OBJ_FC").Bind As IRubricator;

	    Dict := (Rub.Facts As IMetabaseObject).Edit As IMetaDictionary;

	    MetaDataRules := Dict.DataRules;

	    //Удаление всех имеющихся правил

	    For i := MetaDataRules.Count - 1 To 0 Step - 1 Do

	        MetaDataRules.Remove(MetaDataRules.Item(i));

	    End For;

	    //Создание нового правила

	    MetaDataRule := MetaDataRules.Add;

	    //Создание условий словий отбора показателей, для которых необходимо проверить условия правила

	    //Условие: Для указанных страны указан один из указанных показателей

	    Conditions := MetaDataRule.Condition;

	    Condition := Conditions.Add;

	    Condition.AttributeName := "COUNTRY";

	    Condition.Operator_ := OrmComparisonOperator.In_;

	    x := New Variant[2];

	    x[0] := 976;

	    x[1] := 979;

	    Condition.Value := x;


	    Condition := Conditions.Add;

	    Condition.AttributeName := "INDICATOR";

	    Condition.Operator_ := OrmComparisonOperator.In_;

	    x := New Variant[2];

	    x[0] := 1035;

	    x[1] := 1036;

	    Condition.Value := x;

	    Condition.ConditionJoin := OrmLogicalOperator.And_;


	    //Условия правила, проверяемые для показателей

	    //Условие: Соответствие единиц измерения по показателю одному из указанных значений

	    Conditions := MetaDataRule.Rule;

	    Condition := Conditions.Add;

	    Condition.AttributeName := "UNIT";

	    Condition.Operator_ := OrmComparisonOperator.Equal;

	    Condition.Value := 3430;


	    Condition := Conditions.Add;

	    Condition.AttributeName := "UNIT";

	    Condition.Operator_ := OrmComparisonOperator.Equal;

	    Condition.Value := 3530;

	    Condition.ConditionJoin := OrmLogicalOperator.Or_;


	    (Dict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для справочника показателей базы данных временных
 рядов с идентификатором OBJ_FC будет создано правило. Правило будет проверяться
 следующим образом:


	- Правило будет проверяться для показателей, у которых задан один
	 из указанных ключей страны и один из указанных ключей показателей
	 (для стран с ключом 976 или 979 должен быть указан индикатор 1035
	 или 1036).


	- У показателя, для которого проверяется правило, в качестве единицы
	 измерения должна быть установлена единица измерения с одним из указанных
	 ключей (3430 или 3530).


См.также:


[IMetaDataRules](IMetaDataRules.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
