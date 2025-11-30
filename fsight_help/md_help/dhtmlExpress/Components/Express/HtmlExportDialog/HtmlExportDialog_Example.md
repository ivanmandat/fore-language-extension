# Пример создания компонента HtmlExportDialog

Пример создания компонента HtmlExportDialog
-


# Пример создания компонента HtmlExportDialog


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css, PP.Metabase.css.


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
 диалог для экспорта экспресс-отчета в файл формата HTML:


<script type="text/javascript">
    var metabase, eaxAnalyzer, eaxMbService, settings, expressBox, waiter, saveAsD, openD;
    var IMAGE_PATH = "../Debug/img/";
    var info, eax;
    function Ready() {
        // Установим локаль для ресурсов
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
            UserCreds: {
                UserName: "user",
                Password: "password"
            },
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
        // Создаём сервис для работы с экспресс-отчётами
        eaxMbService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Открываем экспресс-отчёт с ключом 108
        eaxAnalyzer = eaxMbService.editDocument(108);
    }
    // Функция для создания и вывода диалога экспорта в файл формата HTML
    function showExpDialog() {

        //Создаем диалог экспорта
        htmlExpDialog = new PP.Exp.Ui.HtmlExportDialog({
            CaptionIcon: "html.png"
        });
        // Обрабатываем событие нажатия кнопки ОК
        htmlExpDialog.OkButtonClicked.add(showExpDialogOkClick);
        // Показываем диалог

        htmlExpDialog.show();
    }
    // Обработчик события нажатия кнопки OK
    function showExpDialogOkClick(sender, args) {
        alert('Экспорт в html (автоподбор высоты строк - ' + args.exportData.autoHeight + ')');
        // Производим экспорт в HTML
        eaxMbService.Export(eaxAnalyzer, args);
    }
</script>

4. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции для загрузки документа экспресс-отчета, внутри тега размещаем
 кнопку, по нажатию на которую будет создан диалог экспорта:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
    <!-- Кнопка, по нажатию на которую будет создан диалог для экспорта в XLS -->
    <input type="button" value="Вызвать диалог экспорта" onclick="showExpDialog()" />
</body>
5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В результате выполнения примера после нажатия кнопки «Вызвать диалог
 экспорта» на html-странице будет размещен компонент [HtmlExportDialog](HtmlExportDialog.htm):


![](HtmlExportDialog.png)


После нажатия на кнопку OK будет показан диалог сохранения экспортируемого
 в HTML файла.


См. также:


[HtmlExportDialog](HtmlExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
