# ITabView.DisplayClippedCellHints

ITabView.DisplayClippedCellHints
-


# ITabView.DisplayClippedCellHints


## Синтаксис


DisplayClippedCellHints: Boolean;


## Описание


Свойство DisplayClippedCellHints
 определяет, отображать ли всплывающую подсказку, содержащую полный текст
 ячейки таблицы.


## Комментарии


Допустимые значения:


	- True. Для ячейки таблицы
	 отображается всплывающая подсказка;


	- False. Для ячейки таблицы
	 не отображается всплывающая подсказка.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 «EXPRESS».


Добавьте ссылки на системные сборки Metabase, Tab, Express.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Tab: ITabSheet;

    View: ITabView;

Begin

    MB := MetabaseClass.Active;

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    Tab := Express.Grid.TabSheet;

    View := Tab.View;

    View.DisplayClippedCellHints := True;

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для ячеек табличного листа отчета будет установлено
 отображение всплывающих подсказок, содержащих полный текст ячеек.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
