# Пример создания компонента EaxDimBar

Пример создания компонента EaxDimBar
-


# Пример создания компонента EaxDimBar


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылки на следующие css-файлы: PP.css, PP.Express.css.


Также нужно добавить ссылки на js-файлы: PP.js, PP.Metabase.js, PP.Express.js,
 resources.ru.js.


2. Затем в теге <head> добавим скрипт, который создает панель
 измерений экспресс-отчета и таблицу:


<script>
    var dimBar, eaxGrid, metabase, eaxAnalyzer, eaxMbService;
    function Ready() {
        // Создаём соединение с репозиторием
        metabase = new PP.Mb.Metabase({
            ExportUrl: "PPService.axd?action=export",
            ImportUrl: "PPService.axd?action=import",
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
        eaxMbService = new PP.Exp.EaxMdService({
            Metabase: metabase
        });
        // Открываем экспресс-отчёт с ключом 109
        eaxAnalyzer = eaxMbService.editDocument(109);
        // Создаем компонент для работы с панелью измерений OLAP
        dimBar = new PP.Exp.Ui.EaxDimBar({
            ParentNode: "dimBar",

            Source: eaxAnalyzer, // Задаем источник данных
            EnableDragDim: true, // Разрешаем перемещать измерения
            ImagePath: "../../build/img/",
            Width: 400,
            Height: 400,
            Service: eaxMbService,
            // Обрабатываем событие изменения отчёта
            MetadataChanged: function (sender, args) {
                eaxGrid.refresh(args); // При изменении отчета обновляем таблицу с данными
            }

        });
        // Создаем таблицу с данными
        eaxGrid = new PP.Exp.Ui.EaxGrid({
            Source: eaxAnalyzer, // Задаем источник данных
            ParentNode: "divTable",
            Id: "table1",
            EditMode: false,
            Width: 500,
            Height: 400,
            Service: eaxMbService,
            AutoSendSelection: true
        });
    }
</script>

3. В теге <body> в качестве значения атрибута «onLoad» указываем
 название функции для создания рабочей области экспресс-отчета, а также
 размещаем блоки с идентификаторами «dimBar» и «divTable»:


  <body onselectstart="return false" onload="Ready()">
      <table>
          <tbody>
              <tr>
                  <td style='vertical-align: top'>
                      <div id="dimBar">
                      </div>
                  </td>
                  <td>
                      <div id="divTable">
                      </div>
                  </td>
                  <td>
                      <div id="divChart">
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
    </body>
4. В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
После выполнения примера на html-странице будет размещён компоненты
 [EaxDimBar](EaxDimBar.htm) и [EaxGrid](../EaxGrid/EaxGrid.htm):


![](EaxDimBar_Example.png)


См. также:


[EaxDimBar](EaxDimBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
