# IMsCompositeFormulaTerm.FormatExpressionText

IMsCompositeFormulaTerm.FormatExpressionText
-


# IMsCompositeFormulaTerm.FormatExpressionText


## Синтаксис


		FormatExpressionText(Format: [MsTermTextFormat](../../Enums/MsTermTextFormat.htm)):
		 String;


## Параметры


Format. Формат наименования.


## Описание


Свойство FormatExpressionText
 возвращает наименование составного терма в указанном формате.


## Комментарии


Для составных термов доступны следующие форматы:


	- MsTermTextFormat.Inversions.
	 Наименование с указанием начального преобразования терма и его периода;


	- MsTermTextFormat.Screened.
	 Наименование терма с символами экранирования.
	 Для экранирования символов применяется символ «\». Если в строке находится
	 символ «\», то символ, следующий за ним, распознается как строка.


Для применения нескольких параметров форматирования указывайте необходимые
 значения перечисления [MsTermTextFormat](../../Enums/MsTermTextFormat.htm)
 через «Or».


## Пример


Для выполнения примера в репозитории предполагается наличие составного
 терма INFO, передаваемого в качестве входного параметра функции.


Добавьте ссылку на системную сборку Ms.


					Sub UserProcInfo(Info: IMsCompositeFormulaTerm);

		Begin

		    Debug.Write("Наименование терма с учётом начального преобразования: ");

		    Debug.WriteLine(Info.FormatExpressionText(MsTermTextFormat.Inversions));

		    Debug.Write("Наименование терма с символами экранирования: ");

		    Debug.WriteLine(Info.FormatExpressionText(MsTermTextFormat.Screened));

		End Sub UserProcInfo;


В результате выполнения примера в окно консоли будет выведено наименование
 терма в различных форматах. Например:


Наименование терма с учётом начального преобразования:
 log(Годовые данные {2012}[t] * Сезонные колебания {2012}[t])


Наименование терма с символами экранирования:
 Годовые данные \{2012\}[t] * Сезонные колебания \{2012\}[t]


См. также:


[IMsCompositeFormulaTerm](IMsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
