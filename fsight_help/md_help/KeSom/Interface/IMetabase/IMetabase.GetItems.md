# IMetabase.GetItems

IMetabase.GetItems
-


# IMetabase.GetItems


## Синтаксис


		GetItems(Keys: Array): [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Параметры


Keys. Целочисленный массив,
 содержащий ключи объектов.


## Описание


Метод GetItems возвращает коллекцию
 описаний объектов, ключи которых передаются посредством параметра Keys.


## Комментарии


В коллекцию будут включены только существующие объекты. Если объект
 с каким-либо ключом не найден, то данный ключ будет пропущен. Исключительная
 ситуация при этом не генерируется.


## Пример


Для выполнения примера в репозитории предполагается наличие объектов
 с ключами 5781 и 5782.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    key: Array[2] Of Integer;

		    MDescs: IMetabaseObjectDescriptors;

		    Desc: IMetabaseObjectDescriptor;

		    i: Integer;

		Begin

		    mb := MetabaseClass.Active;

		    key[0] := 5781;

		    key[1] := 5782;

		    MDescs := mb.GetItems(key);

		    For i := 0 To MDescs.Count - 1 Do

		        Desc := MDescs.Item(i);

		        Debug.WriteLine("Идентификатор: " + Desc.Id + "; Наименование: " + Desc.Name);

		    End For;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены идентификаторы
 и наименования, соответствующие объектам с заданными ключами.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
