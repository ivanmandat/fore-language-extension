# IChartAxis.AutoMinorTickSpace

IChartAxis.AutoMinorTickSpace
-


# IChartAxis.AutoMinorTickSpace


## Синтаксис


AutoMinorTickSpace: Boolean;


## Описание


Свойство AutoMinorTickSpace определяет значение шага для дополнительных делений оси значений.


## Комментарии


По умолчанию свойство имеет значение True. Значение шага рассчитывается автоматически из расчета 1/2 от основного деления. При установке для данного свойства значения False, появляется возможность установки пользовательского значения с помощью [IChartAxis.MinorTickSpace](IChartAxis.MinorTickSpace.htm).


Примечание. Установка свойства AutoMinorTickSpace для оси категорий не имеет смысла.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox, UiChart и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


			Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    UiChart1: UiChart;

    ChartBox1: ChartBox;

    Button1: Button;

   Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        ChartBox1.Chart.AxisY.MinorTick := True;

        ChartBox1.Chart.AxisY.AutoMinorTickSpace := False;

        ChartBox1.Chart.AxisY.MinorTickSpace := 200;
    End Sub Button1OnClick;

End Class TESTForm;


При нажатии кнопки «Button1» на оси Y появятся дополнительные деления с заданным шагом.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
