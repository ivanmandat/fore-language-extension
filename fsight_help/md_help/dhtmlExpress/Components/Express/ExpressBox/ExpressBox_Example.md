# Пример создания компонента ExpressBox

Пример создания компонента ExpressBox
-


# Пример создания компонента ExpressBox


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие на файлы: PP.js, PP.Metabase.js, PP.App.js,
 PP.Express.js, resources.ru.js.


2. Добавьте [код
 для динамического подключения стилей](dhtml.chm::/DHTML_components_layout.htm#add_styles) PP.css, PP.App.css,
 PP.Express.css, PP.Metabase.css.


3. Затем в теге <head> дополнительно задаётся стиль для элементов:


<style type="text/css">
    body, html {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>


4. Далее в теге <head> необходимо добавить скрипт, создающий контейнер
 для экспресс-отчета [ExpressBox](ExpressBox.htm):


<script text="text/javascript">
    var expressBox, eaxMdService, eaxAnalyzer;
    PP.ImagePath = "../build/img/";
    PP.ScriptPath = "../build/";
    function Ready()   {
        var IMAGE_PATH = "build/img/"; // Путь к папке с пиктограммами
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        // Создаём соединение с репозиторием

        var metabase = new PP.Mb.Metabase({
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
        eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Открываем документ с ключом 108
        eaxAnalyzer = eaxMdService.editDocument(108);

        // Создаём компонент ExpressBox
        expressBox = new PP.Exp.Ui.ExpressBox({
            ParentNode: document.body,
            Source: eaxAnalyzer,
            Service: eaxMdService, // Задаём сервис
            ImagePath: IMAGE_PATH // Указываем путь к папке с пиктограммами
        });

        window.onresize(); // Изменяем размеры контейнера ExpressBox
    };
    var idTime;
    // Функция для изменения размеров контейнера ExpressBox при изменении размеров страницы
    window.onresize = function updateSize() {
        if (idTime)
            clearTimeout(idTime);

        idTime = setTimeout(function () {
            if (expressBox) {
                expressBox.setWidth(document.body.offsetWidth - 5);
                expressBox.setHeight(document.body.offsetHeight - 5);
            }
            idTime = null;
        }, 100);
    };
</script>
Примечание. Компонент ReportBox с подписками
 на события главного меню «Отчёт» реализуется при помощи компонента [PP.App.init](dhtmlApp.chm::/Classes/App/PP.App.init.htm)
 или конструктора [PP.Application.EaxModuleObject](dhtmlApp.chm::/Classes/Application/EaxModuleObject/Constructor_EaxModuleObject.htm).


Замените в скрипте строки создания компонента ExpressBox для использования
 PP.App.init:


PP.App.init(PP.App.ModuleType.Olap, { Metabase: {IsMbOpened: true}, Module: {
    Source : eaxAnalyzer,
    Service : eaxMdService,
    },
});
Для использования PP.App.PrxModuleObject:


var moduleObject = new PP.App.EaxModuleObject({ "Source": eaxAnalyzer, "Service": eaxMdService, "ParentNode": document.body });
expressBox = moduleObject.getReportBox();
5. В теге <body> в качестве значения атрибута «onLoad» указываем
 название функции для создания контейнера экспресс-отчета:


<body onload="Ready()">
</body>

После выполнения примера на html-странице будет размещён компонент [ExpressBox](ExpressBox.htm), имеющий следующий вид:


![](ExpressBox.png)


См. также:


[ExpressBox](ExpressBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
