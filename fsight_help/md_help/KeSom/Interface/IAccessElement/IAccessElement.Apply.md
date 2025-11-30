# IAccessElement.Apply

IAccessElement.Apply
-


# IAccessElement.Apply


## Синтаксис


Apply(Options: [AccessElementApplyOptions](../../Enums/AccessElementApplyOptions.htm));


## Параметры


Options. Определяет параметры
 применения заданных прав доступа.


## Описание


Метод Apply сохраняет заданные
 значения атрибутов доступа и применяет данные права в соответствии с выбранными
 параметрами.


## Пример


Для выполнения примера в схеме должен существовать репозиторий НСИ с
 идентификатором RDS и справочник НСИ с идентификатором DICT_1. Для справочника
 НСИ в списке субъектов доступа должны присутствовать 4 пользователя/группы.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObjectDescriptor;

	    AOS: IAccessObjectSecurity;

	    Iterator: IAccessElementsIterator;

	    level: integer;

	    element: IAccessElement;

	    AttributeValue: IAccessAttributeValue;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemByIdNamespace("DICT_1", MB.ItemById("RDS").Key);

	    AOS := Object.GetSecurity;

	    Iterator := AOS.GetElements;

	    Level := Iterator.Next;

	    element := Iterator.Current;

	    element := element.Edit;

	    AttributeValue := New AccessAttributeValue.Create(32, 12);

	    element.AttributeAccess(AccessElementAttributes.Read) := AttributeValue;

	    element.Apply(AccessElementApplyOptions.ByHierarhy Or AccessElementApplyOptions.ByLevel);

	End Sub UserProc;


После выполнения примера будут изменены права доступа на чтение для
 первого элемента, всех его дочерних и для элементов, расположенных на
 одном уровне с первым. Для первых двух субъектов безопасности доступ к
 данным элементам будет запрещен.


См. также:


[IAccessElement](IAccessElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
