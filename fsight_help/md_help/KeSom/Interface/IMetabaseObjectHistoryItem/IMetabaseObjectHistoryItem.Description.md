# IMetabaseObjectHistoryItem.Description

IMetabaseObjectHistoryItem.Description
-


# IMetabaseObjectHistoryItem.Description


## Синтаксис


		Description: String;


## Описание


Свойство Description возвращает
 описание объекта из истории изменения.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «ObjTest».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Desc: IMetabaseObjectDescriptor;

		    Histor: IMetabaseObjectHistory;

		    Item: IMetabaseObjectHistoryItem;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Desc := Mb.ItemById("ObjTest");

		    Histor := Desc.GetHistory;

		    For i := 0 To Histor.Count - 1 Do

		        Item := Histor.Item(i);

		        Debug.WriteLine(Item.Description + " " + DateTime.FromDouble(Item.Stamp).ToString);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 об изменении объекта «ObjTest». Будут выведены описание объекта и дата
 и время изменения объектов.


См. также:


[IMetabaseObjectHistoryItem](IMetabaseObjectHistoryItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
