# Пример создания компонента EaxModeSelector

Пример создания компонента EaxModeSelector
-


# Пример создания компонента EaxModeSelector


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

3. Далее в теге <head> необходимо добавить скрипт, создающий кнопку
 для выбора режима отображения представлений данных:


<script type="text/javascript">
var metabase, eaxAnalyzer, eaxMbService, modeSelector;
function Ready() {
    // Установим языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru)
    // Укажем путь к корневой папке, содержащей файлы ресурсов
    PP.resourceManager.setRootResourcesFolder("../resources/");
    // Создаём соединение с репозиторием
    metabase = new PP.Mb.Metabase({
        ExportUrl: "PPService.axd?action=export",
        ImportUrl: "PPService.axd?action=import",
        PPServiceUrl: "PPService.axd?action=proxy",
        Id: "WAREHOUSE",
        UserCreds: { UserName: "user", Password: "password" }
    });
    // Открываем соединение с репозиторием
    metabase.open();
    // Создаём сервис для работы с экспресс-отчетами
    eaxMbService = new PP.Exp.EaxMdService({ Metabase: metabase });
    // Открываем экспресс-отчёт с ключом 108
    eaxAnalyzer = eaxMbService.editDocument(108);
    // Указываем путь к папке с пиктограммами
    var IMAGE_PATH = "../Debug/img/";
    // Создаем кнопку «Раскладка» для выбора режима отображения представлений данных
    modeSelector = new PP.Exp.Ui.EaxModeSelectorView({
        Source: eaxAnalyzer,
        ImagePath: IMAGE_PATH
    });
    // Добавляем кнопку к документу
    modeSelector.addToNode(document.body);
}
</script>

4. В теге <body> в качестве значения атрибута «onLoad» указываем
 название функции для создания кнопки выбора режима отображения представлений
 данных:


<body onselectstart="return false" onload="Ready()">
</body>

5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещена кнопка для
 выбора режима отображения представлений данных:


![](EaxModeSelector.png)


См. также:


[EaxModeSelector](EaxModeSelector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
