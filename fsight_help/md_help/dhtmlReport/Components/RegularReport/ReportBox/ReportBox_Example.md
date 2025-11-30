# Пример размещения компонента ReportBox

Пример размещения компонента ReportBox
-


# Пример размещения компонента ReportBox


Для выполнения примера создайте html-страницу и выполните следующие
 действия:


1. В теге HEAD добавьте ссылки на следующие js-и css-файлы:


	- PP.js;


	- PP.css;


	- PP.App.css;


	- PP.Metabase.css;


	- PP.Report.css;


	- PP.Metabase.js;


	- PP.Report.js;


	- PP.App.js.


2. В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
    var prxReport, reportBox, prxMbService;
    function renderReport() {
       PP.ImagePath = "../build/img/";
       PP.ScriptPath = "../build/"; // путь до сборок
       PP.CSSPath = "../build/";
       PP.resourceManager.setRootResourcesFolder("../resources/"); //путь до папки с ресурсами
       PP.resourceManager.setResourceList(['PP', 'Metabase', 'Regular', 'VisualizerMaster']);
       PP.setCurrentCulture(PP.Cultures.ru); //языковые настройки для ресурсов
       var waiter = new PP.Ui.Waiter(); //устанавливаем соединение с метабазой
       metabase = new PP.Mb.Metabase({
           PPServiceUrl: "PPService.axd",
           Id: "WAREHOUSE",
           UserCreds: { UserName: "user", Password: "password" },
          //в начале запроса к метабазе отображается компонент Waiter
           StartRequest: function () {
               waiter.show();
           },
           //при окончании запроса к метабазе компонент Waiter скрывается
           EndRequest: function () {
               waiter.hide();
               //при окончании выполнения запроса все запросы удаляются из кеша
               metabase.clearCache();
           },
        //при ошибке на экране появится сообщение с текстом ошибки
        Error: function (sender, args) {
            alert(args.ResponseText);
        }
      });
     metabase.open(); //открываем метабазу
     prxMbService = new PP.Prx.PrxMdService({ Metabase: metabase }); //создаем сервис для работы с регламентными отчетами
     prxReport = prxMbService.open(3275); // открываем регламентный отчет по ключу;
     var imgPath = "../build/img/"; // путь к папке с пиктограммами
     // создаем компонент ReportBox
     reportBox = new PP.Prx.Ui.ReportBox({
         Source: prxReport,
         Service: prxMbService,
         ParentNode:document.body,
         ImagePath: imgPath,
     });
    };
</script>
Примечание.
 Компонент ReportBox с подписками на события главного меню «Отчёт» реализуется
 при помощи компонента [PP.App.init](dhtmlApp.chm::/Classes/App/PP.App.init.htm)
 или конструктора [PP.Application.PrxModuleObject](dhtmlApp.chm::/Classes/Application/PrxModuleObject/Constructor_PrxModuleObject.htm).


Замените в скрипте строки создания компонента ReportBox для использования
 PP.App.init :


PP.App.init(PP.App.ModuleType.Reporter, { Metabase: {IsMbOpened: true}, Module: {
    Source : prxReport,
    Service : prxMbService,
    },
    ParentNode: document.body });
Для использования PP.App.PrxModuleObject:


var moduleObject = new PP.App.PrxModuleObject({"Source":prxReport, "Service": prxMbService, "ParentNode":document.body});
reportBox = moduleObject.getReportBox();
3. В тег BODY добавьте следующий код:


<body  onload="renderReport()">
</body>
После выполнения примера на html-странице будет размещен компонент [ReportBox](ReportBox.htm), имеющий следующий вид:


![](ReportBox.gif)


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
