# IMetaDictionaryData.EvaluateRule

IMetaDictionaryData.EvaluateRule
-


# IMetaDictionaryData.EvaluateRule


## Синтаксис


EvaluateRule(Rule: [IMetaDataRule](../IMetaDataRule/IMetaDataRule.htm);
 Var AttributeName: String): Boolean;


## Параметры


Rule- проверяемое правило.


AttributeName - через данный
 параметр возвращается наименование атрибута, на котором основано правило.


## Описание


Метод EvaluateRule осуществляет
 проверку указанного правила справочника. Возвращает значение True
 - если правило выполняется. Если правило не выполняется, то через параметр
 AttributeName будет возвращен
 атрибут, на котором основано правило, метод EvaluateRules
 вернет значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. Для справочника показателей
 данной базы должны быть заданы правила.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    RubD: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MDD: IMetaDictionaryData;

	    Rule: IMetaDataRule;

	    Dict: IMetaDictionary;

	    Att: String;

	Begin

	    Mb := MetabaseClass.Active;

	    RubD := Mb.ItemById("OBJ_FC");

	    RubrIn := RubD.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MDD := DictInst.GetDataO(0);

	    Dict := DictInst.Dictionary;

	    Rule := Dict.DataRules.Item(0);

	    If Not MDD.EvaluateRule(Rule, Att) Then

	        Debug.WriteLine(Att);

	    End If;

	End Sub UserProc;


После выполнения примера на полученных данных показателя будет проверено
 первое правило справочника показателей. Если правило не выполняется, то
 в окно консоли будет выведено наименование атрибута, на котором оно основано.


См. также:


[IMetaDictionaryData](IMetaDictionaryData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
