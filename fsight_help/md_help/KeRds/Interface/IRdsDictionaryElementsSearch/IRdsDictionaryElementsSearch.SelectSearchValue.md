# IRdsDictionaryElementsSearch.SelectSearchValue

IRdsDictionaryElementsSearch.SelectSearchValue
-


# IRdsDictionaryElementsSearch.SelectSearchValue


## Синтаксис


SelectSearchValue: [RdsSelectSearchValue](../../Enums/RdsSelectSearchValue.htm);


## Описание


Свойство SelectSearchValue
 определяет условие поиска по значению.


## Комментарии


Для получения массива ключей всех элементов, удовлетворяющих условиям
 поиска, используйте метод [IRdsDictionaryElementsSearch.FindAll](IRdsDictionaryElementsSearch.FindAll.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с идентификатором «DIM».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Orm и Rds.


			Sub UserProc;

Var

    DictInst: IRdsDictionaryInstance;

    Search: IRdsDictionaryElementsSearch;

    Cond: IOrmCondition;

Begin

    DictInst := MetabaseClass.Active.ItemById("DIM").Open(Null) As IRdsDictionaryInstance;

    DictInst.FetchAll := True;

    Search := DictInst.CreateSearch;

    // Настроим поиск по значению в таблице справочника

    Search.SelectSearchValue := RdsSelectSearchValue.Value;

    Cond := Search.Condition.Conditions.Add;

    // Выберем атрибут для поиска и настроим условия поиска

    Cond.AttributeName := DictInst.Attributes.Item(4).Id;

    Cond.Operator_ := OrmComparisonOperator.Equal;

    Cond.Value := 3;

    // Выведем количество найденных элементов

    Debug.WriteLine("Количество элементов, удовлетворяющих условиям поиска: " +

        Search.FindAll.Count.ToString);

End Sub UserProc;


В результате выполнения примера произведен поиск по значению в таблице
 справочника. В окно консоли выведено количество найденных элементов.


См. также:


[IRdsDictionaryElementsSearch](IRdsDictionaryElementsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
