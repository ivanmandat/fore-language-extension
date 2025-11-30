# IChartAxis.MinorTickSpace

IChartAxis.MinorTickSpace
-


# IChartAxis.MinorTickSpace


## Синтаксис


MinorTickSpace: Double;


## Описание


Свойство MinorTickSpace для оси значений позволяет рассчитать шаг между дополнительными делениями.


## Комментарии


Свойство работает для основной и дополнительной осей значений. Для использования данного свойства необходимо установить свойству MinorTick значение True, а свойству AutoMinorTickSpace значение False.


Свойство MinorTickSpace для оси категорий задает число промежуточных делений между основными, учитывая только видимые деления. Значение по умолчанию равно 0, каждая метка считается основной. Свойство задает целое число (при этом дробная часть отбрасывается), которое определяет число дополнительных делений между основными.


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
