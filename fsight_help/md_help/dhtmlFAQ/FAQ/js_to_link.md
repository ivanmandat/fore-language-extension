# Подключение пользовательской js-функции

Подключение пользовательской js-функции
-


# Подключение пользовательской js-функции


Пользовательская js-функция доступна для подключения:


	- в инструменте «[Аналитичекие
	 панели](UiAdhoc.chm::/UiAdhoc_Purpose.htm)» для выполнения команды «Вызов
	 функции JS» с помощью элемента управления «[Кнопка](UiAdhoc.chm::/Blocks/Controls/Button.htm)»;


	- в инструменте «[Отчёты](UiReport.chm::/UiReport_purpose.htm)»
	 и расширении «[Интерактивные
	 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)»:


		- для настройки действия гиперссылки в [регламентном
		 отчёте](uireport.chm::/web/Table/Attribute/Format.htm#hyperlink) и [форме ввода](dataentryforms.chm::/Web/Common/Format.htm),
		 заданной в ячейке отчёта/формы;


		- для настройки действия, предобработчика, постобработчика
		 пользовательской кнопки, добавленной на панели инструментов в
		 [регламентном
		 отчёте](uireport.chm::/Web/Reports/Button/Button.htm) и [форме
		 ввода](dataentryforms.chm::/Web/Custom_module/Advanced.htm);


	- в веб-приложении и расширении «[Конструктор бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm)»
	 для подписки на события:


		- при отрисовке [типа страницы](#signature): login,
		 navigator или object;


		- при открытии объекта;


		- при открытии папки в навигаторе объектов.


[![](../opened.gif)![](../closed.gif)Сигнатура пользовательской
 js-функции для аналитических панелей, регламентных отчётов и форм ввода](javascript:TextPopup(this))


	Сигнатура пользовательской js-функции для аналитических панелей,
	 регламентных отчётов и форм ввода:


	function <Наименование функции>(пользовательские
	 параметры, callback, args)

	{

	  ...

	}


	Параметры:


		- пользовательские параметры.
		 Значения пользовательских параметров в соответствии с сигнатурой
		 вызываемой функции. Необязательный параметр;


		- callback. Функция
		 обратного вызова. Используется при настройке действия пользовательской
		 кнопки в регламентных отчётах/формах ввода. Обязательный параметр.


		- args. Аргументы
		 функции. Позволяют получить доступ к объекту, из которого была
		 выполнена js-функция. Особенности использования аргументов функции:


			- для работы с аналитической панелью используйте компонент
			 [KapBox](dhtmlAdhoc.chm::/Components/KapBox/KapBox.htm)
			 первым аргументом.


	Пример js-функции, которая отображает
	 количество блоков, содержащихся в аналитической панели, в информационном
	 сообщении:


	function countBlocks(args)

	{

	  activeSlideBlocks = args.KapBox.getActiveSlideBlocks();

	  count = activeSlideBlocks.length;

	  alert("Количество блоков слайда:  " + count);

	}


			- для работы с регламентным отчётом/формой ввода при настройке
			 действия гиперссылки или пользовательской кнопки в качестве
			 аргументов могут использоваться параметры:


				- Report.
				 Параметр для управления отчётом;


				- ReportOdId.
				 Идентификатор отчёта;


				- DataEntryForm.
				 Параметр для управления формой ввода;


				- DataArea.
				 Параметр для управления [табличной
				 областью](dhtmlReport.chm::/Classes/RegularReport/DataArea/DataArea.htm) в форме ввода.


	Пример js-функции при использовании гиперссылки
	 в форме ввода:


	function addAttachmentsTB(row,
	 col, args)

	{

	  var rep = args.Report;

	  var da = args.DataArea;

	  var grid = da.getGridView();

	  var tabSheet = grid.getTabSheet();

	  var tabSheetRange = tabSheet.getCell(row, col);

	  attachFile(da, tabSheetRange);

	}


[![](../opened.gif)![](../closed.gif)Сигнатура
 пользовательской js-функции для веб-приложения и конструктора бизнес-приложений](javascript:TextPopup(this))


	Сигнатура пользовательской js-функции для веб-приложения и конструктора
	 бизнес-приложений:


	Platform.Events.on('<наименование
	 события>',(args)=>

	{

	  ...

	})


	Параметры:


		- наименование события.
		 Доступна подписка на следующие события:


			- startOpenPage.
			 Обработка события начала отрисовки страницы;


			- startOpenObject.
			 Обработка события начала открытия объекта;


			- startOpenFolder.
			 Обработка события открытия папки в навигаторе объектов.


	Обязательный параметр. Событие возвращает
	 аргументы, которые затем можно использовать;


		- args. Аргументы
		 функции. Необязательный параметр. Позволяют получить информацию
		 о событии:


			- ref. Ссылка
			 на DOM-вершину, в которой происходит событие. Используется
			 для событий startOpenPage,
			 startOpenObject, startOpenFolder;


			- classNames.
			 Классы корневой DOM-вершины. Используется для событий startOpenPage, startOpenObject,
			 startOpenFolder;


			- page. Тип открываемой
			 страницы:


				- login. Страница
				 с отображением [окна
				 регистрации](getstarted.chm::/getstarted/get_started.htm) для входа в систему;


				- navigator.
				 В веб-приложении - страница с отображением [навигатора
				 объектов](getstarted.chm::/Interface/Interface_Navigator.htm). В конструкторе бизнес-приложений
				 - страница с отображением навигатора объектов или открытого
				 объекта с [навигационным
				 меню](Constructor.chm::/Intro/Component_interface.htm);


				- object.
				 В веб-приложении - страница с отображением открытого объекта.
				 В конструкторе бизнес-приложений - страница с отображением
				 открытого объекта без навигационного меню. Объект без
				 навигационного меню может быть открыт из другого объекта,
				 например, из задачи ETL.


	Используется для события startOpenPage;


			- object. Описание
			 объекта/папки. Используется для события startOpenObject/startOpenFolder;


			- openMode. Режим
			 открытия инструмента. Используется для события startOpenObject.


	Примечание.
	 При одновременной подписке на события startOpenPage
	 и startOpenObject выполняется
	 последовательная обработка событий: в процессе открытия объекта сначала
	 обрабатывается событие начала отрисовки страницы, затем - начала открытия
	 объекта.


	Пример js-функции, которая обрабатывает событие при открытии объекта
	 в веб-приложении/бизнес-приложении:


	console.log(Platform.Events);

	Platform.Events.on('startOpenObject', (args) =>

	{

	  console.log(args.object.key);

	  console.log(args.classNames);

	  console.log(args.openMode);

	  var d = document.createElement("div");

	  d.style="background-color: red;width: 10px;height:
	 10px;position: absolute;top: 18px;left: 10px;border-radius: 5px; z-index:
	 1";

	  var rootNode = document.getElementsByClassName(args.classNames)[0];

	  rootNode.style.position = 'relative';

	  if (rootNode )

	    rootNode.appendChild(d);

	});


Для подключения пользовательской js-функции:


	- Создайте js-файл, содержащий пользовательскую js-функцию, в
	 папке установки веб-приложения/конструктора бизнес-приложений. Например,
	 файл Func.js:


function myFunc(){

  alert("Пример вызова пользовательской js-функции из файла");


}


Примеры функций представлены в описании сигнатур.


	- Добавьте ссылку на созданный js-файл в поле [externalJs](Setup.chm::/UiWebSetup/03_setup_web/PP_config_Java.htm#externaljs)
	 в конфигурационном файле [config.json](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#config_json) для веб-приложения
	 или [config.json](setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#config_json)/[DBA.config.json](setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json) для
	 конструктора бизнес-приложений:


"externalJs": [{"src":
 "config/Func.js"}]


	- [Перезапустите
	 BI-сервер](setup.chm::/UiWebSetup/01_BIServer/bi-service_restart.htm).


После выполнения действий пользовательская js-функция будет подключена
 к соответствующему объекту при указании её имени в настройках вызова js-функции.


См. также:


[Вопросы и ответы](../dhtml_FAQ.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
