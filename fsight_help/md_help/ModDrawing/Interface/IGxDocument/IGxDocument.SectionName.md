# IGxDocument.SectionName

IGxDocument.SectionName
-


# IGxDocument.SectionName


## Синтаксис


SectionName(SectionIndex: Integer): String;


## Параметры


SectionIndex. Индекс
 секции.


## Описание


Свойство SectionName возвращает
 наименование секции с указанным индексом.


## Комментарии


Для регламентного отчёта под секцией подразумевается отдельный лист,
 для экспресс-отчета и рабочего пространства под секцией понимается весь
 документ.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    Document: IGxDocument;

    i, c: Integer;

Begin

    MB := MetabaseClass.Active;

    Document := MB.ItemById("REPORT").Bind As IGxDocument;

    c := Document.SectionCount;

    For i := 0 To c - 1 Do

        Debug.WriteLine(Document.SectionName(i));

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования
 всех листов, доступных при печати отчёта.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
