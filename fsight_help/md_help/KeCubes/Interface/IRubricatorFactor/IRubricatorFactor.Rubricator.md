# IRubricatorFactor.Rubricator

IRubricatorFactor.Rubricator
-


# IRubricatorFactor.Rubricator


## Синтаксис


Rubricator: [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);


## Описание


Свойство Rubricator возвращает
 данные базы данных временных рядов, содержащей показатель.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов. В рабочей области предполагается наличие
 вычисляемого ряда.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ErAn: IEaxAnalyzer;

    Laner: ILaner;

    Serie: ILanerSerie;

    CalculateSerie: ILanerCalculateSerie;

    Factor: IRubricatorFactor;

    i: integer;

    RubInst: IRubricatorInstance;

Begin

    ErAn := UiErAnalyzer1.ErAnalyzer;

    Laner := ErAn.Laner;

    For i := 0 To Laner.Series.Count - 1 Do

        Serie := Laner.Series.Item(i);

        If Serie.Kind = LnSerieKind.Calculate Then

            CalculateSerie := Serie As ILanerCalculateSerie;

            Factor := CalculateSerie.CreateFactor;

            RubInst := Factor.Rubricator;

            Debug.WriteLine((RubInst.Rubricator As IMetabaseObject).Name);

            Break;

        End If;

    End For;

End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено наименование
 базы данных временных рядов, которому принадлежат ряды.


См. также:


[IRubricatorFactor](IRubricatorFactor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
