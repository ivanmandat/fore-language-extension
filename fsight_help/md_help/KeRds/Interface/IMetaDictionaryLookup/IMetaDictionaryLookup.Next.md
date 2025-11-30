# IMetaDictionaryLookup.Next

IMetaDictionaryLookup.Next
-


# IMetaDictionaryLookup.Next


## Синтаксис


Next;


## Описание


Метод Next осуществляет переход
 на следующую запись.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. В данной базе должен присутствовать
 атрибут показателя с идентификатором COUNTRY.


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

	    Current: IMetaDictionaryData;

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

	    MetaDLookup.Open(DictionaryCursorOptions.None);

	    While Not MetaDLookup.Eof Do

	        Current := MetaDLookup.Current;

	        Debug.WriteLine(Current.Record.Key.ToString);

	        MetaDLookup.Next;

	    End While;

	    MetaDLookup.Close;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены ключи записей,
 соответствующих следующему условию: значение атрибута «COUNTRIES» у показателя
 равняется «512».


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
