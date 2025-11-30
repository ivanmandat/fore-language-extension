# IPivotEvents.OnBeforeDataSourceExecute

IPivotEvents.OnBeforeDataSourceExecute
-


# IPivotEvents.OnBeforeDataSourceExecute


## Синтаксис


OnBeforeDataSourceExecute(DestinationSel: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


DestinationSel. Отметка измерений
 источника, в соответствии с которой осуществляется вычисление источника
 данных.


## Описание


Метод OnBeforeDataSourceExecute
 реализует событие, которое наступает перед вычислением источника данных.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компонент UiErAnalyzer с наименованием UiErAnalyzer1 и компонент EaxDocumentViewerBox.
 UiErAnalyzer1 установлен в качестве источника данных для EaxDocumentViewerBox.
 К UiErAnalyzer1 подключен какой-либо экспресс-отчёт.


Добавьте ссылки на системные сборки: Dimensions, Express, Pivot.


			Public Class Pivot_Events: PivotEvents

    // Событие, наступающее перед
 вычислением источника данных

    Public Sub OnBeforeDataSourceExecute(DestinationSel: IDimSelectionSet);

    Var

        Sel: IDimSelection;

    Begin

        Debug.WriteLine("Отмечено в измерениях:");

        Debug.Indent;

        For Each Sel In DestinationSel Do

            Debug.WriteLine(Sel.Dimension.Ident + ": " + Sel.SelectedCount.ToString);

        End For;

        Debug.Unindent;

    End Sub OnBeforeDataSourceExecute;

End Class Pivot_Events;


Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    EaxDocumentViewerBox1: EaxDocumentViewerBox;

    Pvt: IPivot;

    Cookie: Integer;


    Sub TESTFormOnShow(Sender: Object; Args: IEventArgs);

    Var

        Express: IEaxAnalyzer;

        Events: Pivot_Events;

    Begin

        // Получим экспресс-отчет

        Express := UiErAnalyzer1.ErAnalyzer;

        // Получим настройки отображения таблицы данных отчета

        Pvt := Express.Pivot;

        // Включим возможность генерации событий

        Pvt.EventsEnabled := True;

        // Создадим экземпляр класса для обработк событий

        Events := New Pivot_Events.Create;

        // Подключим обработчик событий для таблицы

        Cookie := Pvt.AddEventHandler(Events);

    End Sub TESTFormOnShow;


    Sub TESTFormOnClose(Sender: Object; Args: IEventArgs);

    Begin

        // Удалим обработчик событий

        Pvt.RemoveEventHandler(Cookie);

    End Sub TESTFormOnClose;

End Class TESTForm;


При запуске формы для таблицы экспресс-отчёта будет подключен пользовательский
 обработчик событий. Перед вычислением источника данных в окно консоли
 будет выводиться информация о выставленной отметке.


См. также:


[IPivotEvents](IPivotEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
