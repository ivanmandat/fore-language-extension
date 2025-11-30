# Конструктор ViewAsDialog

Конструктор ViewAsDialog
-


# Конструктор ViewAsDialog


## Синтаксис


PP.TS.Ui.ViewAsDialog (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор ViewAsDialog создает
 экземпляр класса [ViewAsDialog](ViewAsDialog.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 js- и css-файлы:


	- PP.css;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js.


В теге <body> в качестве значения атрибута «onLoad» указываем
 имя функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" style="margin: 0px">
	<input type="button" value="view as" onclick="openDialog();" />
</body>

В конце документа вставляем код, устанавливающий стили к вершине
 «document.body», соответствующие операционной системе клиента:


<script type="text/javascript">
    PP.initOS(document.body);
</script>

В теле html-страницы добавьте следующий скрипт:


<script type="text/javascript">
		// Установим языковые настройки для ресурсов
	    PP.setCurrentCulture(PP.Cultures.ru);

		//Объявляем переменные
		var viewAsDialog;

		//Функция для получения функций обработчиков
		//В качестве параметра принимает вспомогательную информацию, выводимую в консоль при вызове обработчика.
		//Это может быть, например, строка, содержащая имя класса и события
		function onDummyActionFactory(actionCaption){
			return function (sender, args){
				console.log(actionCaption);
				console.log(sender);
				console.log(args);
			};
		}

	    function openDialog() { //обработчик события нажатия на кнопку
             function onViewAsDialogOkButtonClick(sender, args)
             {
				console.log("onViewAsDialogOkButtonClick");
	            var newDlg = sender; // Диалог добавления ревизии-метки
	            var info = newDlg.getInversionInformation(); //возврат информации о введённых пользователем данных в диалоге
	            console.log(info);
             }

			// Создаем экземпляр класса реализующего диалог ввода
            viewAsDialog =  new PP.TS.Ui.ViewAsDialog({
			    ResourceKey: "ViewAsDialogTitle", //ключ ресурса
				Width: 420, //ширина
				Height: 170, //высота
				ParentNode: document.body, //родительский узел DOM
			    OkButtonClicked: PP.Delegate(onViewAsDialogOkButtonClick, this), //событие нажатия кнопки "ОК"
			    CancelButtonClicked: PP.Delegate(onDummyActionFactory("ViewAsDialogCancelClicked"), this), //событие нажатия кнопки "Cancel"
			    Closed: PP.Delegate(onDummyActionFactory("ViewAsDialogClosed"), this) //событие закрытия диалога
		    });
			// Показываем диалог
			viewAsDialog.show();
	    };
</script>
После выполнения примера на html-странице будет размещена кнопка «view
 as», при нажатии на которую появится следующее окно:


![](ViewAsDialog1.png)


Также в консоль браузера будет выведено соответствующее сообщение.


См. также:


[ViewAsDialog](ViewAsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
