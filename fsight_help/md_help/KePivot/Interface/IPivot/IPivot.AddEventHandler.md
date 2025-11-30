# IPivot.AddEventHandler

IPivot.AddEventHandler
-


# IPivot.AddEventHandler


## Синтаксис


AddEventHandler(Events: [IPivotEvents](../IPivotEvents/IPivotEvents.htm)):
 Integer;


## Параметры


Events. Класс обработчика событий
 таблицы.


## Описание


Метод AddEventHandler определяет
 обработчик событий таблицы.


## Комментарии


Обработчик событий таблицы используется только в рамках сессии и не
 сохраняется вместе с отчётом. Результатом выполнения метода будет уникальный
 индекс обработчика, который в дальнейшем может использоваться в методе
 [RemoveEventHandler](IPivot.RemoveEventHandler.htm) для отключения
 обработчика событий.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- формы, содержащей следующие компоненты:


		- [EaxDocumentViewerBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxDocumentViewerBox.htm)
		 с наименованием «EaxDocumentViewerBox1»;


		- [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
		 с наименованием «UiErAnalyzer1», который служит источником данных
		 для «EaxDocumentViewerBox1»;


	- экспресс-отчёта, являющегося источником данных для «UiErAnalyzer1».
	 Отчёт содержит таблицу.


Подключение обработчика будет осуществляться при открытии формы. Удаление
 обработчика событий - при закрытии формы.


Добавьте ссылки на системные сборки: Dimensions, Express, Pivot.


			// Обработчик событий

Public Class Pivot_Events: PivotEvents

    // Событие, наступающее при редактировании содержимого отметки измерения

    Public Sub OnSelectionContentChange(Value: IDimInstance);

    Begin

        WinApplication.InformationBox("Произошло событие OnSelectionContentChange для " + Value.Ident);

    End Sub OnSelectionContentChange;

End Class Pivot_Events;


Class EVENTHANDLERForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    EaxDocumentViewerBox1: EaxDocumentViewerBox;

    Pvt: IPivot;

    Cookie: Integer;


    // Открытие формы

    Sub EVENTHANDLERFormOnShow(Sender: Object; Args: IEventArgs);

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

    End Sub EVENTHANDLERFormOnShow;


    // Закрытие формы

    Sub EVENTHANDLERFormOnClose(Sender: Object; Args: IEventArgs);

    Begin

        // Удалим обработчик событий

        Pvt.RemoveEventHandler(Cookie);

    End Sub EVENTHANDLERFormOnClose;

End Class EVENTHANDLERForm;


После запуска формы переименуйте элемент измерения, который отображается
 в шапке/боковике таблицы. В результате срабатывания события в окно консоли
 среды разработки будет выведен идентификатор измерение, у которого переименовали
 элемент.


См. также:


[IPivot](IPivot.htm)
 | [IPivot.RemoveEventHandler](IPivot.RemoveEventHandler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
