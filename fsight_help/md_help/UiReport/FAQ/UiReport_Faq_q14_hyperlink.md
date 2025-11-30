# Переход на скрытый лист по гиперссылке

Переход на скрытый лист по гиперссылке
-


# Переход на скрытый лист по гиперссылке


## Вопрос


Как настроить переход на скрытые листы через гиперссылку?


## Область применения


С листов регламентного отчета можно настроить гиперссылку для перехода
 на скрытый лист.


## Исходные данные


Создайте регламентный отчет, в котором содержатся:


	- лист с наименованием «Лист1»;


	- [скрытый](../Desktop/Sheets/UiReport_Sheets_hide.htm)
	 лист с наименованием «Лист2».


## Решение


Для настройки [гиперссылки](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
 необходимо выполнить действия:


	- Создайте модуль с идентификатором
	 «HIDING_SHEET» для отображения скрытого листа. Добавьте системную
	 сборку Report:


Sub UserProc;

Var Rep: IPrxReport;

   Sheet: IPrxSheet;

    Name: String;

Begin

    Rep := PrxReport.ActiveReport;

    Sheet := Rep.Sheets.FindByName("Лист2");

    Sheet.Visible := True;

    Rep.ActiveSheet := Sheet;

End Sub UserProc;


	- Добавьте созданный [модуль](../Desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
	 к отчету.


	- Добавьте текст с [гиперссылкой](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
	 для выполнения процедуры/функции. Выберите модуль, подключенный ранее
	 к отчёту.


	- Создайте [обработчик
	 событий](../Desktop/Reports/Event/UiReport_Reports_Event.htm) в модуле Fore.


	- Задайте для события [OnBeforeActivateSheet](KeReport.chm::/Class/ReportEvents/ReportEvents.OnBeforeActivateSheet.htm)
	 скрытие отображенного листа:


Public Sub OnBeforeActivateSheet(OldSheet: IPrxSheet; NewSheet: IPrxSheet; Var Cancel: Boolean);

Var Rep: IPrxReport;

    Sheet: IPrxSheet;

   Name: String;

Begin

    Rep := PrxReport.ActiveReport;

    If Rep.ActiveSheet.Name = "Лист2" Then

       Sheet := Rep.Sheets.FindByName("Лист2");

       Sheet.Visible := False;

    End If;

End Sub OnBeforeActivateSheet;


В регламентном отчете появится возможность перехода на скрытый лист
 по гиперссылке без возможности его отображения при смене листа.


Примечание.
 В веб-приложение передаются настройки [гиперссылки](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
 из настольного приложения.


См. также:


[Вопросы и ответы](UiReport_FAQ.htm) | [Скрытие листа](../Desktop/Sheets/UiReport_Sheets_hide.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
