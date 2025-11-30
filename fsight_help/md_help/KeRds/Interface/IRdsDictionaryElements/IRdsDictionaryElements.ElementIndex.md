# IRdsDictionaryElements.ElementIndex

IRdsDictionaryElements.ElementIndex
-


# IRdsDictionaryElements.ElementIndex


## Синтаксис


ElementIndex(Key: Integer): Integer;


## Параметры


Key. Ключ элемента.


## Описание


Свойство доступно только для чтения.


Свойство ElementIndex возвращает
 индекс элемента по ключу.


## Комментарии


Если элемент с заданным ключом отсутствует в справочнике, то ElementIndex
 вернет значение «-1».


Если параметр Key = -2, то ElementIndex вернет индекс корневого
 элемента справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS», содержащим справочник с идентификатором «DICTIONARY». Также необходимо
 добавить ссылки на системные сборки «Metabase», «Rds».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RdsKey: Integer;

	    Dict: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Children: IRdsDictionaryElementArray;

	    i: Integer;

	    Index: Integer;

	    Key: Integer;

	    Element: IRdsDictionaryElement;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsKey := Mb.ItemById("OBJ601").Key;

	    Dict := Mb.ItemByIdNamespace("OBJ607", RdsKey).Open(Null) As IRdsDictionaryInstance;

	    Elements := Dict.Elements;

	    Children := Elements.Children(-2);

	    For i := 0 To Children.Count - 1 Do

	        Key := Children.Item(i);

	        Index := Elements.ElementIndex(Key);

	        Element := Elements.Item(Index);

	        Debug.WriteLine("Элемент - '" + Element.Name + "' Индекс - " + Element.ElementIndex.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 и индексы дочерних элементов для корневого элемента справочника.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
