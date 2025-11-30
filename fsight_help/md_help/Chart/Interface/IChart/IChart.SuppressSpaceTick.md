# IChart.SuppressSpaceTick

IChart.SuppressSpaceTick
-


# IChart.SuppressSpaceTick


## Синтаксис


SuppressSpaceTick: Boolean;


## Описание


Свойство SuppressSpaceTick определяет, будут ли отображаться дополнительные деления, относящиеся к пропущенным именам точек на оси категорий.


## Комментарии


При использовании свойства IChart.TickLabelSpacing дополнительные деления для пропущенных имен точек не отображаются. Если свойству SuppressSpaceTick задано значение True (устанавливается по умолчанию), дополнительные деления не отображаются. При установке значения False дополнительные деления для пропущенных подписей отображаются.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных для ChartBox.


			Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    ChartBox1: ChartBox;

    Button1: Button;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        ChartBox1.Chart.TickLabelSpacing := 2;

        ChartBox1.Chart.SuppressSpaceTick := False;

    End Sub Button1OnClick;

End Class TESTForm;


При нажатии кнопки «Button1» для пропущенных подписей будут отображаться деления.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
