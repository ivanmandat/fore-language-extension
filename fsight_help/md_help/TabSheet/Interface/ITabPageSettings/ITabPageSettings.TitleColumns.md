# ITabPageSettings.TitleColumns

ITabPageSettings.TitleColumns
-


# ITabPageSettings.TitleColumns


## Синтаксис


TitleColumns: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство TitleColumns определяет
 диапазон сквозных столбцов.


## Комментарии


В качестве значения необходимо указать диапазон, состоящий из одного
 или нескольких столбцов, например: «A:A»,
 «A:B». Также может быть указан
 составной диапазон, например: «A:A;J:J».


Сквозные столбцы выводятся при печати на каждой странице. Если указан
 составной диапазон, то область действия каждой части ограничена следующей
 частью диапазона. Также область действия сквозных столбцов может быть
 ограничена с помощью свойства [ITabPageSettings.TitleColumnsScope](ITabPageSettings.TitleColumnsScope.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Settings: IPrxPageSettings;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("Report").Edit As IPrxReport;

    Settings := Report.ActiveSheet.PageSettings;

    //Установка сквозного диапазона

    Settings.TitleColumns := Report.ParseRange("A:A;S:S").Range;

    //Ограничение сквозного диапазона

    Settings.TitleColumnsScope := Report.ParseRange("R:R;Z:Z").Range;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для активного листа в параметрах печати будет
 задан диапазон сквозных столбцов и диапазон их действия. Первый сквозной
 столбец будет выводиться со всеми страницами, включающими данные до столбца
 «R». Второй сквозной столбец будет выводиться со всеми страницами, включающими
 данные до столбца «Z». Страницы соответствующие всем остальным столбцам
 будут выводиться без данных сквозных столбцов.


См. также:


[ITabPageSettings](ITabPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
