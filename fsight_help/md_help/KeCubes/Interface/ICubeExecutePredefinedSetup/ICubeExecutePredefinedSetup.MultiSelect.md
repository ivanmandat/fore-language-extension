# ICubeExecutePredefinedSetup.MultiSelect

ICubeExecutePredefinedSetup.MultiSelect
-


# ICubeExecutePredefinedSetup.MultiSelect


## Синтаксис


MultiSelect: Boolean;


## Описание


Свойство MultiSelect возвращает
 признак одновременного использования нескольких параметров измерения.


## Комментарии


Если свойство возвращает значение True,
 то возможно использование нескольких параметров одновременно. При значении
 False возможно использование только
 одного параметра.


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

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Sels := Eax.Pivot.Selection;

    CubeExSet := Sels As ICubeExecuteSetup;

    DimSetup := CubeExSet.FindById("UNITS");

    If DimSetup <> Null Then

        PredefinedSetup := DimSetup.Predefined;

        If PredefinedSetup.MultiSelect Then

            Debug.WriteLine("Возможно использование нескольких параметров одновременно");

        Else

            Debug.WriteLine("Возможно использование только одного параметра");

        End If;

    End If;

End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена информация о
 возможности использования нескольких параметров одновременно.


См. также:


[ICubeExecutePredefinedSetup](ICubeExecutePredefinedSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
