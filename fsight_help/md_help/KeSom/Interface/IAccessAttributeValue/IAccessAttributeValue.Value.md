# IAccessAttributeValue.Value

IAccessAttributeValue.Value
-


# IAccessAttributeValue.Value


## Синтаксис


Value(Index: Integer): Boolean;


## Параметры


Index. Индекс в битовой маске
 доступа, соответствующий субъекту безопасности.


## Описание


Свойство Value определяет значение
 права доступа.


## Комментарии


При значении True соответствующие
 права имеются, при значении False
 - прав нет.


## Пример


Для выполнения примера предполагается наличие справочника НСИ с идентификатором
 «Dict_1». Справочник создан в репозитории НСИ «RDS».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObjectDescriptor;

	    AOS: IAccessObjectSecurity;

	    Iterator: IAccessElementsIterator;

	    Element: IAccessElement;

	    AttributeValue: IAccessAttributeValue;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemByIdNamespace("DICT_1", MB.ItemById("RDS").Key);

	    AOS := Object.GetSecurity;

	    Iterator := AOS.GetElements;

	    Iterator.Next;

	    Element := Iterator.Current.Edit;

	    AttributeValue := Element.AttributeAccess(AccessElementAttributes.Write);

	    AttributeValue.Value(0) := False;

	    AttributeValue.Value(1) := False;

	    Element.AttributeAccess(AccessElementAttributes.Write) := AttributeValue;

	    Element.Apply(AccessElementApplyOptions.ByLevel);

	End Sub UserProc;


После выполнения примера для первых двух субъектов безопасности будет
 запрещен доступ на запись первого элемента и всех элементов, расположенных
 на этом же уровне.


См. также:


[IAccessAttributeValue](IAccessAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
