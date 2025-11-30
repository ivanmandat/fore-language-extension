# IEaxTableStyle.RevisionLegend

IEaxTableStyle.RevisionLegend
-


# IEaxTableStyle.RevisionLegend


## Синтаксис


RevisionLegend: [ILanerRevisionLegend](../ILanerRevisionLegend/ILanerRevisionLegend.htm);


## Описание


Свойство RevisionLegend возвращает
 легенду ревизий для рядного режима базы
 данных временных рядов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должна быть загружена рабочая область
 базы данных временных рядов.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    currentOlap: IEaxAnalyzer;

	    RevisionLegend: ILanerRevisionLegend;

	    Grid: IEaxGrid;

	Begin

	    currentOlap := UiErAnalyzer1.ErAnalyzer;

	    Grid := currentOlap.Grid;

	    RevisionLegend := Grid.Style.RevisionLegend;

	    RevisionLegend.Clear;

	    RevisionLegend.ClearUserColors;

	    RevisionLegend.Color(1) := GxColor.FromName("Info");

	    RevisionLegend.Color(2) := GxColor.FromName("Olive");

	    RevisionLegend.Color(3) := GxColor.FromName("Green");

	    RevisionLegend.Color(4) := GxColor.FromName("Silver");

	    RevisionLegend.SetRevisions(1,4);

	End Sub Button1OnClick;


После выполнения примера будут заданы пользовательские цвета для первых
 четырех ревизий, будет определен диапазон отображаемых в легенде ревизий.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
