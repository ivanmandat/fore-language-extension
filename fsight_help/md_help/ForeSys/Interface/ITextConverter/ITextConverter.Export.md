# ITextConverter.Export

ITextConverter.Export
-


# ITextConverter.Export


## Синтаксис


Export(Text: String; Format: [TextFormat](../../Enums/TextFormat.htm));


## Параметры


Text.
 Текст, который необходимо конвертировать;


Format.
 Формат, в который осуществляется конвертация текста.


## Описание


Метод Export конвертирует передаваемый
 текст в указанный формат.


## Комментарии


Перечень форматов, из которых может быть выполнена конвертация, приведён
 в перечислении [TextFormat](../../Enums/TextFormat.htm).


## Пример


Указанная функция используется для преобразования передаваемого текста
 в HTML-формате в текст в RTF-формате.


	Function HtmlToRtf(html: String): String;

	Var

	    Converter: ITextConverter;

	Begin

	    Converter := New TextConverter.Create;

	    Return Converter.Export(html, TextFormat.Rtf);

	End Function HtmlToRtf;


В результате использования функции будет выполнено
 преобразование текста из HTML-формата в RTF-формат.


См. также:


[ITextConverter](ITextConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
