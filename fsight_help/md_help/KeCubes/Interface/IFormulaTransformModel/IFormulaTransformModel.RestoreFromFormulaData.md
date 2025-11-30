# IFormulaTransformModel.RestoreFromFormulaData

IFormulaTransformModel.RestoreFromFormulaData
-


# IFormulaTransformModel.RestoreFromFormulaData


## Синтаксис


RestoreFromFormulaData(FormulaData: [IRubricatorFormulaData](../IRubricatorFormulaData/IRubricatorFormulaData.htm));


## Параметры


FormulaData. Формула, которую
 необходимо восстановить.


## Описание


Метод RestoreFromFormulaData
 восстанавливает вычисляемый ряд по заданным данным формулы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов. В данной базе должна присутствовать формула
 с ключом 1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Laner: ILaner;

    RubInst: IRubricatorInstance;

    FormulaData: IRubricatorFormulaData;

    Serie: ILanerCalculateSerie;

    Transform: IFormulaTransformModel;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    RubInst := Laner.RubricatorInstance;

    Laner.BeginUpdate;

    FormulaData := RubInst.GetFormulaData(1);

    Serie := Laner.Series.AddCalculateSerie("Ряд, восстановленный из формулы");

    Transform := Serie.Transform;

    Transform.RestoreFromFormulaData(FormulaData);

    Laner.EndUpdate;

End Sub Button1OnClick;


После выполнения примера будет добавлен новый вычисляемый ряд, восстановленный
 из формулы с ключом 1.


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
