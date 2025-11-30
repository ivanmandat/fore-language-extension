# Пример создания компонента DimViewOptionsDialog

Пример создания компонента DimViewOptionsDialog
-


# Пример создания компонента DimViewOptionsDialog


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Затем в теге <head> дополнительно задаётся стиль для элементов:


<style type="text/css">
body, html
{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>

3. Далее в теге <head> необходимо добавить скрипт, который создает
 диалог для настройки размещения измерений:


<script type="text/javascript">
var metabase, eaxAnalyzer, eaxMbService, waiter, dimViewOptionsDialog;
var IMAGE_PATH = "../Debug/img/";
var info, eax;
function Ready() {
    // Установим языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru)
    // Укажем путь к корневой папке, содержащей файлы ресурсов
    PP.resourceManager.setRootResourcesFolder("../resources/");
    waiter = new PP.Ui.Waiter();
    // Создаём соединение с репозиторием
    metabase = new PP.Mb.Metabase({
        ExportUrl: "PPService.axd?action=export",
        ImportUrl: "PPService.axd?action=import",
        PPServiceUrl: "PPService.axd?action=proxy",
        Id: "WAREHOUSE",
        UserCreds: { UserName: "user", Password: "password" },
        StartRequest: function () {
            // При запросе метаданных показываем компонент типа PP.Ui.Waiter
            waiter.show();
        },
        EndRequest: function () {
            // После запроса метаданных скрываем компонент типа PP.Ui.Waiter
            waiter.hide();
        },
        Error: function (sender, args) {
            // В случае ошибки выводим описание данной ошибки
            alert(args.ResponseText);
        }
    });
    // Открываем соединение с репозиторием
    metabase.open();
    // Создаём сервис для работы с экспресс-отчетами
    eaxMbService = new PP.Exp.EaxMdService({ Metabase: metabase });
    // Открываем экспресс-отчёт с ключом 108
    eaxAnalyzer = eaxMbService.editDocument(108);
}
// Функция, создающая диалог для настройки размещения измерений
function openDialog() {
    // Создаем диалог экспорта
    dimViewOptionsDialog = new PP.Exp.Ui.DimViewOptionsDialog({
        ResourceKey: "DimViewOptionsDialog",
        Source: eaxAnalyzer,
        ActiveDimMeta: null, // Зададим метаданные текущего измерения
        Width: 430,
        Height: 420
    });
    // Показываем диалог
    dimViewOptionsDialog.show();
    // Обновляет диалог
    dimViewOptionsDialog.refreshAll();
}
</script>

4. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции для загрузки документа экспресс-отчета, внутри тега размещаем
 кнопку, по нажатию на которую будет создан диалог для настройки размещения
 измерений:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
    <!-- Кнопка, по нажатию на которую будет создан диалог для настройки размещения измерений -->
    <input type="button" value="Создать диалог" onclick="openDialog()" />
</body>
5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В результате выполнения примера после нажатия кнопки «Создать диалог»
 на html-странице будет размещен компонент [DimViewOptionsDialog](DimViewOptionsDialog.htm):


![](DimViewOptionsDialog.png)


См. также:


[DimViewOptionsDialog](DimViewOptionsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
