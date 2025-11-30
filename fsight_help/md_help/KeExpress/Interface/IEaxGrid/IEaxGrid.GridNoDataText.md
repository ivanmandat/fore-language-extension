# IEaxGrid.GridNoDataText

IEaxGrid.GridNoDataText
-


# IEaxGrid.GridNoDataText


## Синтаксис


GridNoDataText: String;


## Описание


Свойство GridNoDataText задаёт
 текст для ячеек табличного визуализатора, если срез данных не содержит
 данные.


## Комментарии


Свойство доступно только для просмотра в рамках открытого отчёта, значения
 данного свойства не сохраняются с отчётом.


## Пример


Для выполнения примера разместите на форме компоненты Button, EditBox,
 ReportBox и UiReport с наименованиями «Button1», «EditBox1», «ReportBox1»
 и «UiReport1» соответственно. В качестве источника данных для «ReportBox1»
 укажите «UiReport1». Источником данных для «UiReport1» является регламентный
 отчёт, на лист которого добавлен табличный визуализатор, построенный на
 срезе данных. Для компонента UiReport установите свойству Active
 значение True.


Добавьте ссылки на системные сборки: Express, Forms, Report.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    Object: IEaxObject;

	    Grid: IEaxGrid;

	Begin

	    // Получим регламентный отчёт

	    Report := UiReport1.Report;

	    // Получим аналитическую область данных

	    DataArea := Report.DataArea;

	    // Обратимся к объекту отчёта

	    Object := DataArea.Views.Item(0);

	    // Получим таблицу

	    Grid := Object As IEaxGrid;

	    // Установим текст для ячеек табличного визуализатора

	    Grid.GridNoDataText := EditBox1.Text;

	    // Вычислим отчёт

	    UiReport1.Report.Recalc;

	End Sub Button1OnClick;


После нажатия на кнопку, если срез не содержит данных, то для ячеек
 табличного визуализатора будет отображён текст, введённый в редактор текста.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
