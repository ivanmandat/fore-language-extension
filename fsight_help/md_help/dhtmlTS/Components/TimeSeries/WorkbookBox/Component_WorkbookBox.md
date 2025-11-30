# Пример создания компонента WorkbookBox

Пример создания компонента WorkbookBox
-


# Пример создания компонента WorkbookBox


Для выполнения примера необходимо наличие рабочей книги с ключом 66642.
 Создайте html-страницу и выполните следующие действия:


1. В теге <head> добавьте ссылки на js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js.


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


2. Добавьте скрипт для отображения рабочей книги:


<script text="text/javascript">
    PP.resourceManager.setRootResourcesFolder("../resources/");
    PP.setCurrentCulture(PP.Cultures.ru);
    var metabase, source, tsService, settings, workbookBox, metabase, waiter;
    var viewMode = false;
    try {
        PP.resourceManager.ResourcesLoaded.add(function () { PP.setCurrentCulture(PP.getCurrentCulture()); });
    }
    catch (e) { }
    PP.ImagePath = "../build/img/";
    PP.ScriptPath = "../build/";
    PP.CSSPath = "../build/";
    function Ready() {
        // Создадим индикатор загрузки
        waiter = new PP.Ui.Waiter();
        // Создадим соединение с репозиторием
        metabase = new PP.Mb.Metabase({
            PPServiceUrl: "PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: { UserName: "sa", Password: "Qwerty1" },
            StartRequest: function () { waiter.show(); },
            EndRequest: function () { waiter.hide(); },
            Error: function (sender, args) { alert(args.ResponseText); }
        });
        // Откроем соединение с репозиторием
        metabase.open();
        // Создадим сервис для работы с временными рядами
        tsService = new PP.TS.TSService({ Metabase: metabase });
        // Создадим обработчик события открытия документа
        var onFirstOpened = function (sender, args) {
            // Создадим экземляр класса отображения рабочей книги
            workbookBox = new PP.TS.Ui.WorkbookBox({
                ImagePath: "../build/img/", // Путь к папке с пиктограммами
                ParentNode: "WorkbookBox", // Родительский узел DOM
                Source: wbk, // Источник данных (рабочая книга, данные которой отображаются в компоненте)
                Service: tsService, // Сервис для работы с временными рядами
                // Установим ширину и высоту
                Width: (document.documentElement.clientWidth - 0),
                Height: (document.documentElement.clientHeight - 20)
            });
        };
        // Откроем рабочую книгу с ключом 66642
        wbk = tsService.editDocument(66642, onFirstOpened);
    };
</script>
3. В теге <body> в качестве значения атрибута «onLoad» укажите
 имя функции для загрузки рабочей книги:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()" style="margin: 0px">
    <div id="WorkbookBox"></div>
    <div id="params"></div>
</body>

В результате выполнения примера на html-странице будет размещена рабочая
 книга, имеющая следующий вид:


![](WorkBookbox.png)


См. также:


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
