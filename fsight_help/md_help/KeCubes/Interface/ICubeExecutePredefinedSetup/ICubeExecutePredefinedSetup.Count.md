# ICubeExecutePredefinedSetup.Count

ICubeExecutePredefinedSetup.Count
-


# ICubeExecutePredefinedSetup.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 параметров измерения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Sels: IDimSelectionSet;

    CubeExSet: ICubeExecuteSetup;

    DimSetup: ICubeExecuteDimSetup;

    PredefinedSetup: ICubeExecutePredefinedSetup;

    Opt: ICubeExecutePredefinedOption;

    i: Integer;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Sels := Eax.Pivot.Selection;

    CubeExSet := Sels As ICubeExecuteSetup;

    DimSetup := CubeExSet.FindById("UNITS");

    If DimSetup <> Null Then

        PredefinedSetup := DimSetup.Predefined;

        For i := 0 To PredefinedSetup.Count - 1 Do

            Opt := PredefinedSetup.Item(j);

            Debug.WriteLine("Наименование опции: " + Opt.Name);

            Debug.WriteLine("Идентификатор опции: " + Opt.Id);

            Debug.WriteLine("Опция установлена: " + Opt.Selected.ToString);

        End For;

    End If;

End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены предопределенные
 параметры измерения, определяющего единицы измерения базы данных временных
 рядов.


См. также:


[ICubeExecutePredefinedSetup](ICubeExecutePredefinedSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
