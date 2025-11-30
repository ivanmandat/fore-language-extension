# IMetabase.Item

IMetabase.Item
-


# IMetabase.Item


## Синтаксис


		Item(Key: Integer): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Key. Ключ объекта репозитория.


## Описание


Свойство Item возвращает описание
 объекта репозитория с указанным ключом.


## Комментарии


Свойство возвращает значение Null,
 если объект с указанным ключом отсутствует в репозитории.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.Item(100);

		    If MDesc <> Null Then

		    Debug.WriteLine(MDesc.Id);

		    Else

		    Debug.WriteLine("Объект с ключом 100 отсутствует в репозитории.");

		End If;

		End Sub UserProc;


После выполнения примера, если в репозитории существует объект с ключом
 100, то в консоль среды разработки будет выведен его идентификатор.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
