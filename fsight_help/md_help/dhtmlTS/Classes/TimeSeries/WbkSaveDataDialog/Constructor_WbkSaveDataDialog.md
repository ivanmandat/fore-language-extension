# Конструктор WbkSaveDataDialog

Конструктор WbkSaveDataDialog
-


# Конструктор WbkSaveDataDialog


## Синтаксис


PP.TS.Ui.WbkSaveDataDialog  (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор WbkSaveDataDialog создает экземпляр класса [WbkSaveDataDialog](WbkSaveDataDialog.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие js и css-файлы:


-
PP.css;


-
PP.Express.css;


-
PP.TS.css;


-
PP.Metabase.css;


-
PP.js;


-
PP.Metabase.js;


-
PP.Express.js;


-
PP.TS.js.


В теге <body> в качестве значения атрибута «onLoad» указываем имя функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" style="margin: 0px">
	<input type="button" value="save data" onclick="openDialog();" />
</body>

В конце документа вставляем код для установки стилей к вершине «document.body», которые соответствуют операционной системе клиента:


В теге SCRIPT добавьте следующий скрипт:


<script type="text/javascript">
	// Установим языковые настройки для ресурсов
	PP.setCurrentCulture(PP.Cultures.ru);
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
		//функция обработчика события нажатия на кнопку "ОК" диалога
		function onWbkSaveDataDialogOkButtonClick(sender, args)
			{
				var newDlg = sender; // Диалог добавления ревизии-метки
				var comment = newDlg.getComment();
				console.log("comment: " + comment + "\n");
			}
		// Создаем экземпляр класса реализующего диалог сохранения
		var wbkSaveDataDialog =  new PP.TS.Ui.WbkSaveDataDialog({
			ResourceKey: "WbkSaveDialog",
			OkButtonClicked: PP.Delegate(onWbkSaveDataDialogOkButtonClick, this),
			CancelButtonClicked: PP.Delegate(onDummyActionFactory("wbkSaveDialogCancelClicked"), this),
			Closed: PP.Delegate(onDummyActionFactory("wbkSaveDialogClosed"), this)
		});
		// Показываем диалог
		wbkSaveDataDialog.show();
	};
</script>

После выполнения примера на html-странице будет размещена кнопка «save data», при нажатии на которую появится диалог для создания комментария:


![](savedata.PNG)


См. также:


[WbkSaveDataDialog](WbkSaveDataDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
