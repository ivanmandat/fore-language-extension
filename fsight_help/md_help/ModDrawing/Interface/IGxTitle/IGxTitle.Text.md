# IGxTitle.Text

IGxTitle.Text
-


# IGxTitle.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 заголовка.


## Комментарии


В тексте заголовка может быть указана любая текстовая информация. Также
 в тексте допустимо использование следующих подстановок:


		 Подстановка
		 Описание


		 &[Date]
		 Текущая дата.


		 &[Time]
		 Текущее время.


		 &[Name]
		 Наименование экспресс-отчёта.


		 &[Globals.<Идентификатор переменной>]
		 Значение [глобальной
		 переменной](UiNav.chm::/02_Navigator/UiNav_GlobalVariables.htm).


		 &[Dimensions.<Идентификатор измерения>]
		 Отметка по указанному измерению.


Примечание.
 Идентификатор глобальной переменной чувствителен к регистру.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. В источнике данных экспресс-отчёта предполагается
 наличие измерения с идентификатором Country.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Title: IGxTitle;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Title := Expr.TitleBar;

	    //Текст

	    Title.Text := "Отчет: &[Name]; Страны: &[Dimensions.COUNTRY]";

	    //Цвет фона и шрифта

	    Title.BackgroundColor := GxColor.FromName("Yellow");

	    Title.TextColor := GxColor.FromName("Red");

	    //Горизонтальное выравнивание текста

	    Title.TextAlignment := GxStringAlignment.Center;

	    //Вертикальное выравнивание текста

	    Title.VerticalAlignment := GxVerticalAlignment.Center;

	    //Перенос текста

	    Title.WrappedText := True;

	    //Автоподгонка высоты
	 заголовка

	    Title.AutoHeight := True;

	    //Максимальная высота

	    Title.Height := 50;

	    //Использование заголовка как элемента управления

	    Title.IsControl := True;

	    //Видимость заголовка

	    Title.Visible := True;

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет осуществлена настройка заголовка экспресс-отчета.
 Для заголовка будут определены различные параметры оформления и задан
 текст.


См. также:


[IGxTitle](IGxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
