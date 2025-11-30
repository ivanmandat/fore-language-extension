# IErAnalyzerDimPanel.Orientation

IErAnalyzerDimPanel.Orientation
-


# IErAnalyzerDimPanel.Orientation


## Синтаксис


Orientation: [EaxDimPanelOrientation](../../Enums/EaxDimPanelOrientation.htm);


## Описание


Свойство Orientation определяет
 вариант расположения измерений на панели измерений.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox
 с наименованием «TabSheetBox1» и ErAnalyzerDimPanel
 с наименованием «ErAnalyzerDimPanel1», используемых для управления данными
 экспресс-отчета и компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Begin

	    TabSheetBox1.Source := UiErAnalyzer1 As ITabSheetSource;

	    ErAnalyzerDimPanel1.Object := UiErAnalyzer1;

	    UiErAnalyzer1.Active := True;

	    ErAnalyzerDimPanel1.Orientation := EaxDimPanelOrientation.Vertical;

	End Sub Button1OnClick;


После выполнения примера, измерения на панели измерений будут расположены
 вертикально:


![](../../Enums/EaxDimPanelOrientation_v.gif)


См. также:


[IErAnalyzerDimPanel](IErAnalyzerDimPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
