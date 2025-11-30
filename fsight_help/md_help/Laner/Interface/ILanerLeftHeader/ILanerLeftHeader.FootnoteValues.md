# ILanerLeftHeader.FootnoteValues

ILanerLeftHeader.FootnoteValues
-


# ILanerLeftHeader.FootnoteValues


## Синтаксис


FootnoteValues(SlotIndex: Integer; ElementIndex:
 Integer): Array;


## Параметры


SlotIndex. Индекс слота в заголовке;


ElementIndex. Индекс элемента
 в заголовке.


## Описание


Свойство FootnoteValues возвращает
 массив, содержащий значения сносок, сформированных для указанного элемента
 заголовка.


## Комментарии


Для формирования сносок определите свойство [ILaner.SerieFootnoteAttributes](../ILaner/ILaner.SerieFootnoteAttributes.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «WORKBOOK». В рабочей книге созданы сноски для
 заголовков рядов.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    WbkObj: IMetabaseObject;

	    Laner: ILaner;

	    Header: ILanerLeftHeader;

	    s, e: Integer;

	Begin

	    //Получаем рабочую книгу

	    MB := MetabaseClass.Active;

	    WbkObj := MB.ItemById("WORKBOOK").Bind;

	    Laner := (WbkObj As IEaxAnalyzer).Laner;

	    //Расчет рабочей книги

	    Header := Laner.Execute.LeftHeader;

	    //Просмотр значений сносок

	    For s := 0 To Header.SlotCount - 1 Do

	        For e := 0 To Header.ElementCount - 1 Do

	            Debug.WriteLine(Header.FootnoteValues(s, e)[0])

	        End For;

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены первые
 сноски, добавленные для заголовков рядов.


См. также:


[ILanerLeftHeader](ILanerLeftHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
