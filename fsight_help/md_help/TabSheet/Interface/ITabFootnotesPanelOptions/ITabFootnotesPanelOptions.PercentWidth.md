# ITabFootnotesPanelOptions.PercentWidth

ITabFootnotesPanelOptions.PercentWidth
-


# ITabFootnotesPanelOptions.PercentWidth


## Синтаксис


PercentWidth: Integer;


## Описание


Свойство PercentWidth определяет
 процент, занимаемый панелью по ширине.


## Комментарии


Свойство актуально, если панель сносок [располагается](ITabFootnotesPanelOptions.Position.htm)
 в левой или правой части окна.


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

    FootnotePanel.Position := BarDockingEdge.Right;

    FootnotePanel.PercentWidth := 15;

    (Express As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут изменены параметры расположения панели
 со сносками: панель будет располагаться справа от таблицы и занимать пятнадцать
 процентов от доступной области таблицы.


См. также:


[ITabFootnotesPanelOptions](ITabFootnotesPanelOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
