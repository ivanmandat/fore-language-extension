# ITabPageSettings.TitleRows

ITabPageSettings.TitleRows
-


# ITabPageSettings.TitleRows


## Синтаксис


TitleRows: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство TitleRows определяет
 диапазон сквозных строк.


## Комментарии


В качестве значения необходимо указать диапазон, состоящий из одной
 или нескольких строк, например: «0:0»,
 «0:2». Также может быть указан
 составной диапазон, например: «0:0;51:51».


Сквозные строки выводятся при печати на каждой странице. Если указан
 составной диапазон, то область действия каждой части ограничена следующей
 частью диапазона. Также область действия сквозных строк может быть ограничена
 с помощью свойства [ITabPageSettings.TitleRowsScope](ITabPageSettings.TitleRowsScope.htm).


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

    Settings.TitleRows := Report.ParseRange("0:0;50:50").Range;

    //Ограничение сквозного диапазона

    Settings.TitleRowsScope := Report.ParseRange("49:49;99:99").Range;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для активного листа в параметрах печати будет
 задан диапазон сквозных строк и диапазон их действия. Первая сквозная
 строка будет выводиться со всеми страницами, включающими данные до строки
 с индексом «49». Вторая сквозная строка будет выводиться со всеми страницами,
 включающими данные до строки с индексом «99». Страницы соответствующие
 всем остальным строкам будут выводиться без данных сквозных строк.


См. также:


[ITabPageSettings](ITabPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
