# IPivot.ValueType

IPivot.ValueType
-


# IPivot.ValueType


## Синтаксис


ValueType: [PivotValueType](../../Enums/PivotValueType.htm);


## Описание


Свойство ValueType определяет
 формат представления данных в таблице.


## Комментарии


Указанный формат применяется для области, заданной в свойстве [IPivot.ValueAreaType](IPivot.ValueAreaType.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником
 данных для TabSheetBox.


Пример является обработчиком события OnClick
 для компонента Button.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    OLAP: IEaxAnalyzer;

		    Pivot: IPivot;

		Begin

		    OLAP := UiErAnalyzer1.Instance As IEaxAnalyzer;

		    Pivot := OLAP.Pivot;

		    Pivot.ValueType := PivotValueType.Percentage;

		    Pivot.ValueAreaType := PivotValueArea.Row;

End Sub Button1OnClick;


При нажатии на кнопку данные в таблице будут представлены в процентном
 формате от суммарного значения по строкам.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
