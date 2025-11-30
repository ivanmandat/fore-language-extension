# IGxSystemFontNames.Item

IGxSystemFontNames.Item
-


# IGxSystemFontNames.Item


## Синтаксис


Item(Index: Integer): String;


## Параметры


Index.
 Индекс системного шрифта.


## Описание


Свойство Item возвращает название
 шрифта по его индексу.


## Пример


Добавьте ссылку на системную сборку Drawing.


	Sub UserProc;

	Var

	    font: IGxSystemFontNames;

	    n: integer;

	    names: string;

	    i: integer;

	Begin

	    // Создадим объект для работы с системными шрифтами

	    font := New GxSystemFontNames.Create;

	    // Получим количество системных шрифтов

	    n := font.Count - 1;

	    // Получим и выведем в окно консоли названия и количество всех системных шрифтов

	    For i := 1 To n Do

	        names := font.Item(i - 1);

	        Debug.WriteLine("Название системного шрифта №" + i.ToString + " = " + names);

	    End For;

	    Debug.WriteLine("Количество системных шрифтов = " + n.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены названия и количество
 всех системных шрифтов.


См. также:


[IGxSystemFontNames](IGxSystemFontNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
