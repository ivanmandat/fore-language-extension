# IEaxTableStyle.DefaultStyle

IEaxTableStyle.DefaultStyle
-


# IEaxTableStyle.DefaultStyle


## Синтаксис


DefaultStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство DefaultStyle определяет
 стиль, применяемый к различным элементам таблицы по умолчанию.


## Комментарии


По умолчанию в стиле DefaultStyle
 не заданы настройки оформления. Если в DefaultStyle
 задать какие-либо настройки стиля, то они будут применены ко всем элементам
 таблицы (заголовки строк/столбцов, ячейки с данными, угловая ячейка и
 так далее) если у этих элементов не определены собственные настройки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1» и каких-либо визуальных компонентов, отображающих данные
 экспресс-отчета, который подключен к «UiErAnalyzer1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Express: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	Begin

	    Express := UiErAnalyzer1.ErAnalyzer;

	    Grid := Express.Grid;

	    Style := Grid.Style;

	    //Стиль ячеек с данными

	    Style.InternalStyle.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Aquamarine"));

	    //Стиль по умолчанию

	    Style.DefaultStyle.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("LightGreen"));

	    Grid.Refresh;

	End Sub Button1OnClick;


При нажатии на кнопку будет задан цвет фона для ячеек с данными. Также
 будет определен цвет фона, который будут иметь все элементы таблицы, для
 которых не определен собственный цвет фона.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
