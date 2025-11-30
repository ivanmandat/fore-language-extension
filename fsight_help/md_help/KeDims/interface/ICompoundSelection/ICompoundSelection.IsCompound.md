# ICompoundSelection.IsCompound

ICompoundSelection.IsCompound
-


# ICompoundSelection.IsCompound


## Синтаксис


IsCompound: Boolean;


## Описание


Свойство IsCompound определяет
 признак того, каким образом задана отметка: над элементами составного
 справочника или над элементами источников составного справочника.


## Комментарии


Допустимые значения:


	- True. Отметка задается
	 над элементами составного справочника;


	- False. Отметка задается
	 над источниками составного справочника.


При значении свойства True необходимо
 привести интерфейс [ICompoundSelection](ICompoundSelection.htm)
 к [IDimSelection](../IDimSelection/IDimSelection.htm)
 и задавать отметку, используя его свойства и методы. При значении свойства
 False необходимо задавать отметку
 по измерениям куба в свойстве [Selection](ICompoundSelection.Selection.htm).


## Пример


Для выполнения примера понадобится форма с расположенными на ней компонентами
 Button, UiErAnalyzer,
 ErAnalyzerDimPanel и TabSheetBox
 с идентификаторами «Button1», «UiErAnalyzer1», «ErAnalyzerDimPanel1» и
 «TabSheetBox1» соответственно. Для компонентов «ErAnalyzerDimPanel1» и
 «TabSheetBox1» в качестве источника выбран компонент «UiErAnalyzer1»,
 к которому подключён экспресс-отчёт, основанный на нескольких источниках
 данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    curolap: IEaxAnalyzer;

    Pivot: IPivot;

    Selection: IDimSelectionSet;

    CompoundSel, CompoundSel1: ICompoundSelection;

    dimSel: IDimSelection;

Begin

    curolap := UiErAnalyzer1.Instance As IEaxAnalyzer;

    Pivot := curolap.Pivot;

    Pivot.BeginSelectionUpdate;

    Selection := Pivot.Selection;

    CompoundSel := Selection.FindById("FACTS_COMPOUND") As ICompoundSelection;

    If CompoundSel.IsCompound Then

        dimSel := CompoundSel As IDimSelection;

        dimSel.SelectAll;

    Else

        For Each CompoundSel1 In CompoundSel.Selection Do

            For Each dimSel In CompoundSel1.Selection Do

                dimSel.SelectElement(0, False);

                dimSel.SelectAll;

            End For;

        End For;

    End If;

    Pivot.EndSelectionUpdate;

End Sub Button1OnClick;


После выполнения примера,при нажатии на компонент «Button1», из выбранных
 на компоненте «ErAnalyzerDimPanel1» частных измерений будет составлено
 составной справочник.


См. также:


[ICompoundSelection](ICompoundSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
