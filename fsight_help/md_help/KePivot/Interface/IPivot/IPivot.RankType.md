# IPivot.RankType

IPivot.RankType
-


# IPivot.RankType


## Синтаксис


RankType: [PivotRankType](../../Enums/PivotRankType.htm);


## Описание


Свойство RankType определяет
 способ ранжирования данных таблицы.


## Комментарии


Область ранжирования указывается в свойстве [IPivot.RankAreaType](IPivot.RankAreaType.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником
 данных для TabSheetBox.


					Sub Button1nClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    OLAP: IEaxAnalyzer;

		    Pivot: IPivot;

		Begin

		    OLAP := UiErAnalyzer1.Instance As IEaxAnalyzer;

		    Pivot := OLAP.Pivot;

		    Pivot.RankType := PivotRankType.Asc;

		    Pivot.RankAreaType := PivotValueArea.Row;

		End Sub Button1nClick;


При нажатии на кнопку в таблице будет осуществлено ранжирование данных
 по значениям в строках.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
