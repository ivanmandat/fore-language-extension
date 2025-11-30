# IPivot.MergedAdditionalNamingMode

IPivot.MergedAdditionalNamingMode
-


# IPivot.MergedAdditionalNamingMode


## Синтаксис


MergedAdditionalNamingMode: [PivotMergedNamingMode](../../Enums/PivotMergedNamingMode.htm);


## Описание


Свойство MergedAdditionalNamingMode
 определяет способ объединения дополнительных наименований элементов различных
 измерений.


## Комментарии


Для определения способа объединения наименований элементов различных
 измерений используйте свойство [IPivot.MergedNamingMode](IPivot.MergedNamingMode.htm).


## Пример


Для выполнения примера разместите на форме компоненты Button, TabSheetBox
 и UiErAnalyzer с идентификаторами «Button1», «TabSheetBox1» и «UiErAnalyzer1»
 соответственно. В качестве источника данных для «TabSheetBox1» укажите
 «UiErAnalyzer1». Источником данных для «UiErAnalyzer1» является экспресс-отчёт.


Добавьте ссылки на системные сборки: Dimension, Express, ExtCtrls, Forms,
 Pivot, Tab.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Pivot: IPivot;

    Key: Integer;

    DimSettings: IPivotDimensionSettingsEx;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Pivot := Eax.Pivot;

    // Зададим способ объединения и разделитель, который будет использоваться в дополнительном наименовании

    Pivot.MergedAdditionalNamingMode := PivotMergedNamingMode.UpperElement Or PivotMergedNamingMode.LowerElement;

    Pivot.MergedAdditionalNamingSeparator := " | ";

    // Получим ключ второго измерения, расположенного в боковике

    Key := Pivot.LeftHeader.Dim(1).Key;

    // Настроим измерения

    DimSettings := Pivot.Dimensions.FindByKey(Key).Settings;

    // Определим элемент, наименование которого будет объединено с элементами измерения на верхнем уровне

    DimSettings.MergedElement := 0;

    // Выведем в консоль информацию о дополнительных настройках измерений таблицы

    Debug.Write("Поджатие объединённых элементов измерения с элементами предыдущего измерения ");

    If DimSettings.MergeTopDown = True Then

        Debug.WriteLine("выполняется");

        Else

            Debug.WriteLine("не выполняется");

    End If;

    Debug.Write("Количество элементов в отметке после объединения: ");

    Debug.WriteLine(DimSettings.MergedSelection.SelectedCount);

End Sub Button1OnClick;


При нажатии на кнопку в боковике экспресс-отчёта будет включено объединение
 наименований элементов верхнего уровня с первым элементом второго измерения,
 в консоль будет выведена информация о дополнительных настройках измерений
 таблицы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
