# IPrxReport.Toolbar

IPrxReport.Toolbar
-


# IPrxReport.Toolbar


## Синтаксис


Toolbar: [IPrxToolbar](../IPrxToolbar/IPrxToolbar.htm);


## Описание


Свойство Toolbar возвращает
 настройки панели инструментов в регламентном отчёте.


## Комментарии


На панели инструментов располагаются системные кнопки, разделители.
 а также пользовательские кнопки и пользовательские группы кнопок.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте может быть изменена панель инструментов.


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Toolbar: IPrxToolbar;

Begin

    Mb := MetabaseClass.Active;

    // Получение регламентного отчёта

    Report := Mb.ItemById("REPORT").Bind As IPrxReport;

    // Получение панели
 инструментов

    Toolbar := Report.Toolbar;

    Debug.WriteLine("Наличие изменений на
 панели инструментов: " + Toolbar.IsCustom.ToString);

    // Просмотр информации об элементах

    ShowElements(Toolbar.Elements);

End Sub UserProc;


Sub ShowElements(Elements: IPrxToolbarElements);

Var

    Element: IPrxToolbarElement;

Begin

    For Each Element In Elements Do

        Debug.WriteLine(Element.Name + '(' + Element.Id + ')' + ' ' + Element.Type.ToString);

        // Если элемент - пользовательская
 группа кнопок, то рекурсивный просмотр информации о кнопках группы

        If Element.Type = PrxToolbarElementType.UserGroup Then

            Debug.Indent;

            ShowElements((Element As IPrxUserGroupElement).Elements);

            Debug.Unindent;

        End If;

    End For;

End Sub ShowElements;


При выполнении примера в консоль среды разработки будет выведена информация
 об элементах панели инструментов указанного отчёта.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
