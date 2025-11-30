# IUndoRedo.Storage

IUndoRedo.Storage
-


# IUndoRedo.Storage


## Синтаксис


Storage: [IUndoRedoStorage](../IUndoRedoStorage/IUndoRedoStorage.htm);


## Описание


Свойство Storage возвращает
 хранилище сводной информации стека изменений.


## Комментарии


В сводной информации хранится общее количество действий повтора/отмены,
 доступных для текущего объекта, а также его дочерних объектов.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней компонентов ReportBox и UiReport и четырёх кнопок. Для кнопок создайте
 обработчики событий. Компонент UiReport является источником данных для
 ReportBox. В отчёте. который подключен к компоненту UiReport, на активном
 листе расположена диаграмма.


Добавьте ссылки на системные сборки: Report, Tab.


			Class SAMPLEForm: Form

    UiReport1: UiReport;

    ReportBox1: ReportBox;

    Button1: Button;

    Button2: Button;

    Button3: Button;

    Button4: Button;

    CheckBox1: CheckBox;

    URReport, URChart: IUndoRedo;


    Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        Report: IPrxReport;

        Tab: ITabSheet;

        Chart: IPrxChart;

    Begin

        Report := UiReport1.Report;

        // Стек изменений всего отчёта

        URReport := Report.UndoRedo;

        URReport.Enabled := True;

        URReport.Limit := 20;

        // Стек изменений диаграммы

        Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

        Chart := Tab.Objects.Item(0).Extension As IPrxChart;

        URChart := Chart.UndoRedo;

    End Sub SAMPLEFormOnCreate;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Debug.WriteLine("---Undo/Redo Report---");

        Debug.WriteLine("   Enabled: " + URReport.Enabled.ToString);

        Debug.WriteLine("   RedoCount: " + URReport.RedoCount.ToString);

        Debug.WriteLine("   UndoCount: " + URReport.UndoCount.ToString);

        Debug.WriteLine("   Storage count: " + URReport.Storage.Count.ToString);

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Debug.WriteLine("---Undo/Redo Chart---");

        Debug.WriteLine("   Enabled: " + URChart.Enabled.ToString);

        Debug.WriteLine("   RedoCount: " + URChart.RedoCount.ToString);

        Debug.WriteLine("   UndoCount: " + URChart.UndoCount.ToString);

    End Sub Button2OnClick;


    Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If URReport.UndoCount <> 0 Then

            URReport.Undo;

        End If;

    End Sub Button3OnClick;


    Sub Button4OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        If URReport.RedoCount <> 0 Then

            URReport.Redo;

        End If;

    End Sub Button4OnClick;

End Class SAMPLEForm;


При запуске формы будут получены данные стека изменений загруженного
 отчёта и диаграммы, которая расположена на активном листе. При нажатии
 на первую кнопку в консоль среды разработки будет выведена информация
 о текущем состоянии стека изменений самого отчёта, включая сводную информацию
 о всех доступных действиях. При нажатии на вторую кнопку в консоль среды
 разработки выводится информация о стеке изменений диаграммы. Третья и
 четвертая кнопки позволяют отменять или повторять действия, произведённые
 в отчёте.


См. также:


[IUndoRedo](IUndoRedo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
