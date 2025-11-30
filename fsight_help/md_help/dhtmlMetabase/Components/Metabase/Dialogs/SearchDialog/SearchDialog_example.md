# Пример создания компонента SearchDialog

Пример создания компонента SearchDialog
-


# Пример создания компонента SearchDialog


Для выполнения примера в теге HEAD *.html-страницы подключите ссылки
 на следующие *.js и *.css-файлы:


	- PP.js;


	- PP.css;


	- PP.Metabase.js;


	- PP.Metabase.css;


	- PP.Navigator.js;


	- PP.Navigator.css.


В теге BODY добавьте следующий код:


<body onload="onLoad();" style ="height:600px">
</body>
В теге SCRIPT добавьте скрипт для создания компонента:


<script type="text/javascript">
	var searchDialog, mb, waiter;
	function onLoad() {
	   waiter = new PP.Ui.Waiter();
	   PP.resourceManager.setRootResourcesFolder("resources/");
	   PP.resourceManager.setResourceList(['PP', 'Metabase']);
	   mb = new PP.Mb.Metabase({
	      PPServiceUrl: "PPService.axd?action=proxy",
	      Id: "PrognozPlatform7_systest",
	      UserCreds: {
	         UserName: "sa",
	         Password: "Qwerty1"
	      },
	      EndRequest: function () {
	         waiter.hide();
	      },
	      Opened: function () {
	         // После открытия репозитория загружаем ресурсы и после их загрузки отображаем диалог
	         PP.setCurrentCulture(PP.Cultures.ru);
	         PP.resourceManager.ResourcesLoaded.add(onResLoaded, this);
	         waiter.hide();
	      },
	      StartRequest: function () {
	         waiter.show();
	      },
	      Error: function (sender, args) {
	         waiter.hide();
	         alert(args.ResponseText);
	      }
	   });
	   mb.open();
	}
	function onResLoaded(sender, arg) {
	   searchDialog = new PP.Ui.SearchDialog({
	      ImagePath: "build/img/",
	      ObjectClassId: 2562, //Тип искомых объектов - регламентный отчет
	      ShowDetails: true, // Развернуты параметры поиска
	      Metabase: mb,
	   });
	   searchDialog.FindAll.add(PP.Delegate(onFindAll), this)
	   searchDialog.Find.add(PP.Delegate(onFind), this)
	   searchDialog.show();
	};
	 //При нажатии на кнопку «Найти все»
	function onFindAll(sender, args) {
	   //Массив найденных объектов
	   var objs = args.Objects;
	   //Выводим свойства найденных объектов в консоль браузера
	   for (var i = 0, len = objs.length; i & lt len; i++) {
	      console.log("Object #" + (i + 1));
	      for (var p in objs[i]) {
	         console.log("    " + p + " : " + objs[i][p]);
	      }
	   }
	};
	 //При нажатии на кнопку «Найти все»
	function onFind(sender, args) {
	   // Выводим в консоль все полученные свойства найденного объекта
	   console.log("Object #" + args.Index)
	   for (var p in args.Object) {
	      console.log("    " + p + " : " + args.Object[p]);
	   }
	};
</script>
После выполнения примера на странице будет размещен компонент SearchDialog, имеющий следующий
 вид:


![](SearchDialog.gif)


Введите в строку поиска текст, по которому нужно найти объекты репозитория.
 При нажатии на кнопку «Найти» в консоль будет выведены название, порядковый
 номер и свойства найденного объекта. При нажатии на кнопку «Найти все»
 в консоль будут выведены названия, порядковые номера и свойства найденных
 объектов. Например:


 Object #0


    @ts : 2011-07-19T15:43:23.000


    @isShortcut : false


    @isLink : false


    @hf : false


    i : OBJ3557


    n : World Indicators


    k : 3557


    c : 0


    p : 4294967295


    h : false


См. также:


[SearchDialog](SearchDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
