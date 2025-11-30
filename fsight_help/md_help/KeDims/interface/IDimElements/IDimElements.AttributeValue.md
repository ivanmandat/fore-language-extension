# IDimElements.AttributeValue

IDimElements.AttributeValue
-


# IDimElements.AttributeValue


## Синтаксис


AttributeValue(Element: Integer; AttributeIndex:
 Integer): Variant;


## Параметры


Element - индекс элемента.


AttributeIndex - индекс атрибута,
 значение которого необходимо получить.


## Описание


Свойство AttributeValue возвращает
 значение атрибута элемента. Индекс элемента и атрибута передаются посредством
 параметров Element и AttributeIndex
 соответственно.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Elem: IDimElements;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Elem := Dimen.Elements;

	    v := Elem.AttributeValue(0, Dimen.Dimension.Attributes.Count - 1);

	End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 последнего атрибута для первого элемента справочника.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
