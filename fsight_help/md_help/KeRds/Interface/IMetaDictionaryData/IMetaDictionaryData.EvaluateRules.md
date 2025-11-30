# IMetaDictionaryData.EvaluateRules

IMetaDictionaryData.EvaluateRules
-


# IMetaDictionaryData.EvaluateRules


## Синтаксис


EvaluateRules(Var
 Rule: [IMetaDataRule](../IMetaDataRule/IMetaDataRule.htm)):
 Boolean;


## Параметры


Rule - через данный параметр
 возвращается правило, которое не выполняется.


## Описание


Метод EvaluateRules осуществляет
 проверку всех правил справочника. Возвращает значение True
 - если все правила выполняются. Если какое-либо правило не выполняется,
 то оно будет возвращено через параметр Rule,
 метод EvaluateRules вернет значение
 False.


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

	Begin

	    Mb := MetabaseClass.Active;

	    RubD := Mb.ItemById("OBJ_FC");

	    RubrIn := RubD.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MDD := DictInst.GetDataO(0);

	    If Not MDD.EvaluateRules(Rule) Then

	        Debug.WriteLine(Rule.Name);

	    End If;

	End Sub Userproc;


После выполнения примера на полученных данных показателя будут проверены
 правила справочника показателей. Если какое-либо правило не выполняется,
 то в окно консоли будет выведено его наименование.


См. также:


[IMetaDictionaryData](IMetaDictionaryData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
