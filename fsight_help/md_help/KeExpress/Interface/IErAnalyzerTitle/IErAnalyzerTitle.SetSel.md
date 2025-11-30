# IErAnalyzerTitle.SetSel

IErAnalyzerTitle.SetSel
-


# IErAnalyzerTitle.SetSel


## Синтаксис


SetSel(Begin_: Integer; End_: Integer);


## Параметры


Begin_. Начальная позиция выделенного
 фрагмента в заголовке;


End_. Конечная позиция выделенного
 фрагмента в заголовке.


## Описание


Метод SetSel выделяет необходимый
 фрагмент в заголовке экспресс-отчета.


## Комментарии


Для полного выделения заголовка экспресс-отчета используйте метод [IErAnalyzerTitle.SelectAll](IErAnalyzerTitle.SelectAll.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие формы, содержащей
 компоненты:


	- ErAnalyzerTitle с идентификатором
	 «ErAnalyzerTitle1»;


	- UiErAnalyzer с идентификатором
	 «UiErAnalyzer1», который является источником данных для «ErAnalyzerTitle1».


В качестве источника данных для «UiErAnalyzer1» должен быть экспресс-отчет
 с включенным заголовком.


	Sub UserProc;

	Var

	    Xaml: String;

	Begin

	    // Переведем заголовок в режим редактирования

	    ErAnalyzerTitle1.StartEdit;

	    // Выделим фрагмент заголовка

	    ErAnalyzerTitle1.SetSel(ErAnalyzerTitle1.BeginSel + 1, ErAnalyzerTitle1.EndSel - 1);

	    // Вырежем выделенный фрагмент

	    ErAnalyzerTitle1.Cut;

	    // Вставим наименование измерения

	    ErAnalyzerTitle1.InsertSelection;

	    // Вставим наименование экспресс-отчета

	    ErAnalyzerTitle1.InsertName;

	    // Вставим текущее время

	    ErAnalyzerTitle1.InsertTime;

	    // Вставим текущую дату

	    ErAnalyzerTitle1.InsertDate;

	    // Вставим заданный текст

	    ErAnalyzerTitle1.InsertText("Added_text");

	    // Вставим вырезанный фрагмент

	    ErAnalyzerTitle1.Paste;

	    // Установим жирный, подчеркнутый курсив

	    ErAnalyzerTitle1.Bold := True;

	    ErAnalyzerTitle1.Italic := True;

	    ErAnalyzerTitle1.Underline := True;

	    // Установим размер и семейство шрифта

	    ErAnalyzerTitle1.FontSize := 20;

	    ErAnalyzerTitle1.FontFamily := "Arial";

	    // Выделим заголовок полностью

	    ErAnalyzerTitle1.SelectAll;

	    // Скопируем текст заголовка в буфер обмена

	    ErAnalyzerTitle1.Copy;

	    // Вставим в заголовок

	    ErAnalyzerTitle1.Paste;

	    // Получим текст заголовка в формате RTF

	    Xaml := ErAnalyzerTitle1.Xaml;

	    // Выведем в окно консоли текст заголовка, предназначенного для представления в формате RTF

	    Debug.WriteLine("Текст заголовка, предназначенного для представления в формате RTF - " + Xaml);

	    // Закончим редактирование заголовка

	    ErAnalyzerTitle1.EndEdit;

	End Sub UserProc;


После выполнения примера для заголовка экспресс-отчета будут применены
 вышеуказанные свойства и методы.


См. также:


[IErAnalyzerTitle](IErAnalyzerTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
