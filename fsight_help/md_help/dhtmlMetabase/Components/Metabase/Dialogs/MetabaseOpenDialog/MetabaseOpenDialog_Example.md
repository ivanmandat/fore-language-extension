# Пример создания компонента MetabaseOpenDialog

Пример создания компонента MetabaseOpenDialog
-


# Пример создания компонента MetabaseOpenDialog


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css и PP.Metabase.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Затем в теге <head> добавить сценарий, который создаст диалог
 для сохранения объекта в репозитории:


<script type="text/javascript">
    var metabase, eaxMdService, eaxAnalyzer, metabaseOpenDialog;
    // Функция, выполняемая при загрузке html-документа
    function onLoad() {
        // Укажем путь к корневой папке, содержащей файлы ресурсов
        PP.resourceManager.setRootResourcesFolder("../resources/");
        // Установим языковые настройки для ресурсов
        PP.setCurrentCulture(PP.Cultures.ru);
        // Создаём соединение с репозиторием
        metabase = new PP.Mb.Metabase({
            PPServiceUrl: "/PPService.axd?action=proxy",
            Id: "WAREHOUSE",
            UserCreds: {
                UserName: "user",
                Password: "password"
            }
        });
        // Открываем соединение с репозиторием
        metabase.open();
        // Создаем сервис для работы с экспресс-отчётами
        eaxMdService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Откроем экспресс-отчет с ключом 108
        eaxAnalyzer = eaxMdService.editDocument(108);
        // Определим массив фильтров для диалога
        var filters = [{
            Filters: [2561], // Отображаем только экспресс-отчёты
            // Укажем ключ ресурсов для получения наименования фильтра
            ResourceKey: "openDialogExpressReports"
        }];
        // Создадим диалог для сохранения объекта
        metabaseOpenDialog = new PP.Ui.MetabaseOpenDialog({
            Metabase: metabase,
            FiltersSet: filters, // Массив фильтров для диалога
            CurrentFilter: filters[0], // Текущий фильтр
            ImagePath: "../build/img/", // Путь к значкам диалога
            OpenToKey: parseInt(eaxAnalyzer.getParentKey() || 0) // Ключ текущей папки
        });
        metabaseOpenDialog.show(); // Отобразим диалог для сохранения объекта
    }
</script>

3. В теге <body> в качестве значения атрибута «onLoad» указать
 название функции, создающей диалог для сохранения объекта в репозиторий:


<body onload="onLoad();"></body>
После выполнения примера на html-странице будет размещён компонент [MetabaseOpenDialog](MetabaseOpenDialog.htm):


![](MetabaseOpenDialog.png)


См. также:


[MetabaseOpenDialog](MetabaseOpenDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
