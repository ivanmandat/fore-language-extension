# Пример создания компонента EaxDataBox

Пример создания компонента EaxDataBox
-


# Пример создания компонента EaxDataBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js
 и resources.ru.js.


2. Затем в теге <head> дополнительно задаётся стиль для элементов:


<style type="text/css">
    body, html {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>

3. Далее в теге <head> необходимо добавить скрипт, создающий контейнер
 для области данных экспресс-отчета [EaxDataBox](EaxDataBox.htm):


<script type="text/javascript">
    PP.setCurrentCulture(PP.Cultures.ru);
    var metabase, eaxAnalyzer, eaxMbService, eaxDataBox;
    function Ready() {
        // Создаём соединение с репозиторием
        metabase = new PP.Mb.Metabase({
            ExportUrl: "PPService.axd?action=export",
            ImportUrl: "PPService.axd?action=import",
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            }
        });
        // Открываем соединение с репозиторием
        metabase.open();

        // Создаём сервис для работы с экспресс-отчётами
        eaxMbService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        eaxAnalyzer = eaxMbService.editDocument(109);
        // Создаём контейнер для области данных экспресс-отчета
        eaxDataBox = new PP.Exp.Ui.EaxDataBox({
            ParentNode: "ExpressBox",
            Source: eaxAnalyzer, // Задаем источник данных
            Service: eaxMbService, // Задаем сервис
            Width: 600,
            Height: 600,

            ImagePath: "../Debug/img/", // Указываем путь к папке с пиктограммами
            // Задаем видимость кнопки для выбора режима отображения представлений данных
            EaxModeSelectorViewIsVisible: true,
            // Задаем видимость группы кнопок для выбора варианта представления данных
            EaxToolBarViewIsVisible: true,
            // Зададим режим отображения контейнера с заголовком и кнопками для выбора
            // варианта представления данных
            HeaderContainerVisibility: PP.Exp.Ui.HeaderContainerVisibility.ShowAll,
            // Зададим видимость панели вкладок в контейнере для области данных экспресс-отчета
            TabControl: {IsVisible: false},
            // Создаем обработчик события DataChanged
            DataChanged: function (sender, args) {

                   alert("Данные изменены");
            },
            // Устанавливаем обработчик события ActiveSheetChanged
            ActiveSheetChanged: function (sender, args) {
                alert("Изменен активный лист");
            },
            // Устанавливаем обработчик события DocDataChanged
            DocDataChanged: function (sender, args) {
                alert("Изменены данные в документе");
            },

            // Устанавливаем обработчик события DimSelectionChanged
            DimSelectionChanged: function (sender, args) {
                alert("Изменена отметка измерения в отчете");
            },
            // Устанавливаем обработчик события ObjSizeChanged
            ObjSizeChanged: function (sender, args) {
                alert("Размеры объекта изменены");
            },
            // Устанавливаем обработчик события RequestMetadata
            RequestMetadata: function (sender, args) {
               alert("Запрос метаданных");
            },

            // Устанавливаем обработчик события SheetClick
            SheetClick: function (sender, args) {
               alert("SheetClick");
            }

        });
        window.onresize(); // Изменяем размеры контейнера EaxDataBox
        // Обновляем все содержимое рабочей области экспресс-отчета
        eaxDataBox.refreshAll();
    };
    var idTime;
    // Функция для изменения размеров контейнера EaxDataBox при измерения размеров окна
    window.onresize = function updateSize() {

        if (idTime) clearTimeout(idTime);
        idTime = setTimeout(function () {
            if (eaxDataBox) {
                // Устанавливаем новые размеры для контейнера EaxDataBox
                eaxDataBox.setWidth(document.body.offsetWidth - 30);
                eaxDataBox.setHeight(document.body.offsetHeight - 30);
            }
            idTime = null;
        }, 100);
    };
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указываем
 название функции для создания рабочей области экспресс-отчета, а также
 размещаем блок с идентификатором «ExpressBox»:


<body onselectstart="return false" onload="Ready()">
    <div id="ExpressBox" style="height: 860px;"></div>
</body>

После выполнения примера на html-странице будет размещён компонент [EaxDataBox](EaxDataBox.htm), имеющий следующий вид:


![](../../../EaxDataBox_Example.png)


См. также:


[EaxDataBox](EaxDataBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
