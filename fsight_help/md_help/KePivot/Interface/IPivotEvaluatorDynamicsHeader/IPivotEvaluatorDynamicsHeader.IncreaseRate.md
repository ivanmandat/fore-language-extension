# IPivotEvaluatorDynamicsHeader.IncreaseRate

IPivotEvaluatorDynamicsHeader.IncreaseRate
-


# IPivotEvaluatorDynamicsHeader.IncreaseRate


## Синтаксис


IncreaseRate: Boolean;


## Описание


Свойство IncreaseRate определяет
 признак расчета темпа прироста значений.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом расчет темпа прироста показателей не производится.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    OLAP: IEaxAnalyzer;

    Pivot: IPivot;

    Dynamics: IPivotEvaluatorDynamics;

    Dynamic: IPivotEvaluatorDynamicsHeader;

Begin

    OLAP := UiErAnalyzer1.ErAnalyzer;

    Pivot := OLAP.Pivot;

    Dynamics := Pivot.Evaluator.Dynamics;

    Dynamic := Dynamics.LeftHeader;

    Dynamic.IncreaseRate := True;

    Dynamic.Slot := 0;

End Sub Button1OnClick;


При нажатии на кнопку для таблицы по строкам будет рассчитываться темп
 прироста значений.


Исходные данные:


![](IPivotEvaluatorDynamicsHeader_Source.gif)


Темп прироста значений:


![](IPivotEvaluatorDynamicsHeader_IncreaseRate.gif)


См. также:


[IPivotEvaluatorDynamicsHeader](IPivotEvaluatorDynamicsHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
