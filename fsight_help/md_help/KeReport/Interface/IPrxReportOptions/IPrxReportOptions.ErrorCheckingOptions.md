# IPrxReportOptions.ErrorCheckingOptions

IPrxReportOptions.ErrorCheckingOptions
-


# IPrxReportOptions.ErrorCheckingOptions


## Синтаксис


ErrorCheckingOptions: [ITabErrorCheckingOptions](TabSheet.chm::/Interface/ITabErrorCheckingOptions/ITabErrorCheckingOptions.htm);


## Описание


Свойство ErrorCheckingOptions
 возвращает параметры индикации ошибок в формулах таблицы.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1», компонент UiReport с наименованием «UiReport1»
 и какие-либо визуальные компоненты, для которых «UiReport1» установлен
 в качестве источника данных.


Добавьте ссылки на системные сборки: Tab, Report.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    ErrOptions: ITabErrorCheckingOptions;

Begin

    Report := UiReport1.Report;

    ErrOptions := Report.Options.ErrorCheckingOptions;

    ErrOptions.EnableChecking := True;

    ErrOptions.NumberAsText := False;

    ErrOptions.ResetSkippedErrors;

End Sub Button1OnClick;


При нажатии на кнопку будут настроены параметры индикации ошибок в формулах
 отчета. Числа, отформатированные как текст, не будут помечены ошибочными.
 Пропущенные ошибки будут сброшены.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
