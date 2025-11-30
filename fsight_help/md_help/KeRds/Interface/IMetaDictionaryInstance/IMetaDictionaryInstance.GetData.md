# IMetaDictionaryInstance.GetData

IMetaDictionaryInstance.GetData
-


# IMetaDictionaryInstance.GetData


## Синтаксис


GetData(Element: Integer; [bEdit: Boolean = False]): [IMetaDictionaryData](../IMetaDictionaryData/IMetaDictionaryData.htm);


## Параметры


Element - ключ элемента справочника.


bEdit - параметр получения
 данных. Необязательный параметр. Значение по умолчанию - False
 - получение данных для чтения.


## Описание


Метод GetData возвращает данные
 базы данных временных рядов для заданного элемента.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. Для справочника показателей
 данной базы должны быть заданы правила.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub Userproc;

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

	    MDD := DictInst.GetData(0);

	    If Not MDD.EvaluateRules(Rule) Then

	        Debug.WriteLine(Rule.Name);

	    End If;

	End Sub UserProc;


После выполнения примера на полученных данных показателя будут проверены
 правила справочника показателей. Если какое-либо правило не выполняется,
 то в окно консоли будет выведено его наименование.


См. также:


[IMetaDictionaryInstance](IMetaDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
