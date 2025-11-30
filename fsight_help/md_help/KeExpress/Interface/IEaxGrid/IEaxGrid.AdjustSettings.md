# IEaxGrid.AdjustSettings

IEaxGrid.AdjustSettings
-


# IEaxGrid.AdjustSettings


## Синтаксис


AdjustSettings: [IEaxGridAdjustSettings](../IEaxGridAdjustSettings/IEaxGridAdjustSettings.htm);


## Описание


Свойство AdjustSettings возвращает
 параметры автоподбора размера ячеек.


## Комментарии


По умолчанию установлена автоматическая подгонка размера ячеек по параметрам,
 заданным пользователем. Параметры задаются через свойства [IEaxGridAdjustSettings.MaxRowsInCell](../IEaxGridAdjustSettings/IEaxGridAdjustSettings.MaxRowsInCell.htm)
 и [IEaxGridAdjustSettings.MinVisibleDataColumns](../IEaxGridAdjustSettings/IEaxGridAdjustSettings.MinVisibleDataColumns.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Express».
 Предполагается наличие экспресс-отчета в репозитории и формы. Расположите
 на форме кнопку с наименованием «Button1», компоненты TabSheetBox и UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющимся источником данных для компонента
 TabSheetBox.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    EaxGrid: IEaxGrid;

	    AdjustSettings: IEaxGridAdjustSettings;

	Begin

	    UiErAnalyzer1.Active := True;

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    EaxGrid := Analyzer.Grid;

	    AdjustSettings := EaxGrid.AdjustSettings;

	    Analyzer.BeginUpdate;

	    AdjustSettings.Mode := EaxAdjustMode.Auto;

	    AdjustSettings.MinVisibleDataColumns := 2;

	    AdjustSettings.MaxRowsInCell := 3;

	    Analyzer.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера для таблицы экспресс-отчета будет включена
 автоматическая подгонка размера ячеек: максимально допустимое чисто строк
 в ячейке - 3; минимальное чисто столбцов в области данных - 2. Пример
 отчета с указанными параметрами автоматической подгонки:


![](../../Enums/EaxAdjustMode_Auto.gif)


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
