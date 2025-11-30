# Конструктор X11EquationWizardView

Конструктор X11EquationWizardView
-


# Конструктор X11EquationWizardView


## Синтаксис


PP.TS.Ui.X11EquationWizardView (settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор X11EquationWizardView
 создает экземпляр класса [X11EquationWizardView](X11EquationWizardView.htm).


## Пример


Для выполнения примера предполагается наличие рабочей книги с ключом
 1583.


В теге HEAD html-страницы укажите ссылки на следующие js-файлы:


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js;


	- PP.js.


Для корректного отображения примера в разных браузерах добавьте следующий
 код:


<script type="text/javascript">
	if (window.devicePixelRatio == 2) // Retina
		PP.scriptManager.loadStyles(["../build/PP.retina.css", "../build/PP.App.retina.css", "../build/PP.Express.retina.css", "../build/PP.TS.retina.css", "../build/PP.Metabase.retina.css"]);
	else if (PP.IsIE && PP.IEVer < 8) // Old IE
		PP.scriptManager.loadStyles(["../build/PP.css", "../build/PP.App.css", "../build/PP.Express.css", "../build/PP.TS.css", "../build/PP.Metabase.css", "../build/PP_IE7.css"]);
	else // All other
		PP.scriptManager.loadStyles(["../build/PP.css", "../build/PP.App.css", "../build/PP.Express.css", "../build/PP.TS.css", "../build/PP.Metabase.css"]);
</script>

В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы, и
 код, который задает вид компонента:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
<div class="PPSlidePanel LeftSided PPWorkbookSlide PPC">
<div class="PPNavigationBar PPC PPTSNavBread" style="width: 302px;height: 400px;">
	<div class="Layout">
	 <div class="PPNavItm PPC">
	  <div class="PPNavItemView">
	   <div class="PPScrollBox PPC">
	    <div class="PPScrollContent">
	     <div class="PPNavItemContent">
	      <div class="PPPanelContent" id='example' style="width: 250px;height: 550px;">
	       </div>
	       </div>
	      </div>
	     </div>
	    </div>
	   </div>
	</div>
</div>
</div>
</body>

В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
	PP.initOS(document.body);
</script>

В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
    // Устанавливаем языковые настройки для ресурсов
    PP.setCurrentCulture(PP.Cultures.ru);
    var ctrl;
    function Ready() // Обработчик события загрузки body
        {
            waiter = new PP.Ui.Waiter();
            metabase = new PP.Mb.Metabase({

                Id: "WAREHOUSE",
                UserCreds: {
                    UserName: "user",
                    Password: "password"
                },
                StartRequest: function() {
                    waiter.show();
                },
                EndRequest: function() {
                    waiter.hide();
                },

                Error: function(sender, args) {
                    alert(args.ResponseText);
                }
            });
            // Открываем соединение с репозиторием
            metabase.open();
            var tsService = new PP.TS.TSService({
                Metabase: metabase
            });
            var key = 5183; // Ключ рабочей книги
            var wbk;
            tsService.openDocument(key, onFirstOpened);
            function onFirstOpened(sender, args) {

                var wbk = args.Workbook;
                // Создаём мастер выделения сезонности
                equation = new PP.TS.Ui.X11EquationWizardView({
                    Source: wbk,
                    IsRTL: false,
                    ControlChanged: new PP.Delegate(onStateChanged)
                });
                // Добавляем в узел DOM "example"
                equation.addToNode("example");

                state = equation.getCurrentState();
                equation._onControlChanged();
                /* По событию изменения компонента вызывается
                обработчик события изменения компонента */
                function onStateChanged(sender, args) {
                    currentState = equation.getCurrentState();
                    console.log(currentState);
                }
            }
        }
</script>
После выполнения примера на html-странице будет размещён мастер выделения
 сезонности. При изменении состояния компонента в консоль браузера будет
 выведен JSON-объект с состоянием компонента и соответствующее сообщение.


См. также:


[X11EquationWizardView](X11EquationWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
