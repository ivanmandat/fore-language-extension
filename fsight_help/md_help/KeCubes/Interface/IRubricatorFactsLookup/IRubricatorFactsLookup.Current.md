# IRubricatorFactsLookup.Current

IRubricatorFactsLookup.Current
-


# IRubricatorFactsLookup.Current


## Синтаксис


Current: [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);


## Описание


Свойство Current возвращает
 текущую запись в массиве найденных показателей.


## Комментарии


Перед получением текущей записи необходимо вызвать метод [IRubricatorFactsLookup.Open](IRubricatorFactsLookup.Open.htm), т.е. открыть
 курсор, позволяющий перемещаться в массиве найденных данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_COMM. В данной базе должен присутствовать
 атрибут показателя с идентификатором COUNTRY.


Добавьте ссылки на системные сборки: Cubes, Metabase, Orm, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubrInst: IRubricatorInstance;

	    FactsLookup: IRubricatorFactsLookup;

	    MetaDLookup: IMetaDictionaryLookup;

	    Cond: IOrmCondition;

	    FactData: IRubricatorFactData;

	    i: Integer;

	    fdMembers: IMetaDataMembers;

	    Value: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    RubrInst := MB.ItemById("FC_COMM").Open(Null) As IRubricatorInstance;

	    FactsLookup := RubrInst.CreateFactsLookup;

	    MetaDLookup := FactsLookup.Lookup;

	    Cond := MetaDLookup.Where.Add;

	    Cond.AttributeName := "COUNTRY";

	    Cond.Value := 512;

	    FactsLookup.Open(DictionaryCursorOptions.None);

	    FactData := FactsLookup.Current;

	    If FactData <> Null Then

	    fdMembers := FactData.Record.Members;

	        For i := 0 To fdMembers.Count - 1 Do

	            Debug.Write(fdMembers.Item(i).Attribute.Name + ": ");

	            Value := fdMembers.Item(i).Value;

	            Debug.WriteLine(value);

	        End For;

	    End If;

	    FactsLookup.Close;

	End Sub UserProc;


После выполнения примера будет выполнен поиск по следующему условию:
 значение атрибута COUNTRY у показателя равняется 512. Данные первого найденного
 показателя будут выведены в окно консоли.


См. также:


[IRubricatorFactsLookup](IRubricatorFactsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
