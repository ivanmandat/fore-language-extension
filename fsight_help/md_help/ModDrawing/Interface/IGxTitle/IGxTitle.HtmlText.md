# IGxTitle.HtmlText

IGxTitle.HtmlText
-


# IGxTitle.HtmlText


## Синтаксис


HtmlText: String;


## Описание


Свойство HtmlText определяет
 текст заголовка на языке разметки HTML.


## Комментарии


Данное свойство актуально, если свойство [IGxTitle.Visible](IGxTitle.Visible.htm)
 принимает значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_FORMATTEDTEXT.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Title: IGxTitle;

	    HTML, HtmlTitle: String;

	    Converter: ITextConverter;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_FORMATTEDTEXT").Edit As IEaxAnalyzer;

	    // Получим панель заголовка

	    Title := Express.TitleBar;

	    // Зададим формат значения заголовка

	    Title.CustomFormat := "# ##0,00";

	    // Выведем в окно консоли текст заголовка на языке разметки HTML

	    HtmlTitle := Title.HtmlTitle;

	    Debug.WriteLine("Текст заголовка отчета на языке разметки HTML - " + HtmlTitle);

	    // Произведём изменения

	    HTML := "<span style=""font-size: 8pt;color: #000000;text-align: left;font-family: Arial; "">" +

	    "<span style=""color: #ff0000;font-size: 10pt;font-family: inherit;"">Важный </span>" +

	    "<span style=""color: #0000ff;font-style: italic;font-size: 8pt;font-family: inherit;"">текст</span></span>" ;

	    // Преобразование в RTF из HTML

	    Converter := New TextConverter.Create;

	    Title.FormattedText := Converter.Export(HTML, TextFormat.Rtf);

	    // Сделаем видимым заголовок отчета

	    Title.Visible := True;

	    Title.IsControl := False;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли выведется новый текст
 заголовка отчета на языке разметки HTML; в экспресс-отчете изменится
 текст заголовка отчета.


См. также:


[IGxTitle](IGxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
