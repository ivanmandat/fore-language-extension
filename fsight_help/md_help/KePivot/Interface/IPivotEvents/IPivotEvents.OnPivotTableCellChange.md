# IPivotEvents.OnPivotTableCellChange

IPivotEvents.OnPivotTableCellChange
-


# IPivotEvents.OnPivotTableCellChange


## Синтаксис


OnPivotTableCellChange(Value: [IPivotTableCellEventArgs](../IPivotTableCellEventArgs/IPivotTableCellEventArgs.htm));


## Параметры


Value. Аргумент события, предоставляющий
 информацию о ячейке.


## Описание


Метод OnPivotTableCellChange
 реализует событие, которое наступает при изменении данных в ячейке таблицы.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компонент UiErAnalyzer с наименованием UiErAnalyzer1 и компонент EaxDocumentViewerBox.
 UiErAnalyzer1 установлен в качестве источника данных для EaxDocumentViewerBox.
 К UiErAnalyzer1 подключен какой-либо экспресс-отчёт.


Добавьте ссылки на системные сборки: Dimensions, Express, Pivot.


			Public Class Pivot_Events: PivotEvents

    // Событие, наступающее при редактировании ячейки

    Public Sub OnPivotTableCellChange(Value: IPivotTableCellEventArgs);

    Begin

        Debug.WriteLine("Изменяется ячейка " + Value.Row.ToString + ":" + Value.Column.ToString);

        If (Value.Row > 10) And (Value.Column > 10) Then

            Debug.WriteLine("Ячейка за пределами допустимого диапазона. Редактирование запрещено.");

            Value.Cancel := True;

        End If;

    End Sub OnPivotTableCellChange;

    // Событие, наступающее после редактировании ячейки

    Public Sub OnPivotTableCellChanged(Value: IPivotTableCellChangeEventArgs);

    Begin

        Debug.WriteLine("Ячейка изменена. Новое значение: " + Value.NewValue);

    End Sub OnPivotTableCellChanged;

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
 обработчик событий. При редактировании ячеек в консоли среды разработки
 будут фиксироваться координаты ячеек и новое значение. Если редактируемая
 ячейка выходит за диапазон десяти строк и столбцов, то для ячейки будет
 установлена отметка об отмене редактирования.


См. также:


[IPivotEvents](IPivotEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
