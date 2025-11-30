# Пример совместного размещения EaxPropertyBar и EaxGrid

Пример совместного размещения EaxPropertyBar и EaxGrid
-


# Пример совместного размещения EaxPropertyBar и EaxGrid


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Затем в теге <head> необходимо добавить скрипт, создающий панель
 свойств и контейнер с таблицей [EaxGrid](../../../Classes/Express/EaxGrid/EaxGrid.htm).
 При этом предполагается наличие в репозитории экспресс-отчёта с ключом
 4369:


<script type="text/javascript">
    PP.ImagePath = "../build/img/"; // Путь к папке с изображениями
    PP.ScriptPath = "../build/"; // Путь к папке со сценариями
    PP.CSSPath = "../build/"; // Путь к папке с файлами стилей
    var eaxGrid, eaxPropBar;
    function Ready() {
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        var waiter = new PP.Ui.Waiter();
        // Создадим соединение с репозиторием
        metabase = new PP.Mb.Metabase({

            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            },
            StartRequest: function () {
                // При запросе метаданных отобразим компонент типа PP.Ui.Waiter
                waiter.show();
            },

            EndRequest: function (sender, args) {
                // Скроем компонент типа PP.Ui.Waiter
                waiter.hide();
            },
            Error: function (sender, args) {
                // Выведем описание ошибки
                console.log(args.ResponseText);
            }
        });
        // Откроем соединение с репозиторием
        metabase.open();

        // Создадим сервис для работы с экспресс-отчётами
        var eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Откроем экспресс-отчет с ключом 4369
        eaxAnalyzer = eaxMdService.open(4369);
        // Создадим контейнер для таблицы экспресс-отчета
        eaxGrid = new PP.Exp.Ui.EaxGrid({
            Source: eaxAnalyzer, // Источник данных для таблицы
            ParentNode: "divTable",
            EditMode: true, // Флаг «Режим редактирования»
            VisibleHeaders: true, // Отобразим заголовки строк и столбцов таблицы
            Width: 300,

            Height: 430,
            Service: eaxMdService,
            // После выделения в таблице изменения отправляем сразу на сервер
            AutoSendSelection: true,
            // Уберем пункт "Настройка" в контекстном меню таблицы
            ShowSettingsMenuItem: false,
            // Уберем кнопку контекстного меню
            ShowContextButton: false,
            // Зададим задержку изменения выделения таблицы
            DeferSelectionChangedDelay: 300,
            // Разрешим поднятие отметки на уровень вверх по иерархии
            UseShiftDrillUp: true,
            // Установим обработчик события MetadataChanged
            MetadataChanged: function (sender, args) {

                console.log("Метаданные изменены");
            },
            // Установим обработчик события DataChanged
            DataChanged: function (sender, args) {
                console.log("Данные изменены");
            },
            // Установим обработчик события ExpanderAction
            ExpanderAction: function (sender, args) {
                console.log("Экспандер развернут");
            },
            // Установим обработчик события HyperlinkMouseDown
            HyperlinkMouseDown: function (sender, args) {
                console.log("Нажата гиперссылка");
            },

            // Установим обработчик события PictureMouseDown
            PictureMouseDown: function (sender, args) {
                console.log("Нажата пиктограмма в таблице");
            },
            // Установим обработчик события для свойства PropertyChanged
            PropertyChanged: function (sender, args) {
                console.log("Свойство изменено");
            },
            // Установим обработчик события для свойства Rendered
            Rendered: function (sender, args) {
                console.log("Таблица перерисована");
            },

            // Установим обработчик события для свойства RequestMetadata
            RequestMetadata: function (sender, args) {
                console.log("Запрос метаданных");
            },
            // Установим обработчик события для свойства SelectionChanged
            SelectionChanged: function (sender, args) {
                console.log("Выделенная в таблице область изменена");
            },
            // Установим обработчик события для свойства SelectionChanging
            SelectionChanging: function (sender, args) {
                // Выводим в консоль уведомление об изменении выделенной области
                console.log("Изменение выделенной области");
            },

            // Установим обработчик события для свойства StructureChanged
            StructureChanged: function (sender, args) {
                console.log("Структура таблицы изменена");
            }
        });
        // Обновим всё содержимое таблицы
        eaxGrid.refreshAll();
        // Обновим столбец таблицы с легендой для диаграммы
        eaxGrid.updateLegendColumn();
        // Создадим панель свойств экспресс-отчета

        eaxPropBar = new PP.Exp.Ui.EaxPropertyBar({
            ParentNode: "propertyBar",
            Source: eaxAnalyzer, // Указываем источник данных
            Width: 300,
            Height: 430,
            Service: eaxMdService,
            DimViewMode: PP.Exp.Ui.DimViewMode.Classic,
            DataView: eaxGrid // Панель свойств привязаваем к таблице
        });

        // Загрузим региональные настройки
        eaxPropBar.loadFile("../Resources/resources.ru.js");
        // Получим панель «Вид»
        var tableVP = eaxPropBar.getTableViewPanel();
        // Отобразим данную панель
        tableVP.show();
        // Развернём её
        tableVP.expand();
    };
</script>
3. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для загрузки документа экспресс-отчёта, пузырьковой диаграммы
 и панели свойств, а также разместить блоки с идентификаторами «propertyBar»
 и «divTable» :


<body onload="Ready()">
    <div id="propertyBar" style="float: left;"></div>
    <div id="divTable" style="float: left; margin-left: 10px"></div>
</body>
После выполнения примера на html-странице будут размещены компоненты
 [EaxPropertyBar](../EaxPropertyBar/EaxPropertyBar.htm) и [EaxGrid](EaxGrid.htm):


![](EaxGridExample.png)


В процессе их загрузки будут отображаться окна с уведомлениями
 о запросе метаданных и о перерисовке таблицы. На панели свойств будет
 отображена и раскрыта [вкладка
 «Вид](../../../Classes/Express/TableViewPanel/TableViewPanel.htm)».


См. также:


[EaxGrid](EaxGrid.htm)
 | [EaxPropertyBar](../EaxPropertyBar/EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
