# IPivotEvents.OnHeaderChange

IPivotEvents.OnHeaderChange
-


# IPivotEvents.OnHeaderChange


## Синтаксис


OnHeaderChange(Value: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm));


## Параметры


Value. Данные измерения, которое
 связано с изменением заголовка таблицы.


## Описание


Метод OnHeaderChange реализует
 событие, которое наступает при изменении заголовка таблицы.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компонент UiErAnalyzer с наименованием UiErAnalyzer1, компонент EaxDocumentViewerBox
 и ErAnalyzerDimPanel. UiErAnalyzer1 установлен в качестве источника данных
 для EaxDocumentViewerBox и ErAnalyzerDimPanel. К UiErAnalyzer1 подключен
 какой-либо экспресс-отчёт.


Добавьте ссылки на системные сборки: Dimensions, Express, Pivot.


			Public Class Pivot_Events: PivotEvents

    // Событие, наступающее перед изменением заголовка

    Public Sub OnHeaderChange(Value: IDimInstance);

    Begin

        Debug.WriteLine("Изменён заголовок. Используемое измерение: " + Value.Name + '(' + Value.Ident + ')');

    End Sub OnHeaderChange;

End Class Pivot_Events;


Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    EaxDocumentViewerBox1: EaxDocumentViewerBox;

    ErAnalyzerDimPanel1: ErAnalyzerDimPanel;

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
 обработчик событий. При изменении структуры заголовков в компоненте ErAnalyzerDimPanel
 в консоль среды разработки будет выводиться информация о перемещаемом
 измерении.


См. также:


[IPivotEvents](IPivotEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
