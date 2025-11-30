# Пример создания компонента StatTreeView

Пример создания компонента StatTreeView
-


# Пример создания компонента StatTreeView


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
 диалог, отображающий дерево со статистическими характеристиками данных
 экспресс-отчета [StatTreeView](StatTreeView.htm):.


<script type="text/javascript">

    var metabase, eaxAnalyzer, eaxMbService, waiter, statTreeView;
    var IMAGE_PATH = "../Debug/img/";
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
    function openStat() {

        // Создаем диалог со статистическими характеристиками данных экспресс-отчета
        statTreeView = new PP.Exp.Ui.StatTreeView({
            Source: eaxAnalyzer, // Задаем источник данных
            Width: 500,
            Height: 500,
            ShowLines: true,
            ParentNode: document.body
        });
    }
    // Функция для запроса статистических данных у сервисов
    function getStat() {

        // Запрашиваем данные у сервисов
        eaxMbService.getStatData(eaxAnalyzer, refresh);
        function refresh() {
            statTreeView.refreshAll();
            // Подбираем оптимальную ширину колонок в дереве
            statTreeView.adjustColumnWidth();
            alert('Получили данные и обновили дерево статистик');
        }
    }
</script>
4. В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции для загрузки документа экспресс-отчета, внутри тега размещаем
 две кнопки, по нажатию на которые будет создан диалог и будут загружены
 статистические данные в него соответственно:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
<!-- Кнопка, по нажатию на которую будет создан диалог -->
<input type="button" value="Отобразить диалог" onclick="openStat()" />
<!-- Кнопка, по нажатию на которую будут загружены статистические данные в компонент-->
<input type="button" value="Получить данные" onclick="getStat()" />
</body>

5. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>

После выполнения примера после нажатия кнопок «Отобразить диалог» и
 «Получить данные» на html-странице будет размещен компонент [StatTreeView](StatTreeView.htm):


![](StatTreeView.png)


См. также:


[StatTreeView](StatTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
