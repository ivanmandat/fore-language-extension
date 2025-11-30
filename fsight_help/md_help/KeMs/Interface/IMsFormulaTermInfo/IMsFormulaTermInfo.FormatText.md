# IMsFormulaTermInfo.FormatText

IMsFormulaTermInfo.FormatText
-


# IMsFormulaTermInfo.FormatText


## Синтаксис


		FormatText(format: [MsTermTextFormat](../../Enums/MsTermTextFormat.htm)):
		 String;


## Параметры


format. Формат представления
 наименования терма.


## Описание


Метод FormatText осуществляет
 преобразование и возвращает наименование терма в указанном формате.


## Комментарии


Для применения нескольких параметров форматирования указывайте необходимые
 значения перечисления [MsTermTextFormat](../../Enums/MsTermTextFormat.htm)
 через «Or».


## Пример


Для выполнения примера предполагается наличие терма «Info»


Добавьте ссылку на системную сборку Ms.


					Sub UserProc;

		Var

		    Info: IMsFormulaTermInfo;

		Begin

		    Info.Inversion := MsInversion.DLog;

		    Info.InversionLag := MsInversionLag.PrecidingYear;

		    Info.Lag := "2";

		    Debug.WriteLine("Наименование терма: " + Info.TermText);

		    Debug.WriteLine("Наименование терма без скобок: " + Info.FormatText(MsTermTextFormat.Brackets));

		    Debug.WriteLine("Наименование терма с указанием источника данных: " + Info.FormatText(MsTermTextFormat.DataSource));

		    Debug.WriteLine("Наименование с указанием начального преобразования терма и его периода: " + Info.FormatText(MsTermTextFormat.Inversions));

		    Debug.WriteLine("Наименование терма с указанием лага: " + Info.FormatText(MsTermTextFormat.Time));

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено наименование
 терма в различных форматах. Например:


Наименование терма: {dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2],
 3)}


Наименование терма без скобок: Afghanistan|BCA


Наименование терма с указанием источника данных:
 TEST_COPY1!Afghanistan|BCA


Наименование с указанием начального преобразования
 терма и его периода: dlogYoY(TEST_COPY1!Afghanistan|BCA[t+2], 3)


Наименование терма с указанием лага: Afghanistan|BCA[t+2]


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
