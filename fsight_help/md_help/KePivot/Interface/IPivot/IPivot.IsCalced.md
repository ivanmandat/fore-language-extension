# IPivot.IsCalced

IPivot.IsCalced
-


# IPivot.IsCalced


## Синтаксис


IsCalced: Boolean;


## Описание


Свойство IsCalced возвращает
 признак расчёта данных таблицы.


## Комментарии


Допустимые значения:


	- True. Данные таблицы
	 рассчитаны;


	- False. Данные таблицы
	 не рассчитаны.


## Пример


Для выполнения примера разместите на форме два компонента Button и компоненты
 ReportBox, UiReport с наименованиями «Button1», «Button2», «ReportBox1»,
 «UiReport1» соответственно. Для «ReportBox1» укажите источник данных «UiReport1».
 Для «UiReport1» источником данных является регламентный отчёт, построенный
 на срезе стандартного куба.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Metabase,
 Pivot, Report, Tab, Ui.


Пример является обработчиком события OnClick для компонентов «Button1»
 и «Button2».


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    // Вычислим отчёт

    UiReport1.Report.Recalc;

End Sub Button1OnClick;

Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Pivot: IPivot;

Begin

    MB := MetabaseClass.Active;

    Pivot := (UiReport1.Report.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice).Pivot;

    // Проверим расчёт данных таблицы

    If Pivot.IsCalced=True Then

        WinApplication.InformationBox ("Данные таблицы рассчитаны");

        Else

            WinApplication.InformationBox ("Данные таблицы не рассчитаны");

    End If;

End Sub Button2OnClick;


При нажатии на первую кнопку будет выполнен расчёт данных. После нажатия
 на вторую кнопку будет выведено сообщение о результате выполнения расчёта
 данных таблицы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
