# IPrxUserGroupElement.Icon

IPrxUserGroupElement.Icon
-


# IPrxUserGroupElement.Icon


## Синтаксис


Icon: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);


## Описание


Свойство Icon определяет поток,
 содержащий изображение, которое будет отображаться для группы кнопок.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В файловой системе предполагается наличие
 картинки для группы кнопок «D:\Work\Image\group16x16.png».


Добавьте ссылки на системные сборки: IO, Metabase, Report.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    Toolbar: IPrxToolbar;

    Elements: IPrxToolbarElements;

    Element: IPrxToolbarElement;

    Group: IPrxUserGroupElement;

Begin

    Mb := MetabaseClass.Active;

    // Получение регламентного отчёта

    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

    // Получение панели
 инструментов

    Toolbar := Report.Toolbar;

    // Создание разделителя и пользовательской
 группы кнопок

    Elements := Toolbar.Elements;

    Elements.Add(PrxToolbarAddElementType.Separator);

    Element := Elements.Add(PrxToolbarAddElementType.UserGroup);

    Element.Name := "Пользовательская группа кнопок";

    Group := Element As IPrxUserGroupElement;

    Group.Icon := New FileStream.Create("D:\Work\Image\group16x16.png", FileOpenMode.Read, FileShare.DenyNone);

    Group.IconType := "png";

    // Сохранение изменений

    Report.MetabaseObject.Save;

End Sub UserProc;


При выполнении примера в указанном отчёте на панели инструментов будет
 создана группа для пользовательских кнопок. Для группы будут определены
 наименование и пиктограмма.


См. также:


[IPrxUserGroupElement](IPrxUserGroupElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
