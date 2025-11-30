# ICubeClass.SelectionSetup

ICubeClass.SelectionSetup
-


# ICubeClass.SelectionSetup


## Синтаксис


SelectionSetup(Selection: [IDimSelection](kedims.chm::/interface/idimselection/idimselection.htm)):
 [ICubeExecuteDimSetup](../ICubeExecuteDimSetup/ICubeExecuteDimSetup.htm);


## Параметры


Selection. Отметка измерения,
 параметры которого необходимо получить.


## Описание


Свойство SelectionSetup возвращает
 параметры измерения по его отметке.


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

    Sel: IDimSelection;

    DimSetup: ICubeExecuteDimSetup;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Sels := Eax.Pivot.Selection;

    Sel := Sels.Item(0);

    DimSetup := CubeClass.SelectionSetup(Sel);

    Debug.WriteLine("Идентификатор: " + DimSetup.Id);

    Select Case DimSetup.Tag

        Case CubeDimensionTag.Calendar: Debug.WriteLine("Календарное измерение");

        Case CubeDimensionTag.Facts: Debug.WriteLine("Измерение фактов");

        Case CubeDimensionTag.None: Debug.WriteLine("Тип измерения не определен");

        Case CubeDimensionTag.Units: Debug.WriteLine("Единицы измерения");

    End Select;

End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведено наименование
 и тип первого измерения, на основании которого формируются данные рабочей
 области.


См. также:


[ICubeClass](ICubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
