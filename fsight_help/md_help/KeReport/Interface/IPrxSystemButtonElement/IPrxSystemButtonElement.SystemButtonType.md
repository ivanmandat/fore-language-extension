# IPrxSystemButtonElement.SystemButtonType

IPrxSystemButtonElement.SystemButtonType
-


# IPrxSystemButtonElement.SystemButtonType


## Синтаксис


SystemButtonType: [PrxToolbarSystemButtonType](../../Enums/PrxToolbarSystemButtonType.htm);


## Описание


Свойство SystemButtonType возвращает
 тип системной кнопки.


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

    SystemButton: IPrxSystemButtonElement;

Begin

    For Each Element In Elements Do

        If Element.Type = PrxToolbarElementType.SystemButton Then

            SystemButton := Element As IPrxSystemButtonElement;

            Debug.WriteLine("Тип системной кнопки: " + SystemButton.SystemButtonType.ToString + ". Видимость: " + Element.Visible.ToString);

        Elseif Element.Type = PrxToolbarElementType.UserGroup Then

            ShowElements((Element As IPrxUserGroupElement).Elements);

        End If;

    End For;

End Sub ShowElements;


При выполнении примера в консоль среды разработки будет выведена информация
 о системных кнопках панели инструментов указанного отчёта.


См. также:


[IPrxSystemButtonElement](IPrxSystemButtonElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
