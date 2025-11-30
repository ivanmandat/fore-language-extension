# IMetabaseObjectDescriptor.GetHistory

IMetabaseObjectDescriptor.GetHistory
-


# IMetabaseObjectDescriptor.GetHistory


## Синтаксис


GetHistory: [IMetabaseObjectHistory](../IMetabaseObjectHistory/IMetabaseObjectHistory.htm);


## Описание


Метод GetHistory возвращает
 историю изменения объекта.


## Комментарии


Для ведения истории необходимо включить данную функцию для конкретного
 типа объектов в аудите менеджера безопасности, либо для конкретного объекта
 включить аудит для определённого пользователя в навигаторе менеджера безопасности.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. Для регламентных отчётов в менеджере
 безопасности включено ведении истории операций.


Добавьте ссылки на системные сборки: Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Desc: IMetabaseObjectDescriptor;

    History: IMetabaseObjectHistory;

    Item: IMetabaseObjectHistoryItem;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Desc := Mb.ItemById("REPORT");

    History := Desc.GetHistory;

    For i := 0 To History.Count - 1 Do

        Item := History.Item(i);

        Debug.WriteLine(Item.Id + " " + Item.Name + " " + DateTime.FromDouble(Item.Stamp).ToString);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена история
 выполнения операций над объектом. Будут выведены идентификаторы, наименования
 и дата и время изменения объектов.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
