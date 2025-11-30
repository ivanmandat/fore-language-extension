# ICubeExecuteDimSetup.CubeSetup

ICubeExecuteDimSetup.CubeSetup
-


# ICubeExecuteDimSetup.CubeSetup


## Синтаксис


CubeSetup: [ICubeExecuteSetup](../ICubeExecuteSetup/ICubeExecuteSetup.htm);


## Описание


Свойство CubeSetup возвращает
 коллекцию параметров измерений при расчете куба.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должна быть загружена рабочая область
 базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Sels: IDimSelectionSet;

    Sel: IDimSelection;

    CubeExSet: ICubeExecuteSetup;

    i: Integer;

    DimSetup: ICubeExecuteDimSetup;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Sels := Eax.Pivot.Selection;

    Sel := Sels.Item(0);

    DimSetup := CubeClass.SelectionSetup(Sel);

    CubeExSet := DimSetup.CubeSetup;

    For i := 0 To CubeExSet.Count - 1 Do

        Debug.WriteLine("Идентификатор: " + DimSetup.Id);

        Select Case DimSetup.Tag

            Case CubeDimensionTag.Calendar: Debug.WriteLine("Календарное измерение");

            Case CubeDimensionTag.Facts: Debug.WriteLine("Измерение фактов");

            Case CubeDimensionTag.None: Debug.WriteLine("Тип измерения не определен");

            Case CubeDimensionTag.Units: Debug.WriteLine("Единицы измерения");

        End Select;

    End For;

End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведено наименования
 и типы измерений, на основании которых формируются данные рабочей области.


См. также:


[ICubeExecuteDimSetup](ICubeExecuteDimSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
