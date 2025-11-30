# Конструктор AddSLS2Dialog

Конструктор AddSLS2Dialog
-


# Конструктор AddSLS2Dialog


## Синтаксис


PP.TS.Ui.AddSLS2Dialog (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор AddSLS2Dialog создает
 экземпляр класса [AddSLS2Dialog](AddSLS2Dialog.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы укажите ссылки на следующие
 css- и js-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- PP.TS.js;


	- PP.Express.css;


	- PP.TS.css;


	- PP.Metabase.css;


	- PP.css.


Предполагается наличие рабочей книги с ключом 857804.


В теге <body> в качестве значения атрибута «onLoad» укажите имя
 функции, которая выполняется после окончания загрузки тела страницы:


<body onselectstart="return false" class="PPNoSelect" style="margin: 0px" onload='Ready();'>
</body>

В конце документа вставьте код для установки стилей к вершине «document.body»,
 которые соответствуют операционной системе клиента:


<script type="text/javascript"> PP.initOS(document.body);
 </script>
В теге SCRIPT добавьте следующий скрипт:


	<script type="text/javascript">
	    // Установим языковые настройки для ресурсов
		PP.setCurrentCulture(PP.Cultures.ru);
		// Объявляем константы
		var KEY = 857804; //ключ рабочей книги
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
		// Объявляем переменные
	    var metabase, waiter, tsService, wbk, addSLS2Dialog;

		function Ready() { //обработчик события загрузки body
	        // Создаём индикатор загрузки
			waiter = new PP.Ui.Waiter();
			// Создаём соединение с репозиторием
			metabase = new PP.Mb.Metabase(
			{
			    Id: "WAREHOUSE",
			    UserCreds: { UserName: "user", Password: "password" },
			    StartRequest: function(){waiter.show();},
			    EndRequest: function(){waiter.hide();},
			    Error: function(sender, args){alert(args.ResponseText);}
			});
	        // Открываем соединение с репозиторием
			metabase.open();
	        // Создаём сервис для работы с временными рядами
			tsService = new PP.TS.TSService({ Metabase: metabase });
			// Открываем документ
	        tsService.openDocument(KEY, onFirstOpened);
	        // Обработчик события открытия документа
			function onFirstOpened(sender, args) {
	            wbk = args.Workbook; //рабочая книга
				console.log(wbk);

				//обработчик события нажатия на кнопку диалога "ОК"
				function onAddSLS2DialogOkButtonClick(sender, args)
				{
					var newDlg = sender; // Диалог добавления ревизии-метки
				}
				// Создаём экземпляр класса диалога добавления метки
				addSLS2Dialog =  new PP.TS.Ui.AddSLS2Dialog({
					Data: PP.TS.Ui.FormulaTypeEnum.SLS2,
					Series: wbk.getSeries(),
					ResourceKey: "AddSLS2Dialog", //ключ ресурсов
					//обработчик события нажания кнопки "ОК" на диалоге
					OkButtonClicked: PP.Delegate(onDummyActionFactory("AddSLS2Dialog OkButtonClicked"), this),
					//обработчик события нажания кнопки "Cancel" на диалоге
					CancelButtonClicked: PP.Delegate(onDummyActionFactory("AddSLS2Dialog CancelButtonClicked"), this),
					//обработчик события закрытия диалога
					Closed: PP.Delegate(onDummyActionFactory("AddSLS2Dialog Closed"), this)
				});

				// Изменяем значение свойства отображения текста справа налево
				addSLS2Dialog.setIsRTL(false);
				// Отображаем диалог
				addSLS2Dialog.show();
			}
		}
</script>
После выполнения примера на html-странице будет размещено окно диалога
 добавления нелинейной регрессии:


![](AddSLSDialog_ex.png)


См. также:


[AddSLS2Dialog](AddSLS2Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
