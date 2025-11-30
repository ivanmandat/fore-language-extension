# Конструктор FilterLinkAttrDialog

Конструктор FilterLinkAttrDialog
-


# Конструктор FilterLinkAttrDialog


## Синтаксис


PP.Exp.Ui.FilterLinkAttrDialog(settings);


## Параметры


*settings.* JSON-объект со значениями [свойств
 класса](FilterLinkAttrDialog.htm).


Пример задания параметра settings
 с использованием унаследованных свойств:


// Зададим ширину и высоту диалога из JSON
var dialog = new PP.Exp.Ui.FilterLinkAttrDialog({
    Width: 300,
    Height: 200
});

## Описание


Конструктор FilterLinkAttrDialog
 создает экземпляр класса FilterLinkAttrDialog.


## Пример


Для выполнения примера необходимо наличие экспресс-отчета с ключом «65760»
 в репозитории. Создайте html-страницу и выполните следующие действия:


1. В теге <head> добавьте ссылки на js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.App.js;


	- PP.Express.js;


	- resources.ru.js;


	- PP.css;


	- PP.App.css;


	- PP.Express.css;


	- PP.Metabase.css.


2. Добавьте скрипт, открывающий экспресс-отчет с диалогом фильтрации
 по связям атрибутов:


<script type="text/javascript">
    var expressBox, eaxMdService, eaxAnalyzer;
    PP.ImagePath = "build/img/";
    PP.ScriptPath = "build/";
    function Ready()   {
        // Зададим путь к папке с пиктограммами
        var IMAGE_PATH = "build/img/";
        // Установим языковые настройки для ресурсов
        PP.resourceManager.setRootResourcesFolder("resources/");
        PP.setCurrentCulture(PP.Cultures.ru);
        // Создадим соединение с репозиторием
        var metabase = new PP.Mb.Metabase({
            PPServiceUrl: "PPService.axd",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            }
        });
        // Откроем соединение с репозиторием
        metabase.open();
        // Создадим сервис для работы с экспресс-отчетами
        eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Откроем экспресс-отчет с ключом 65760
        eaxAnalyzer = eaxMdService.editDocument(65760);
        dialog = new PP.Exp.Ui.FilterLinkAttrDialog({
            Source: eaxAnalyzer
        });
        dialog.show();
        var moduleObject = new PP.App.EaxModuleObject({
            "Source": eaxAnalyzer,
            "Service": eaxMdService,
            "ParentNode": document.body,
            "ImagePath": IMAGE_PATH
        });
        expressBox = moduleObject.getReportBox();
    };
</script>
3. В теге <body> в качестве значения атрибута «onLoad» укажите
 имя функции для открытия экспресс-отчета и диалога фильтрации:


<body onload="Ready()">
</body>
В результате выполнения примера будет открыт экспресс-отчет и диалог
 фильтрации по связям атрибутов.


См. также:


[FilterLinkAttrDialog](FilterLinkAttrDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
