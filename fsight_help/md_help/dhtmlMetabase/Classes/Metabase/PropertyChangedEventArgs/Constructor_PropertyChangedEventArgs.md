# Конструктор PropertyChangedEventArgs

Конструктор PropertyChangedEventArgs
-


# Конструктор PropertyChangedEventArgs


## Синтаксис


PropertyChangedEventArgs(settings);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор PropertyChangedEventArgs создает экземпляр класса [PropertyChangedEventArgs](PropertyChangedEventArgs.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей области экспресс-отчёта. Скроем заголовки данной таблицы и обновим отчёт для отображения изменений:


// Получим представление таблицы экспресс-отчёта
var gridView = expressBox.getDataView().getGridView();
// Обработаем событие PropertyChanged
gridView.PropertyChanged.add(function (sender, args) {
    if (!args.isCanceled()) {
        // Если событие не отменено, то вызываем возратную функцию
        args.fireCallback(sender, args);
    };
});
// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox._Service;
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
var metadata = false; // Скроем заголовки таблицы экспресс-отчёта
// Определим возвратные функции
var onPropertyChanged = function (sender, args) {
    // Вызовем событие PropertyChanged
    gridView.PropertyChanged.fire(gridView, args.Args);
};
var onPostPropertyChanged = function (sender, args) {
    // Обновим экспресс-отчет
    expressBox.refreshAll();
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    Callback: PP.Delegate(this.onPostPropertyChanged, eaxMdService, args),
    // Укажем, что изменяются свойства заголовков таблицы экспресс-отчёта
    PropertyName: PP.Exp.Ui.ControlType.Headers,
    // Укажем, что заголовки таблицы экспресс-отчёта нужно скрыть
    Metadata: metadata,
    // Обновить модель данных нужно через сервис
    ModelUpdateData: PP.Exp.Ui.ModelUpdate.Service,
    // Необходимо обновить таблицу и панель свойств экспресс-отчёта
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.Table, PP.Exp.Ui.ViewTypeUpdate.PropertyBar]
});
// Установим значение видимости заголовков таблицы
eaxMdService.setTabSheetHeaders(eaxAnalyzer, metadata,
    PP.Delegate(this.onPropertyChanged, eaxMdService, args));

В результате выполнения примера были скрыты заголовки таблицы экспресс-отчета, а сам отчёт был обновлён:


См. также:


[PropertyChangedEventArgs](PropertyChangedEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
