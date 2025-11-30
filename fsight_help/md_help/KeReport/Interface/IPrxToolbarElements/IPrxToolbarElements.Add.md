# IPrxToolbarElements.Add

IPrxToolbarElements.Add
-


# IPrxToolbarElements.Add


## Синтаксис


Add(Type: [PrxToolbarAddElementType](../../Enums/PrxToolbarAddElementType.htm)):
 [IPrxToolbarElement](../IPrxToolbarElement/IPrxToolbarElement.htm);


## Параметры


Type. Тип добавляемого элемента
 панели инструментов.


## Описание


Метод Add добавляет элемент
 с указанным типом на панель инструментов.


## Комментарии


Данный метод используется для добавления разделителей или пользовательских
 групп кнопок.


Создание пользовательских кнопок осуществляется в коллекции [IPrxUserButtons](../IPrxUserButtons/IPrxUserButtons.htm).
 После этого пользовательские кнопки могут быть перемещены в нужную позицию
 в коллекции [IPrxToolbarElements](IPrxToolbarElements.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте может быть изменена панель инструментов.
 В файловой системе предполагается наличие картинки для кнопки «D:\Work\Image\btn16x16.png».


Добавьте ссылки на системные сборки: IO, Metabase, Report.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Toolbar: IPrxToolbar;

    Elements: IPrxToolbarElements;

    Group: IPrxToolbarElement;

    UserBtn: IPrxUserButton;

Begin

    Mb := MetabaseClass.Active;

    // Получение регламентного отчёта

    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

    // Получение панели
 инструментов

    Toolbar := Report.Toolbar;

    // Создание разделителя и пользовательских групп
 кнопок

    Elements := Toolbar.Elements;

    Elements.Add(PrxToolbarAddElementType.Separator);

    Group := Elements.Add(PrxToolbarAddElementType.UserGroup);

    Group.Name := "Управление расчётом";

    // Создание пользовательской кнопки

    UserBtn := Report.UserButtons.AddByType(PrxUserButtonType.Method);

    UserBtn.Name := "Запуск расчёта";

    UserBtn.ForeModule := Mb.ItemById("MOD_ACTION");

    UserBtn.Icon := New FileStream.Create("D:\Work\Image\btn16x16.png", FileOpenMode.Read, FileShare.DenyNone);

    UserBtn.IconType := "png";

    UserBtn.SmallIcon := False;

    (UserBtn.Action As IPrxUserButtonActionForeMethod).ForeMethod := "Run";

    // Перемещение кнопки в пользовательскую группу

    // т.к. кнопка добавляется в конце панели
 инструментов, то индекс кнопки можно получить, используя количество элементов

    Elements.MoveTo(Elements.Count - 1, 0, (Group As IPrxUserGroupElement).Elements);

    // Сохранение изменений

    Report.MetabaseObject.Save;

End Sub UserProc;


При выполнении примера на панель инструментов указанного отчёта будут
 добавлены разделитель, пользовательская группа кнопок и пользовательская
 кнопка, выполняющая Fore-метод. Кнопка будет перемещена в созданную группу.
 Для новых элементов будут заданы необходимые настройки.


См. также:


[IPrxToolbarElements](IPrxToolbarElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
