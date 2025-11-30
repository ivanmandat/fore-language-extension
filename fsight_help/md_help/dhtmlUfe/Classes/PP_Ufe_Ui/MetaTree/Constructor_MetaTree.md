# Конструктор MetaTree

Конструктор MetaTree
-


# Конструктор MetaTree


## Синтаксис


PP.Ufe.Ui.MetaTree(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор MetaTree создает
 экземпляр класса MetaTree.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценариев PP.js, PP.Metabase.js, PP.Express.js, PP.Ufe.js, файлы
 стилей PP.css, PP.Metabase.css, PP.Express.css, PP.Ufe.css и файл с ресурсами
 (например resources.ru.js). В теге <body> html-страницы элемента
 <div> с идентификатором «metaTree». Пример нужно разместить в теге
 <script>. В событии onload тега <body> необходимо указать
 вызов функции createExpress(). Создаем дерево метаданных:


var metabase, eaxMdService, metaService, metaSource, metaTree;
PP.ImagePath = "../build/img/"; // Путь к папке с изображениями
PP.ScriptPath = "../build/"; // Путь к папке со сценариями
PP.CSSPath = "../build/"; // Путь к папке с файлами стилей
function createExpress() {
    // Создаем метабазу
    metabase = new PP.Mb.Metabase({
        PPServiceUrl: "PPService.axd?action=proxy",
        Id: "WAREHOUSE",
        UserCreds: {
            UserName: "user",
            Password: "password"
        }
    });
    // Открываем соединение с репозиторием
    metabase.open();
    // Создаём сервис для работы с экспресс-отчетами
    eaxMdService = new PP.Exp.EaxMdService({
        Metabase: metabase
    });
    // Открываем документ с ключом 10902
    eaxDocument = eaxMdService.editDocument(10902);
    // Создаем контейнер для экспресс-отчетов
    expressBox = new PP.Exp.Ui.ExpressBox({
        // Устанавливаем источник
        Source: eaxDocument,
        // Устанавливаем сервис
        Service: eaxMdService
    });
    setTimeout(createMetaTree, 1000);
}
function createMetaTree() {
    // Создаем сервис для дерева метаданных
    metaService = new PP.Ufe.MetaSrv({
        Metabase: metabase,
        ImagePath: PP.ImagePath
    });
    // Создаем источник для дерева метаданных
    metaSource = new PP.Ufe.MetaSource({
        ReportOdId: eaxDocument.getOdId().id,
        ActiveSheetKey: eaxDocument.getActiveSheetKey(),
        PPService: metaService,
        // Устанавливаем количество вершин дерева, которые будут загружены
        ChildrenReqCount: 100
    });
    // Устанавливаем признак проверки данных
    metaSource.setAllowHasData(true);
    // Разрешаем установку отметок элементам
    metaSource.setAllowSelection(true);
    // Создаем дерево метаданных
    metaTree = new PP.Ufe.Ui.MetaTree({
        ParentNode: document.getElementById("metaTree"),
        Source: metaSource,
        Height: 400,
        Width: 250
    });
}
В результате на странице будет отображено дерево метаданных:


![](../../PP_Ufe/MetaSource/MetaSource1.png)


См. также:


[MetaTree](MetaTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
