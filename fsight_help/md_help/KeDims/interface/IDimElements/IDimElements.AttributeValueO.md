# IDimElements.AttributeValueO

IDimElements.AttributeValueO
-


# IDimElements.AttributeValueO


## Синтаксис


AttributeValueO:(Element: Integer; Attribute: [IDimAttributeInstance](../IDimAttributeInstance/IDimAttributeInstance.htm)):
 Variant;


## Параметры


Element - индекс элемента.


Attribute - атрибут, значение
 которого необходимо получить.


## Описание


Свойство AttributeValueO возвращает
 значение атрибута элемента. Индекс элемента и атрибут передаются посредством
 параметров Element и Attribute
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

	    v := Elem.AttributeValueO(0, Dimen.Attributes.Item(0));

	End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 первого атрибута для первого элемента справочника.


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
