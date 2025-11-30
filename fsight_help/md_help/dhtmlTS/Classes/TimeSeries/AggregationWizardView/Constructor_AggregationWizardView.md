# Конструктор AggregationWizardView

Конструктор AggregationWizardView
-


# Конструктор AggregationWizardView


## Синтаксис


PP.TS.Ui.AggregationWizardView (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор AggregationWizardView создает экземпляр класса [AggregationWizardView](AggregationWizardView.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие js-файлы:


-
PP.js;


-
PP.Metabase.js;


-
PP.Express.js;


-
PP.TS.js.


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

Также необходимо наличие рабочей книги с ключом 5183.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" onload="Ready()">
<div class="PPSlidePanel LeftSided PPWorkbookSlide PPC">
 <div class="PPNavigationBar PPC PPTSNavBread" style="width: 302px;height: 400px;">
  <div class="Layout">
   <div class="PPNavItm PPC">
    <div class="PPNavItemView">
     <div class="PPScrollBox PPC">
      <div class="PPScrollContent">
       <div class="PPNavItemContent">
        <div class="PPPanelContent" id='example' style="width: 250px;height: 400px;">
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

В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>
В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
	// Установим языковые настройки для ресурсов
	PP.setCurrentCulture(PP.Cultures.ru);
	// Объявляем переменные
	var ctrl;
	function Ready() //обработчик события загрузки body
	{
		waiter = new PP.Ui.Waiter();
		metabase = new PP.Mb.Metabase(
		{
			Id: "WAREHOUSE",
			UserCreds: { UserName: "user", Password: "password" },
			StartRequest: function () {
				waiter.show();
			},
			EndRequest: function () {
				waiter.hide();
			},
			Error: function (sender, args) {
				alert(args.ResponseText);
			}
		});
			// Открываем соединение с репозиторием
			metabase.open();
			var tsService = new PP.TS.TSService({ Metabase: metabase });
			var key = 5183;
			var wbk;
			tsService.openDocument(key, onFirstOpened);
			function onFirstOpened(sender, args)
			{
				var wbk = args.Workbook;
				//Создаём экземпляр вида панели параметров агрегации
				ctrl = new PP.TS.Ui.AggregationWizardView({
				Source: wbk,
				IsRTL: false
			});
				//Добавляем в узел DOM "example"
				ctrl.addToNode("example");
				console.log("Устанавливаем состояние компонента AggregationWizardView");
				var tsMethod =({interpolate:{type: "Repeat"}});
				ctrl.setCurrentState(tsMethod);
				console.log("Выводим в консоль текущее состояние");
				var currentState = ctrl.getCurrentState();
				console.log(currentState);
				console.log("Получаем  тип агрегации по времени");
				var methodType = ctrl.getMethodType(tsMethod);
				console.log(methodType);
		}
	}
</script>

После выполнения примера на html-странице будет размещена панель параметров агрегации, имеющая следующий вид:


![](getMethodType.PNG)


В консоль браузера будет выведен JSON-объект, содержащий состояние компонента AggregationWizardView и тип агрегации по времени.


См. также:


[AggregationWizardView](AggregationWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
