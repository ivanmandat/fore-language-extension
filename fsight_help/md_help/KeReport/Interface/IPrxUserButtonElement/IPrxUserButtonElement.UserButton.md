# IPrxUserButtonElement.UserButton

IPrxUserButtonElement.UserButton
-


# IPrxUserButtonElement.UserButton


## Синтаксис


UserButton: [IPrxUserButton](../IPrxUserButton/IPrxUserButton.htm);


## Описание


Свойство UserButton определяет
 пользовательскую кнопку, которой соответствует элемент панели инструментов.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте может быть изменена панель инструментов,
 созданы пользовательские кнопки.


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

    UserButton: IPrxUserButton;

Begin

    For Each Element In Elements Do

        If Element.Type = PrxToolbarElementType.UserButton Then

            UserButton := (Element As IPrxUserButtonElement).UserButton;

            Debug.WriteLine("Пользовательская кнопка: " + UserButton.Name + '(' + UserButton.Id + ')');

            Debug.Indent;

            Debug.WriteLine("Тип кнопки: " + UserButton.Type.ToString);

            Select Case UserButton.Type

                Case PrxUserButtonType.Method:

                    Debug.WriteLine("Fore-метод: " + (UserButton.Action As IPrxUserButtonActionMethod).ForeMethod);

                    Debug.WriteLine("Js-функци: " + (UserButton.Action As IPrxUserButtonActionMethod).JsFunction);

                Case PrxUserButtonType.Algorithm:

                    Debug.WriteLine("Запускаемый алгоритм: " + (UserButton.Action As IPrxUserButtonActionAlgorithm).Algorithm.Name);

                Case PrxUserButtonType.OpenObject:

                    Debug.WriteLine("Открываемый объект: " + (UserButton.Action As IPrxUserButtonActionOpenObject).ObjectForOpen.Name);

            End Select;

            Debug.Unindent;

        Elseif Element.Type = PrxToolbarElementType.UserGroup Then

            ShowElements((Element As IPrxUserGroupElement).Elements);

        End If;

    End For;

End Sub ShowElements;


При выполнении примера в консоль среды разработки будет выведена информация
 о пользовательских кнопках панели инструментов указанного отчёта.


См. также:


[IPrxUserButtonElement](IPrxUserButtonElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
