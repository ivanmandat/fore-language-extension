# ITabFootnotesPanelOptions.PercentHeight

ITabFootnotesPanelOptions.PercentHeight
-


# ITabFootnotesPanelOptions.PercentHeight


## Синтаксис


PercentHeight: Integer;


## Описание


Свойство PercentHeight определяет
 процент, занимаемый панелью по высоте.


## Комментарии


Свойство актуально, если панель сносок [располагается](ITabFootnotesPanelOptions.Position.htm)
 в верхней или нижней части окна.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXPRESS_REPORT». В таблице отчета добавлены сноски
 для данных или элементов измерений. Добавьте ссылки на системные сборки
 Express, Forms, Metabase, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    FootnotePanel: ITabFootnotesPanelOptions;

Begin

    MB := MetabaseClass.Active;

    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

    FootnotePanel := Express.Grid.FootnotePanelOptions;

    FootnotePanel.Position := BarDockingEdge.Bottom;

    FootnotePanel.PercentHeight := 15;

    (Express As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут изменены параметры расположения панели
 со сносками: панель будет располагаться ниже таблицы и занимать пятнадцать
 процентов от доступной области таблицы.


См. также:


[ITabFootnotesPanelOptions](ITabFootnotesPanelOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
