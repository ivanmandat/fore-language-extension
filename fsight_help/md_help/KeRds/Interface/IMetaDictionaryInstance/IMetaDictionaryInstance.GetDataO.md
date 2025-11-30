# IMetaDictionaryInstance.GetDataO

IMetaDictionaryInstance.GetDataO
-


# IMetaDictionaryInstance.GetDataO


## Синтаксис


GetDataO(Element: Integer; [Options: [DictionaryGetDataOptions](../../Enums/DictionaryGetDataOptions.htm)
 = 0]): [IMetaDictionaryData](../IMetaDictionaryData/IMetaDictionaryData.htm);


## Параметры


Element - ключ элемента справочника.


Options - параметр получения
 данных. Необязательный параметр. Значение по умолчанию - [DictionaryGetDataOptions.None](../../Enums/DictionaryGetDataOptions.htm)
 - получение данных для чтения.


## Описание


Метод GetDataO возвращает данные
 базы данных временных рядов для заданного элемента с заданными параметрами.


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

	    ElKey: Integer;

	    DictInst: IMetaDictionaryInstance;

	    MDD: IMetaDictionaryData;

	    Rule: IMetaDataRule;

	Begin

	    Mb := MetabaseClass.Active;

	    RubD := Mb.ItemById("OBJ_FC");

	    RubrIn := RubD.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MDD := DictInst.GetDataO(0, DictionaryGetDataOptions.None);

	    If Not MDD.EvaluateRules(Rule) Then

	        Debug.WriteLine(Rule.Name);

	    End If;

	End Sub UserProc;


После выполнения примера для чтения будут получены данные показателя
 и на них будут проверены правила справочника показателей. Если какое-либо
 правило не выполняется, то в окно консоли будет выведено его наименование.


См. также:


[IMetaDictionaryInstance](IMetaDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
